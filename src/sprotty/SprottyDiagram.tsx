// this needs to be imported once in the entire application
import "reflect-metadata";

import { LocalModelSource, TYPES } from "sprotty";
import { SGraph } from "sprotty-protocol";
import createContainer from "./di.config";
import { useEffect } from "react";
import { Box } from "grommet";

type SprottyDiagramProps = {
  graph: SGraph;
  update: boolean;
};

const SprottyDiagram = (props: SprottyDiagramProps) => {
  const { graph, update } = props;

  const container = createContainer(graph.id);
  const modelSource = container.get<LocalModelSource>(TYPES.ModelSource);

  useEffect(() => {
    modelSource.setModel(graph);
  }, [modelSource, graph]);

  useEffect(() => {
    modelSource.updateModel();
  }, [modelSource, update]);

  return <Box gridArea="diagram" id={graph.id} pad="small" />;
};

export default SprottyDiagram;
