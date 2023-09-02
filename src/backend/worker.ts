import { EmptyFileSystem, startLanguageServer } from "langium";
import { DiagramActionNotification, addDiagramHandler } from "langium-sprotty";
import "reflect-metadata";
import {
  BrowserMessageReader,
  BrowserMessageWriter,
  createConnection,
} from "vscode-languageserver/browser.js";
import { ServerReadyAction, serverReadyKind } from "../protocol/handshake";
import { createFettuccineServices } from "./language/fettuccine-module";

/* browser specific setup code */

const messageReader = new BrowserMessageReader(self); // eslint-disable-line no-restricted-globals
const messageWriter = new BrowserMessageWriter(self); // eslint-disable-line no-restricted-globals

const connection = createConnection(messageReader, messageWriter);

// Inject the shared services and language-specific services
const { shared } = createFettuccineServices({
  connection,
  ...EmptyFileSystem,
});

// Start the language server with the shared services
console.log("starting language server");
// @ts-ignore
startLanguageServer(shared);

addDiagramHandler(connection, shared);

shared.workspace.TextDocuments.onDidOpen((e) => {
  connection.sendNotification(DiagramActionNotification.type, {
    clientId: "fettuccine-diagram",
    action: { kind: serverReadyKind, uri: e.document.uri } as ServerReadyAction,
  });
});
