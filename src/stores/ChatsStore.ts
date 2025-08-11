import { create } from "zustand";

export type Message = { sender: number; content: string; timestamp: number };
export type Chat = Message[];
type ChatMap = Map<number, Chat>;

interface ChatsState {
  chats: ChatMap;
  addMessage: (userId: number, seq_no: number, message: Message) => void;
}

export const useChatsStore = create<ChatsState>()((set) => ({
  chats: new Map() as ChatMap,
  addMessage: (userId: number, seq_no: number, message: Message) =>
    set((state) => {
      // Copy to force re-render
      const chats = new Map(state.chats);

      const messages = chats.get(userId) ?? [];
      messages[seq_no] = message;
      chats.set(userId, messages);

      return { chats: chats };
    }),
}));
