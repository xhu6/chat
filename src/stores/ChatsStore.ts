import { create } from "zustand";

export type Message = { sender: number; content: string; timestamp: number };
export type Chat = (Message | undefined)[];
type ChatMap = Map<number, Chat>;

interface ChatsState {
  chats: ChatMap;
  addMessage: (userId: number, seq_no: number, message: Message) => void;
}

export const useChatsStore = create<ChatsState>()((set) => ({
  chats: new Map() as ChatMap,
  addMessage: (userId: number, seq_no: number, message: Message) =>
    set((state) => {
      const chats = state.chats;

      const messages = chats.get(userId) ?? [];
      messages[seq_no] = message;

      // Copy to force re-render
      chats.set(userId, [...messages]);

      return { chats: chats };
    }),
}));
