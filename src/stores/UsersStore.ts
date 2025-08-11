import { create } from "zustand";

export type User = { id: number; name: string; pfp?: string };

interface UsersState {
  byId: Map<number, User>;
}

let users = [
  { id: 1, name: "John Wick", pfp: "/vite.svg" },
  { id: 2, name: "Wilson Cheung", pfp: "/vite.svg" },
  { id: 3, name: "Xi Nan Shu", pfp: "/vite.svg" },
  { id: 4, name: "Stephen Chou" },
];

export const useUsersStore = create<UsersState>()(() => ({
  byId: new Map(users.map((user) => [user.id, user])),
}));
