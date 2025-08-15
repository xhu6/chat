import { useUserIdStore } from "../stores/UserIdStore";
import { useWsStore } from "../stores/WsStore";

import { handle } from "./handler";

function connectWs() {
  const { setURL } = useWsStore.getState();
  const userId = useUserIdStore.getState().userId;

  setURL(`ws://localhost:8000/ws/${userId}`);
}

export function initNetworking() {
  const { setCallback } = useWsStore.getState();
  setCallback((e) => handle(JSON.parse(e.data)));

  connectWs();
  useUserIdStore.subscribe(connectWs);
  // Reconnect when userId changes
}
