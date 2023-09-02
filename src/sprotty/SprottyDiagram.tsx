// this needs to be imported once in the entire application
import "reflect-metadata";

import { LocalModelSource, TYPES } from "sprotty";
import { SGraph } from "sprotty-protocol";
import createContainer from "./di.config";
import { useEffect } from "react";
import { Box } from "grommet";

type SprottyDiagramProps = {
  graph: SGraph;
};

const SprottyDiagram = (props: SprottyDiagramProps) => {
  const { graph } = props;

  useEffect(() => {
    const container = createContainer(graph.id);
    const modelSource = container.get<LocalModelSource>(TYPES.ModelSource);
    modelSource.setModel(graph);
  }, [graph]);

  return <Box gridArea="diagram" id={graph.id} pad="small" />;
};

export default SprottyDiagram;
