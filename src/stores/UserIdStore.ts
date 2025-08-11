import { create } from "zustand";

interface UserIdState {
  userId: number;
  setUserId: (userId: number) => void;
}

export const useUserIdStore = create<UserIdState>()((set) => ({
  userId: 0,
  setUserId: (userId: number) => set({ userId: userId }),
}));
