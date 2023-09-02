import { buildWorkerDefinition } from "monaco-editor-workers";
import { MonacoEditorLanguageClientWrapper } from "monaco-editor-wrapper";
import { MonacoLanguageClient } from "monaco-languageclient";

import monarchSyntax from "./syntaxes/fettuccine.monarch";

function createMonacoEditor(containerId: string) {
  buildWorkerDefinition("./monaco-workers", window.location.href, false);

  MonacoEditorLanguageClientWrapper.addMonacoStyles("monaco-editor-styles");

  const client = new MonacoEditorLanguageClientWrapper();
  const editorConfig = client.getEditorConfig();
  editorConfig.setMainLanguageId("fettuccine");

  editorConfig.setMonarchTokensProvider(monarchSyntax);

  editorConfig.setMainCode(`port p1
port p2  

node n1 {
  p1
}

node n2 {
  p1 p2
}

edge n1 to n2 on p1`);

  editorConfig.setTheme("vs-light");
  editorConfig.setUseLanguageClient(true);
  editorConfig.setUseWebSocket(false);

  const workerURL = new URL(
    "./fettuccine-server-worker.js",
    window.location.href,
  );
  console.log(workerURL.href);

  const lsWorker = new Worker(workerURL.href, {
    type: "classic",
    name: "Fettuccine Language Server",
  });
  client.setWorker(lsWorker);

  const editorPromise = client.startEditor(
    document.getElementById(containerId),
  );

  return {
    client,
    editorPromise,
  };
}

export default createMonacoEditor;
