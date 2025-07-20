let ws: WebSocket | undefined;

export function getWs() {
  if (ws == undefined) {
    ws = new WebSocket(`ws://localhost:8000/ws/0`);
  }

  return ws;
}
