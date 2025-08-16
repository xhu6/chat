import { create } from "zustand";

import { Queue } from "utils/queue";

type Callback = (msg: MessageEvent) => void;

interface WsState {
  setURL: (url: string) => void;
  setCallback: (callback: Callback) => void;
  send: (data: string) => void;
  connected: boolean;
}

const CONNECTION_COOLDOWN = 500;

export const useWsStore = create<WsState>()((set) => {
  let ws: WebSocket | undefined;
  let onMessage: Callback | null = null;
  let reconnectTimeout: number | undefined;
  let queue = new Queue<string>();

  function disconnect() {
    if (ws != undefined) {
      clearTimeout(reconnectTimeout);
      ws.onclose = null;
      ws.close();
    }
  }

  function connect(url: string) {
    disconnect();

    ws = new WebSocket(url);

    // Use indirection so callback can be changed after ws created
    ws.onmessage = (e) => (onMessage ? onMessage(e) : undefined);

    ws.onopen = () => {
      // TODO: auth logic

      console.log(queue);

      let data = queue.front();
      while (data != undefined) {
        // Not undefined since in onopen
        ws!.send(data);

        queue.pop();
        data = queue.front();
      }

      set({ connected: true });
    };

    ws.onclose = () => {
      reconnectTimeout = setTimeout(() => {
        connect(url);
      }, CONNECTION_COOLDOWN);

      set({ connected: false });
    };

    ws.onerror = () => {
      ws?.close();
    };
  }

  return {
    setURL: connect,

    setCallback: (callback: Callback | null) => {
      onMessage = callback;
    },

    send: (data: string) => {
      if (ws != undefined && ws.readyState == ws.OPEN) {
        ws.send(data);
      } else {
        queue.push(data);
      }
    },

    connected: false,
  };
});
