import { MonacoEditorLanguageClientWrapper } from "monaco-editor-wrapper";
import { buildWorkerDefinition } from "monaco-editor-workers";
import monarchSyntax from "./syntaxes/fettuccine.monarch";

const createMonacoEditor = (containerId: string) => {
  buildWorkerDefinition(
    "./monaco-workers",
    new URL("", window.location.href).href,
    false,
  );

  MonacoEditorLanguageClientWrapper.addMonacoStyles("monaco-editor-styles");

  const client = new MonacoEditorLanguageClientWrapper();
  const editorConfig = client.getEditorConfig();
  editorConfig.setMainLanguageId("fettuccine");

  editorConfig.setMonarchTokensProvider(monarchSyntax);

  editorConfig.setMainCode(`// Fettuccine is running in the web!`);
  editorConfig.setTheme("vs-light");
  editorConfig.setUseLanguageClient(false);
  editorConfig.setUseWebSocket(false);

  const workerURL = new URL(
    "./fettuccine-server-worker.js",
    new URL("", window.location.href).href,
  );
  console.log(workerURL.href);

  const lsWorker = new Worker(workerURL.href, {
    type: "classic",
    name: "Fettuccine Language Server",
  });
  client.setWorker(lsWorker);

  const startingPromise = client.startEditor(
    document.getElementById(containerId),
  );
  window.addEventListener("resize", () => client.updateLayout());

  return client;
};

export default createMonacoEditor;
