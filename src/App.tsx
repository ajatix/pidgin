import { Box, Grid, Grommet, Heading, Text, grommet } from "grommet";

import "./App.css";

function App() {
  return (
    <Grommet theme={grommet} full>
      <Grid
        rows={["xxsmall", "auto"]}
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
          <Heading level={3} color="white">
            Fettuccine
          </Heading>
          <Text size="small" color="white" weight="bold">
            Powered by Eclipse Langium, Sprotty, ELK
          </Text>
        </Box>
        <Box gridArea="editor" id="monaco-editor" />
        <Box gridArea="diagram" id="fettuccine-diagram" />
      </Grid>
    </Grommet>
  );
}

export default App;
