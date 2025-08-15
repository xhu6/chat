import { useChatsStore } from "./stores/ChatsStore";
import { useUserIdStore } from "./stores/UserIdStore";
import { useWsStore } from "./stores/WsStore";

// TODO: Support more actions
function callback(e: MessageEvent) {
  const addMessage = useChatsStore.getState().addMessage;
  const userId = useUserIdStore.getState().userId;

  const raw_data = JSON.parse(e.data);

  if (raw_data.type == "recv[direct]") {
    const data: {
      type: string;
      sender: number;
      recipient: number;
      content: string;
      timestamp: number;
      seq_no: number;
    } = raw_data;

    const otherUser = data.sender == userId ? data.recipient : data.sender;

    const message = {
      sender: data.sender,
      content: data.content,
      timestamp: data.timestamp,
    };

    addMessage(otherUser, data.seq_no, message);
  }
}

function connectWs() {
  const { setURL } = useWsStore.getState();
  const userId = useUserIdStore.getState().userId;

  setURL(`ws://localhost:8000/ws/${userId}`);
}

export function initNetworking() {
  const { setCallback } = useWsStore.getState();
  setCallback(callback);

  connectWs();
  useUserIdStore.subscribe(connectWs);
  // Reconnect when userId changes
}
