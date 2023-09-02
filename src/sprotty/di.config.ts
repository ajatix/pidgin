import { Container, ContainerModule } from "inversify";
import {
  CircularNodeView,
  ConsoleLogger,
  LocalModelSource,
  LogLevel,
  PolylineEdgeView,
  RectangularNodeView,
  SEdge,
  SGraph,
  SGraphView,
  SLabel,
  SLabelView,
  SNode,
  SPort,
  TYPES,
  configureModelElement,
  configureViewerOptions,
  edgeIntersectionModule,
  loadDefaultModules,
} from "sprotty";

const createContainer = (containerId: string) => {
  const fettuccineModule = new ContainerModule(
    (bind, unbind, isBound, rebind) => {
      bind(TYPES.ModelSource).to(LocalModelSource).inSingletonScope();
      rebind(TYPES.ILogger).to(ConsoleLogger).inSingletonScope();
      rebind(TYPES.LogLevel).toConstantValue(LogLevel.log);

      const context = { bind, unbind, isBound, rebind };

      configureModelElement(context, "graph", SGraph, SGraphView);
      configureModelElement(context, "node", SNode, RectangularNodeView);
      configureModelElement(context, "port", SPort, CircularNodeView);
      configureModelElement(context, "label", SLabel, SLabelView);
      configureModelElement(context, "edge", SEdge, PolylineEdgeView);

      configureViewerOptions(context, {
        needsClientLayout: false,
        baseDiv: containerId,
      });
    },
  );

  const container = new Container();
  loadDefaultModules(container);
  container.load(fettuccineModule);
  container.load(edgeIntersectionModule);
  return container;
};

export default createContainer;
