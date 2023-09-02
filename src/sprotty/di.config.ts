import { Container, ContainerModule } from "inversify";
import {
  CircularNodeView,
  ConsoleLogger,
  LocalModelSource,
  LogLevel,
  PolylineEdgeView,
  RectangularNodeView,
  SGraphView,
  SLabelView,
  TYPES,
  SGraph,
  SNode,
  SPort,
  SLabel,
  SEdge,
  configureModelElement,
  configureViewerOptions,
  edgeIntersectionModule,
  loadDefaultModules,
} from "sprotty";
import {
  SGraph as SGraphAPI,
  SNode as SNodeAPI,
  SLabel as SLabelAPI,
  SEdge as SEdgeAPI,
  SPort as SPortAPI,
  SModelIndex,
} from "sprotty-protocol";
import ElkConstructor from "elkjs/lib/elk.bundled";
import { LayoutOptions } from "elkjs/lib/elk-api";

import {
  DefaultLayoutConfigurator,
  ElkFactory,
  ElkLayoutEngine,
  elkLayoutModule,
  ILayoutConfigurator,
} from "sprotty-elk/lib/inversify";

const elkFactory: ElkFactory = () =>
  new ElkConstructor({
    algorithms: ["layered"],
  });

const createContainer = (containerId: string) => {
  const fettuccineModule = new ContainerModule(
    (bind, unbind, isBound, rebind) => {
      bind(TYPES.ModelSource).to(LocalModelSource).inSingletonScope();
      bind(TYPES.IModelLayoutEngine).toService(ElkLayoutEngine);
      bind(ElkFactory).toConstantValue(elkFactory);
      bind(FettuccineGraphLayoutConfigurator).toSelf().inSingletonScope();
      rebind(ILayoutConfigurator)
        .to(FettuccineGraphLayoutConfigurator)
        .inSingletonScope();
      rebind(TYPES.ILogger).to(ConsoleLogger).inSingletonScope();
      rebind(TYPES.LogLevel).toConstantValue(LogLevel.log);

      const context = { bind, unbind, isBound, rebind };

      configureModelElement(context, "graph", SGraph, SGraphView);
      configureModelElement(context, "node", SNode, RectangularNodeView);
      configureModelElement(context, "port", SPort, CircularNodeView);
      configureModelElement(context, "label", SLabel, SLabelView);
      configureModelElement(context, "edge", SEdge, PolylineEdgeView);

      configureViewerOptions(context, {
        needsClientLayout: true,
        baseDiv: containerId,
      });
    },
  );

  const container = new Container();
  loadDefaultModules(container);
  container.load(edgeIntersectionModule);
  container.load(elkLayoutModule, fettuccineModule);

  return container;
};

export class FettuccineGraphLayoutConfigurator extends DefaultLayoutConfigurator {
  direction: "UP" | "DOWN" | "LEFT" | "RIGHT" = "LEFT";

  protected override graphOptions(
    sgraph: SGraphAPI,
    index: SModelIndex,
  ): LayoutOptions | undefined {
    return {
      "org.eclipse.elk.algorithm": "org.eclipse.elk.layered",
      "elk.direction": this.direction,
    };
  }

  protected override nodeOptions(
    snode: SNodeAPI,
    index: SModelIndex,
  ): LayoutOptions | undefined {
    return {
      "org.eclipse.elk.nodeLabels.placement": "OUTSIDE H_LEFT V_TOP",
    };
  }

  protected override portOptions(
    sport: SPortAPI,
    index: SModelIndex,
  ): LayoutOptions | undefined {
    return {
      "org.eclipse.elk.port.borderOffset": "1",
    };
  }

  protected override labelOptions(
    slabel: SLabelAPI,
    index: SModelIndex,
  ): LayoutOptions | undefined {
    return {};
  }

  protected override edgeOptions(
    sedge: SEdgeAPI,
    index: SModelIndex,
  ): LayoutOptions | undefined {
    return {};
  }
}

export default createContainer;
