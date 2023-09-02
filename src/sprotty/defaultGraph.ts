import { SEdge, SLabel, SGraph, SNode } from "sprotty-protocol";

const graph: SGraph = {
  type: "graph",
  id: "pasta",
  children: [
    {
      type: "node",
      id: "spaghetti",
      position: { x: 0, y: 0 },
      size: { width: 100, height: 50 },
      children: [
        {
          type: "label",
          id: "spaghetti.label",
          text: "spaghetti",
          position: { x: 50, y: 20 },
          size: { width: 100, height: 20 },
        } as SLabel,
        {
          type: "port",
          id: "spaghetti.output.port",
          text: "spaghetti",
          position: { x: 100, y: 20 },
          size: { width: 10, height: 10 },
        } as SLabel,
      ],
    } as SNode,
    {
      type: "node",
      id: "macaroni",
      position: { x: 300, y: 0 },
      size: { width: 100, height: 50 },
      children: [
        {
          type: "label",
          id: "macaroni.label",
          text: "macaroni",
          position: { x: 50, y: 20 },
          size: { width: 100, height: 20 },
        } as SLabel,
        {
          type: "port",
          id: "macaroni.input.port",
          text: "macaroni",
          position: { x: -10, y: 20 },
          size: { width: 10, height: 10 },
        } as SLabel,
        {
          type: "port",
          id: "macaroni.output.port",
          text: "macaroni",
          position: { x: 100, y: 20 },
          size: { width: 10, height: 10 },
        } as SLabel,
      ],
    } as SNode,
    {
      type: "node",
      id: "fettucine",
      position: { x: 600, y: 0 },
      size: { width: 100, height: 50 },
      children: [
        {
          type: "label",
          id: "fettucine.label",
          text: "fettucine",
          position: { x: 50, y: 20 },
          size: { width: 100, height: 20 },
        } as SLabel,
        {
          type: "port",
          id: "fettucine.input.port",
          text: "fettucine",
          position: { x: -10, y: 20 },
          size: { width: 10, height: 10 },
        } as SLabel,
      ],
    } as SNode,
    {
      type: "edge",
      id: "e1",
      sourceId: "fettucine",
      targetId: "macaroni",
      routerKind: "manhattan",
      children: [
        {
          type: "label",
          id: "e1.label",
          text: "better_than",
          position: { x: 200, y: 40 },
          size: { width: 100, height: 20 },
        } as SLabel,
      ],
    } as SEdge,
    {
      type: "edge",
      id: "e2",
      sourceId: "macaroni",
      targetId: "spaghetti",
      routerKind: "manhattan",
      children: [
        {
          type: "label",
          id: "e2.label",
          text: "better_than",
          position: { x: 500, y: 40 },
          size: { width: 100, height: 20 },
        } as SLabel,
      ],
    } as SEdge,
  ],
};

export default graph;
