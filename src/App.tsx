import { Box, Grid, Grommet, Heading, Text, grommet } from "grommet";

import React from "react";

import "./App.css";
import { useEffect } from "react";
import startFettuccine from "./fettuccine";

function App() {
  useEffect(() => {
    startFettuccine();
  }, []);

  return (
    <Grommet theme={grommet} full>
      <Grid
        rows={["xxsmall", "flex", "xxsmall"]}
        columns={["large", "flex"]}
        areas={[
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "editor", start: [0, 1], end: [0, 1] },
          { name: "diagram", start: [1, 1], end: [1, 1] },
          { name: "footer", start: [0, 2], end: [1, 2] },
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
          <Heading level={3} color="white">
            Fettuccine
          </Heading>
        </Box>
        <Box
          gridArea="editor"
          id="monaco-editor"
          margin="medium"
          overflow="hidden"
        />
        <Box
          gridArea="diagram"
          id="fettuccine-diagram"
          pad="medium"
          background="light-2"
        />
        <Box
          gridArea="footer"
          background="palevioletred"
          direction="row"
          align="center"
          justify="between"
          pad="small"
        >
          <Text size="small" color="white" weight="bold">
            Powered by Eclipse Langium, Sprotty, ELK
          </Text>
        </Box>
      </Grid>
    </Grommet>
  );
}

export default App;
