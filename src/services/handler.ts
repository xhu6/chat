import { useChatsStore } from "stores/ChatsStore";
import { useUserIdStore } from "stores/UserIdStore";
import { useUsersStore } from "stores/UsersStore";

function recvDirect(data: any) {
  const addMessage = useChatsStore.getState().addMessage;
  const userId = useUserIdStore.getState().userId;

  const request: {
    type: string;
    sender: number;
    recipient: number;
    content: string;
    timestamp: number;
    seq_no: number;
  } = data;

  // For debugging
  if (![request.sender, request.recipient].includes(userId)) {
    console.warn("Irrelevant message received", userId, data);
    return;
  }

  const otherUser =
    request.sender == userId ? request.recipient : request.sender;

  addMessage(otherUser, request.seq_no, {
    sender: request.sender,
    content: request.content,
    timestamp: request.timestamp,
  });
}

function recvUser(data: any) {
  const setUser = useUsersStore((state) => state.setUser);

  const request: {
    type: string;
    user: number;
    name: string;
    desc: string;
  } = data;

  setUser({
    id: request.user,
    name: request.name,
  });
}

export function handle(data: any) {
  // Assumes data is valid
  // Should be fine for client

  if (data.type == "recv[direct]") {
    recvDirect(data);
  } else if (data.type == "recv[user]") {
    recvUser(data);
  }
}
