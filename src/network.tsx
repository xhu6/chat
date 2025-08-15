import { useEffect } from "react";
import { useChatsStore } from "./stores/ChatsStore";
import { useUserIdStore } from "./stores/UserIdStore";
import { useWsStore } from "./stores/WsStore";

export function Networking() {
  const addMessage = useChatsStore((state) => state.addMessage);

  const userId = useUserIdStore((state) => state.userId);

  const setURL = useWsStore((state) => state.setURL);
  const setCallback = useWsStore((state) => state.setCallback);

  useEffect(() => {
    setURL(`ws://localhost:8000/ws/${userId}`);

    setCallback((e) => {
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
    });
  }, [userId, addMessage]);
  // addMessage should be constant anyway

  return <div></div>;
}
