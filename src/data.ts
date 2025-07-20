import { load } from "@tauri-apps/plugin-store";

const store = await load("store.json");

export let profiles = [
  { id: 1, name: "John Wick", pfp: "/vite.svg" },
  { id: 2, name: "Wilson Cheung", pfp: "/vite.svg" },
  { id: 3, name: "Xi Nan Shu", pfp: "/vite.svg" },
  { id: 4, name: "Stephen Chou", pfp: "/vite.svg" },
];

let userId = (await store.get<number>("userId")) ?? 1;

export function getUserId() {
  return userId;
}

export function setUserId(value: number) {
  userId = value;
  store.set("userId", value);
}
