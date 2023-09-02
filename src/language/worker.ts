import { EmptyFileSystem, startLanguageServer } from "langium";
import { DiagramActionNotification, addDiagramHandler } from "langium-sprotty";
import "reflect-metadata";
import {
  BrowserMessageReader,
  BrowserMessageWriter,
  createConnection,
} from "vscode-languageserver/browser.js";
import { ServerReadyAction, serverReadyKind } from "../protocol/handshake";
import { createFettuccineServices } from "./fettuccine-module";

/* browser specific setup code */
const messageReader = new BrowserMessageReader(self);
const messageWriter = new BrowserMessageWriter(self);

const connection = createConnection(messageReader, messageWriter);

// Inject the shared services and language-specific services
const { shared } = createFettuccineServices({
  connection,
  ...EmptyFileSystem,
});

// Start the language server with the shared services
console.log("starting language server");
startLanguageServer(shared);

addDiagramHandler(connection, shared);

shared.workspace.TextDocuments.onDidOpen((e) => {
  connection.sendNotification(DiagramActionNotification.type, {
    clientId: "fettuccine-diagram",
    action: { kind: serverReadyKind, uri: e.document.uri } as ServerReadyAction,
  });
});
