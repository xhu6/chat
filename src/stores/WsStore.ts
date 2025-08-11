import { create } from "zustand";

type Callback = (msg: MessageEvent) => void;

interface WsState {
  setURL: (url: string) => void;
  send: (data: string) => void;
  setCallback: (callback: Callback) => void;
}

export const useWsStore = create<WsState>()(() => {
  let ws: WebSocket | undefined;
  let onMessage: Callback | undefined;
  let timeoutID: number | undefined;

  function setURL(url: string) {
    if (ws != undefined) {
      clearTimeout(timeoutID);
      ws.onclose = null;
      ws.close();
    }

    ws = new WebSocket(url);

    if (onMessage != undefined) ws.onmessage = onMessage;

    ws.onclose = () => {
      timeoutID = setTimeout(() => {
        setURL(url);
      }, 500);
    };

    ws.onerror = () => {
      ws?.close();
    };
  }

  return {
    setURL: setURL,

    send: (data: string) => {
      ws?.send(data);
    },

    setCallback: (callback: Callback) => {
      onMessage = callback;
    },
  };
});
