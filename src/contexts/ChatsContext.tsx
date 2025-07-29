import { createContext, ReactNode, useState } from "react";

type Message = { text: string; time: number };
type Chat = Message[];
type ChatMap = Map<number, Chat>;

type ChatsContextType = {
  chats: ChatMap;
  addMessage: (userId: number, text: string, time: number) => void;
};

export const ChatsContext = createContext({} as ChatsContextType);

export function ChatsProvider({ children }: { children: ReactNode }) {
  const [chats, setChats] = useState(new Map<number, Chat>());

  function addMessage(userId: number, text: string, time: number) {
    setChats((c) => {
      const out = new Map(c);
      const messages = out.get(userId) ?? [];
      out.set(userId, [...messages, { text: text, time: time }]);
      return out;
    });
  }

  return (
    <ChatsContext.Provider value={{ chats, addMessage }}>
      {children}
    </ChatsContext.Provider>
  );
}
