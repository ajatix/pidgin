import "reflect-metadata";
import { TYPES } from "sprotty";
import createMonacoEditor from "./monaco";
import createContainer from "./sprotty/di.config";
import { LSWorkerDiagramServerProxy } from "./sprotty/ls-worker-proxy";

function startFettuccine() {
  const client = createMonacoEditor("monaco-editor");
  // const container = createContainer(
  // "fettuccine-diagram",
  // client.getLanguageClient(),
  // );
  // const modelSource = container.get<LSWorkerDiagramServerProxy>(
  // TYPES.ModelSource,
  // );
  // modelSource.start();
}

export default startFettuccine;
