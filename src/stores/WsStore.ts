import { create } from "zustand";

type Callback = (msg: MessageEvent) => void;

interface WsState {
  setURL: (url: string) => void;
  setCallback: (callback: Callback) => void;
  send: (data: string) => void;
  connected: boolean;
}

export const useWsStore = create<WsState>()((set) => {
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

    ws.onopen = () => {
      set({ connected: true });
    };

    ws.onclose = () => {
      set({ connected: false });
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

    setCallback: (callback: Callback) => {
      onMessage = callback;
    },

    send: (data: string) => {
      ws?.send(data);
    },

    connected: false,
  };
});
