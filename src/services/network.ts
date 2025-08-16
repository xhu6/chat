import { useUserIdStore } from "stores/UserIdStore";
import { useWsStore } from "stores/WsStore";

import { handle } from "./handler";

function connectWs() {
  const { setURL } = useWsStore.getState();
  const userId = useUserIdStore.getState().userId;

  setURL(`ws://localhost:8000/ws/${userId}`);
}

export function initNetworking() {
  const { setCallback, send } = useWsStore.getState();
  setCallback((e) => handle(JSON.parse(e.data)));

  // Reconnect when userId changes
  useUserIdStore.subscribe(connectWs);

  connectWs();

  send(
    JSON.stringify({
      type: "update",
      timestamp: 0,
    }),
  );
}
