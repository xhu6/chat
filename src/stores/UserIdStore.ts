import { create } from "zustand";

// import { load } from "@tauri-apps/plugin-store";

// const store = await load("store.json");

// userId

// let userId = (await store.get<number>("userId")) ?? 1;

interface UserIdState {
  userId: number;
  setUserId: (userId: number) => void;
}

export const useUserIdStore = create<UserIdState>()((set) => ({
  userId: 0,
  setUserId: (userId: number) => set({ userId: userId }),
}));
