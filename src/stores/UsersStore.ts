import { create } from "zustand";

export type User = { id: number; name: string; pfp?: string };

interface UsersState {
  users: Map<number, User>;
  addUser: (user: User) => void;
}

let users = [
  { id: 1, name: "John Wick", pfp: "/vite.svg" },
  { id: 2, name: "Wilson Cheung", pfp: "/vite.svg" },
  { id: 3, name: "Xi Nan Shu", pfp: "/vite.svg" },
  { id: 4, name: "Stephen Chou" },
];

export const useUsersStore = create<UsersState>()((set) => ({
  users: new Map(users.map((user) => [user.id, user])),

  addUser: (user: User) => {
    set((state) => {
      // Copy to force re-render
      const users = new Map(state.users);

      users.set(user.id, user);
      return { users: users };
    });
  },
}));
