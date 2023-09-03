import { AstNode } from "langium";
import {
  GeneratorContext,
  IdCache,
  LangiumDiagramGenerator,
} from "langium-sprotty";
import { SEdge, SLabel, SModelRoot, SNode, SPort } from "sprotty-protocol";
import {
  Edge,
  InputPort,
  Model,
  Node,
  OutputPort,
  Port,
} from "./language/generated/ast";

export class FettuccineDiagramGenerator extends LangiumDiagramGenerator {
  // @ts-ignore
  protected generateRoot(args: GeneratorContext<Model>): SModelRoot {
    const { document, idCache } = args;
    const model = document.parseResult.value;

    return {
      type: "graph",
      id: "root",
      children: [
        // @ts-ignore
        ...model.nodes.map((node) => this.generateNode(node, idCache)),
        // @ts-ignore
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
          text: node.label ?? node.name,
        } as SLabel,
        ...node.inputs.map((inputPort) =>
          this.generateInputPort(inputPort, nodeId, idCache),
        ),
        ...node.outputs.map((outputPort) =>
          this.generateOutputPort(outputPort, nodeId, idCache),
        ),
        ...node.nodes.map((childNode) => this.generateNode(childNode, idCache)),
      ],
    } as SNode;
  }

  protected generateInputPort(
    inputPort: InputPort,
    nodeId: string,
    idCache: IdCache<AstNode>,
  ): SPort {
    const portId = idCache.uniqueId(
      nodeId + "." + inputPort.port.$refText + ".input.port",
      inputPort,
    );
    return {
      type: "port",
      id: portId,
      size: { height: 5, width: 5 },
      children: this.generatePortLabel(inputPort.port.ref!, portId, idCache),
    } as SPort;
  }

  protected generateOutputPort(
    outputPort: OutputPort,
    nodeId: string,
    idCache: IdCache<AstNode>,
  ): SPort {
    const portId = idCache.uniqueId(
      nodeId + "." + outputPort.port.$refText + ".output.port",
      outputPort,
    );
    return {
      type: "port",
      id: portId,
      size: { height: 5, width: 5 },
      children: this.generatePortLabel(outputPort.port.ref!, portId, idCache),
    } as SPort;
  }

  generatePortLabel(port: Port, portId: string, idCache: IdCache<AstNode>) {
    return [
      {
        type: "label",
        id: idCache.uniqueId(portId + ".label"),
        text: port.label ?? port.name,
      } as SLabel,
    ];
  }

  protected generateEdge(edge: Edge, idCache: IdCache<AstNode>): SEdge {
    const { sourceId, targetId, edgeId } = edge.port
      ? this.generatePortEdge(edge, idCache)
      : this.generateNodeEdge(edge, idCache);
    return {
      type: "edge",
      id: edgeId,
      cssClasses: ["edge"],
      sourceId: sourceId!,
      targetId: targetId!,
      children: edge.label
        ? [
            {
              type: "label:edge",
              id: idCache.uniqueId(edgeId + ".label"),
              text: edge.label,
              edgePlacement: {
                position: 0.5,
                rotate: true,
                offset: -2,
              },
            } as SLabel,
          ]
        : [],
    } as SEdge;
  }

  protected generateNodeEdge(edge: Edge, idCache: IdCache<AstNode>) {
    const sourceId = idCache.getId(edge.source.ref);
    const targetId = idCache.getId(edge.target.ref);
    const edgeId = idCache.uniqueId(`${sourceId}:${targetId}`, edge);
    return {
      sourceId,
      targetId,
      edgeId,
    };
  }

  protected generatePortEdge(edge: Edge, idCache: IdCache<AstNode>) {
    const port = edge.port;
    const sourceNodePort = edge.source.ref?.outputs.find(
      (p) => p.port.$refText === port?.$refText,
    );
    const targetNodePort = edge.target.ref?.inputs.find(
      (p) => p.port.$refText === port?.$refText,
    );
    const sourceId = idCache.getId(sourceNodePort);
    const targetId = idCache.getId(targetNodePort);
    const edgeId = idCache.uniqueId(`${sourceId}:${targetId}`, edge);
    return {
      sourceId,
      targetId,
      edgeId,
    };
  }
}
