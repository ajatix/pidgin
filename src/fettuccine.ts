import "reflect-metadata";
import { TYPES } from "sprotty";
import createMonacoEditor from "./frontend/monaco";
import createContainer from "./frontend/di.config";
import { LSWorkerDiagramServerProxy } from "./frontend/ls-worker-proxy";

function startFettuccine() {
  const { client, editorPromise } = createMonacoEditor("monaco-editor");
  editorPromise.then(() => {
    const languageClient = client.getLanguageClient();
    if (languageClient) {
      const container = createContainer("fettuccine-diagram", languageClient);
      const modelSource = container.get<LSWorkerDiagramServerProxy>(
        TYPES.ModelSource,
      );
      modelSource.start();
    }
  });
}

export default startFettuccine;
