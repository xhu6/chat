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

  return {
    setURL: (url: string) => {
      ws?.close();

      ws = new WebSocket(url);

      if (onMessage != undefined) ws.onmessage = onMessage;
    },

    send: (data: string) => {
      ws?.send(data);
    },

    setCallback: (callback: Callback) => {
      onMessage = callback;
    },
  };
});
