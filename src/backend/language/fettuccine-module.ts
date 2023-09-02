import ElkConstructor from "elkjs/lib/elk-api";
import {
  createDefaultModule,
  createDefaultSharedModule,
  DefaultSharedModuleContext,
  inject,
  LangiumServices,
  Module,
} from "langium";
import {
  LangiumSprottySharedServices,
  SprottyDiagramServices,
  SprottySharedModule,
} from "langium-sprotty";
import { ElkLayoutEngine } from "sprotty-elk";
import {
  DefaultElementFilter,
  ElkFactory,
  IElementFilter,
  ILayoutConfigurator,
} from "sprotty-elk/lib/inversify";

import { FettuccineDiagramGenerator } from "../diagram-generator";
import { FettuccineValidator } from "./fettuccine-validator";
import {
  FettuccineGeneratedModule,
  FettuccineGeneratedSharedModule,
} from "./generated/module";
import { FettuccineLayoutConfigurator } from "../layout-config";

export type FettuccineAddedServices = {
  validation: {
    FettuccineValidator: FettuccineValidator;
  };
  layout: {
    ElkFactory: ElkFactory;
    ElementFilter: IElementFilter;
    LayoutConfigurator: ILayoutConfigurator;
  };
};

export type FettuccineServices = LangiumServices & FettuccineAddedServices;

export const FettuccineModule: Module<
  FettuccineServices,
  SprottyDiagramServices & FettuccineAddedServices
> = {
  diagram: {
    DiagramGenerator: (services) => new FettuccineDiagramGenerator(services),
    ModelLayoutEngine: (services) =>
      new ElkLayoutEngine(
        services.layout.ElkFactory,
        services.layout.ElementFilter,
        services.layout.LayoutConfigurator,
      ) as any,
  },
  validation: {
    FettuccineValidator: () => new FettuccineValidator(),
  },
  layout: {
    ElkFactory: () => () =>
      new ElkConstructor({
        algorithms: ["layered"],
        workerUrl: "./elk-workers/elk-worker.js",
      }),
    ElementFilter: () => new DefaultElementFilter(),
    LayoutConfigurator: () => new FettuccineLayoutConfigurator(),
  },
};

export function createFettuccineServices(context: DefaultSharedModuleContext): {
  shared: LangiumSprottySharedServices;
  fettuccine: FettuccineServices;
} {
  const shared = inject(
    createDefaultSharedModule(context),
    FettuccineGeneratedSharedModule,
    SprottySharedModule,
  );
  const fettuccine = inject(
    createDefaultModule({ shared }),
    FettuccineGeneratedModule,
    FettuccineModule,
  );
  shared.ServiceRegistry.register(fettuccine);
  return { shared, fettuccine };
}
