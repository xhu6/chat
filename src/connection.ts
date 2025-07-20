import { getUserId } from "./data";

let ws: WebSocket | undefined;

export function getWs() {
  if (ws == undefined) {
    ws = new WebSocket(`ws://localhost:8000/ws/${getUserId()}`);
  }

  return ws;
}

export function restartWs() {
  ws?.close();

  ws = new WebSocket(`ws://localhost:8000/ws/${getUserId()}`);
}
