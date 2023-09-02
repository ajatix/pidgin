import { LayoutOptions } from "elkjs";
import { DefaultLayoutConfigurator } from "sprotty-elk/lib/elk-layout";
import { SGraph, SModelIndex, SNode, SPort } from "sprotty-protocol";

export class FettuccineLayoutConfigurator extends DefaultLayoutConfigurator {
  protected override graphOptions(
    sgraph: SGraph,
    index: SModelIndex,
  ): LayoutOptions {
    return {
      "org.eclipse.elk.algorithm": "org.eclipse.elk.layered",
      "org.eclipse.elk.direction": "LEFT",
      "org.eclipse.elk.edgeRouting": "ORTHOGONAL",
      "org.eclipse.elk.spacing.nodeNode": "30.0",
      "org.eclipse.elk.layered.spacing.edgeNodeBetweenLayers": "30.0",
      "org.eclipse.elk.spacing.edgeEdge": "30.0",
      "org.eclipse.elk.spacing.portPort": "30.0",
    };
  }

  protected override nodeOptions(
    snode: SNode,
    index: SModelIndex,
  ): LayoutOptions {
    return {
      "org.eclipse.elk.portAlignment.default": "BEGIN",
      "org.eclipse.elk.portConstraints": "FIXED_SIDE",
    };
  }

  protected override portOptions(
    sport: SPort,
    index: SModelIndex,
  ): LayoutOptions {
    return {
      "org.eclipse.elk.port.side": "EAST",
      "org.eclipse.elk.port.borderOffset": "3.0",
    };
  }
}
