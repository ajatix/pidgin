import { Action } from "sprotty-protocol";

export const serverReadyKind = "documentReady";

export interface ServerReadyAction extends Action {
  kind: typeof serverReadyKind;
  uri: string;
}
