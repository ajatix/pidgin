import { LayoutOptions } from "elkjs/lib/elk-api";
import ElkConstructor from "elkjs/lib/elk.bundled";
import { Container, ContainerModule } from "inversify";
import { MonacoLanguageClient } from "monaco-languageclient";
import {
  CircularNodeView,
  CircularPort,
  configureModelElement,
  configureViewerOptions,
  ConsoleLogger,
  edgeIntersectionModule,
  editFeature,
  loadDefaultModules,
  LogLevel,
  PolylineEdgeView,
  RectangularNodeView,
  SEdge,
  SGraph,
  SGraphView,
  SLabel,
  SLabelView,
  SNode,
  SRoutingHandle,
  SRoutingHandleView,
  TYPES,
} from "sprotty";
import {
  SEdge as SEdgeAPI,
  SGraph as SGraphAPI,
  SLabel as SLabelAPI,
  SModelIndex,
  SNode as SNodeAPI,
  SPort as SPortAPI,
} from "sprotty-protocol";

import {
  DefaultLayoutConfigurator,
  ElkFactory,
  ElkLayoutEngine,
  elkLayoutModule,
  ILayoutConfigurator,
} from "sprotty-elk/lib/inversify";
import { LSWorkerDiagramServerProxy } from "./ls-worker-proxy";

const elkFactory: ElkFactory = () =>
  new ElkConstructor({
    algorithms: ["layered"],
  });

const createContainer = (containerId: string, client: MonacoLanguageClient) => {
  const fettuccineModule = new ContainerModule(
    (bind, unbind, isBound, rebind) => {
      bind(MonacoLanguageClient).toConstantValue(client);
      bind(TYPES.ModelSource).to(LSWorkerDiagramServerProxy).inSingletonScope();
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
      configureModelElement(context, "port", CircularPort, CircularNodeView);
      configureModelElement(
        context,
        "routing-point",
        SRoutingHandle,
        SRoutingHandleView,
      );
      configureModelElement(
        context,
        "volatile-routing-point",
        SRoutingHandle,
        SRoutingHandleView,
      );
      configureModelElement(context, "label", SLabel, SLabelView);
      configureModelElement(context, "label:edge", SLabel, SLabelView);
      configureModelElement(context, "edge", SEdge, PolylineEdgeView, {
        disable: [editFeature],
      });

      configureViewerOptions(context, {
        needsClientLayout: true,
        needsServerLayout: true,
        zoomLimits: { min: 0.4, max: 1.5 },
        horizontalScrollLimits: { min: -1950, max: 2150 },
        verticalScrollLimits: { min: -950, max: 1500 },
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
      "org.eclipse.elk.nodeLabels.placement": "OUTSIDE H_CENTER V_TOP",
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
