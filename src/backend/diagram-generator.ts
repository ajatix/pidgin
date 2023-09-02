import { AstNode } from "langium";
import {
  GeneratorContext,
  IdCache,
  LangiumDiagramGenerator,
} from "langium-sprotty";
import { SEdge, SLabel, SModelRoot, SNode, SPort } from "sprotty-protocol";
import { Edge, Model, Node, Port } from "./language/generated/ast";

export class FettuccineDiagramGenerator extends LangiumDiagramGenerator {
  protected generateRoot(args: GeneratorContext<Model>): SModelRoot {
    const { document, idCache } = args;
    const model = document.parseResult.value;
    return {
      type: "graph",
      id: "root",
      children: [
        ...model.nodes.map((node) => this.generateNode(node, idCache)),
        ...model.edges.map((edge) => this.generateEdge(edge, idCache)),
      ],
    };
  }

  protected generateNode(node: Node, idCache: IdCache<AstNode>): SNode {
    const nodeId = idCache.uniqueId(node.name, node);
    return {
      type: "node",
      id: nodeId,
      size: { width: 100, height: 30 },
      cssClasses: ["node"],
      children: [
        {
          type: "label",
          id: idCache.uniqueId(nodeId + ".label"),
          text: node.name,
        } as SLabel,
        ...node.ports.map(
          (port) => port.ref && this.generatePort(port.ref, nodeId, idCache),
        ),
        ...node.nodes.map(
          (childNode) =>
            childNode.ref && this.generateNode(childNode.ref, idCache),
        ),
      ],
    } as SNode;
  }

  protected generatePort(
    port: Port,
    nodeId: string,
    idCache: IdCache<AstNode>,
  ): SPort {
    const portId = idCache.uniqueId(nodeId + "." + port.name + ".port");
    return {
      type: "port",
      id: portId,
    } as SPort;
  }

  protected generateEdge(edge: Edge, idCache: IdCache<AstNode>): SEdge {
    const sourceId = idCache.getId(edge.source.ref);
    const targetId = idCache.getId(edge.target.ref);
    const edgeId = idCache.uniqueId(`${sourceId}:${targetId}`, edge);
    return {
      type: "edge",
      id: edgeId,
      cssClasses: ["edge"],
      sourceId: sourceId!,
      targetId: targetId!,
      children: [
        {
          type: "label:edge",
          id: idCache.uniqueId(edgeId + ".label"),
          text: edge.port.ref?.name,
          edgePlacement: {
            position: 0.5,
            rotate: true,
            offset: -2,
          },
        } as SLabel,
        {
          type: "label:arrow",
          id: idCache.uniqueId(edgeId + ".arrow"),
          text: "",
          edgePlacement: {
            position: 1,
            rotate: true,
            side: "on",
          },
        } as SLabel,
      ],
    } as SEdge;
  }
}
