import { inject } from "inversify";
import { DiagramActionNotification } from "langium-sprotty";
import { MonacoLanguageClient } from "monaco-languageclient";
import { DiagramServerProxy } from "sprotty";
import {
  ActionMessage,
  RequestModelAction,
  RejectAction,
} from "sprotty-protocol";
import { ServerReadyAction, serverReadyKind } from "../protocol/handshake";

export class LSWorkerDiagramServerProxy extends DiagramServerProxy {
  // @ts-ignore
  @inject(MonacoLanguageClient) private client: MonacoLanguageClient;

  start() {
    this.client.onNotification(DiagramActionNotification.type, ({ action }) => {
      switch (action.kind) {
        case serverReadyKind:
          this.client.sendNotification(DiagramActionNotification.type, {
            clientId: this.clientId,
            action: RequestModelAction.create({
              sourceUri: (action as ServerReadyAction).uri,
              needsClientLayout: false,
              needsServerLayout: true,
            }),
          });
          break;
        case RejectAction.KIND:
          break;
        default:
          this.actionDispatcher.dispatch(action);
          this.storeNewModel(action);
      }
    });
  }

  protected sendMessage(message: ActionMessage): void {
    this.client.sendNotification(DiagramActionNotification.type, message);
  }
}
