import "reflect-metadata";
import { EmptyFileSystem, startLanguageServer } from "langium";
import { addDiagramHandler } from "langium-sprotty";
import {
  BrowserMessageReader,
  BrowserMessageWriter,
  createConnection,
} from "vscode-languageserver/browser.js";
import { createFettuccineServices } from "./fettuccine-module";

declare const self: DedicatedWorkerGlobalScope;

const messageReader = new BrowserMessageReader(self);
const messageWriter = new BrowserMessageWriter(self);

const connection = createConnection(messageReader, messageWriter);

const { shared } = createFettuccineServices({ connection, ...EmptyFileSystem });

startLanguageServer(shared);
addDiagramHandler(connection, shared);
