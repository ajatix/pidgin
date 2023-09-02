import { Box, Grid, Grommet, Heading, Text, grommet } from "grommet";
import { useState } from "react";
import SprottyDiagram from "./sprotty/SprottyDiagram";
import defaultGraph from "./sprotty/defaultGraph";

import "./App.css";

function App() {
  const [graph, setGraph] = useState(defaultGraph);
  return (
    <Grommet theme={grommet} full>
      <Grid
        rows={["xsmall", "auto"]}
        columns={["large", "auto"]}
        areas={[
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "editor", start: [0, 1], end: [0, 1] },
          { name: "diagram", start: [1, 1], end: [1, 1] },
        ]}
        fill
      >
        <Box
          gridArea="header"
          background="palevioletred"
          direction="row"
          align="center"
          justify="between"
          pad="small"
        >
          <Heading color="white">Fettuccine</Heading>
          <Text color="white" weight="bold">
            Powered by Eclipse Langium, Sprotty, ELK
          </Text>
        </Box>
        <Box gridArea="editor" background="light-2" />
        <SprottyDiagram graph={graph} />
      </Grid>
    </Grommet>
  );
}

export default App;
