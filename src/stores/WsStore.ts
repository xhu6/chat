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
  let onMessage: Callback | null = null;
  let timeoutID: number | undefined;

  function setURL(url: string) {
    // Clean up previous ws if called externally
    if (ws != undefined) {
      clearTimeout(timeoutID);
      ws.onclose = null;
      ws.close();
    }

    ws = new WebSocket(url);

    // Use indirection so callback can be changed after ws created
    ws.onmessage = (e) => (onMessage ? onMessage(e) : undefined);

    ws.onopen = () => {
      set({ connected: true });
    };

    ws.onclose = () => {
      timeoutID = setTimeout(() => {
        setURL(url);
      }, 500); // Try to reconnect this many ms

      set({ connected: false });
    };

    ws.onerror = () => {
      ws?.close();
    };
  }

  return {
    setURL: setURL,

    setCallback: (callback: Callback | null) => {
      onMessage = callback;
    },

    send: (data: string) => {
      ws?.send(data);
    },

    connected: false,
  };
});
