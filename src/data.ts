export let profiles = [
  { id: 1, name: "John Wick", pfp: "/vite.svg" },
  { id: 2, name: "Wilson Cheung", pfp: "/vite.svg" },
  { id: 3, name: "Xi Nan Shu", pfp: "/vite.svg" },
  { id: 4, name: "Stephen Chou", pfp: "/vite.svg" },
];

let userId = 1;
let callbacks: ((value: number) => void)[] = [];

export function getUserId() {
  return userId;
}

export function setUserId(value: number) {
  userId = value;

  callbacks.forEach((f) => f(userId));
}

export function callbackUserId(f: (value: number) => void) {
  callbacks.push(f);
}
