import { load } from "@tauri-apps/plugin-store";

const store = await load("store.json");

// userId

let userId = (await store.get<number>("userId")) ?? 1;

export function getUserId() {
  return userId;
}

export function setUserId(value: number) {
  userId = value;
  store.set("userId", value);
}

// profiles

export let profiles = [
  { id: 1, name: "John Wick", pfp: "/vite.svg" },
  { id: 2, name: "Wilson Cheung", pfp: "/vite.svg" },
  { id: 3, name: "Xi Nan Shu", pfp: "/vite.svg" },
  { id: 4, name: "Stephen Chou", pfp: "/vite.svg" },
];

// messages
type Message = { text: string; time: number };

let convs: Map<number, Message[]> = new Map();

export function getConv(conv_id: number) {
  return [...(convs.get(conv_id) ?? [])];
}

export function addMsg(conv_id: number, text: string, time: number) {
  let conv = convs.get(conv_id) ?? [];
  conv.push({ text: text, time: time });
  convs.set(conv_id, conv);
}
