import { createContext, ReactNode, useState } from "react";

export type Message = { sender: number; content: string; timestamp: number };
export type Chat = Message[];
type ChatMap = Map<number, Chat>;

type ChatsContextType = {
  chats: ChatMap;
  addMessage: (userId: number, seq_no: number, message: Message) => void;
};

// Won't work unless context initialised.
export const ChatsContext = createContext({} as ChatsContextType);

export function ChatsProvider({ children }: { children: ReactNode }) {
  const [chats, setChats] = useState(new Map() as ChatMap);

  function addMessage(userId: number, seq_no: number, message: Message) {
    setChats((c) => {
      const messages = c.get(userId) ?? [];

      messages[seq_no] = message;

      c.set(userId, messages);

      // Copy to force re-render
      return new Map(c);
    });
  }

  return (
    <ChatsContext.Provider value={{ chats, addMessage }}>
      {children}
    </ChatsContext.Provider>
  );
}
