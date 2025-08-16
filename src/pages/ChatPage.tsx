import { useParams } from "react-router";

import { MessageItem } from "../components/MessageItem";
import { BackButton } from "../components/BackButton";

import { useWsStore } from "../stores/WsStore";
import { useChatsStore } from "../stores/ChatsStore";
import { useUsersStore } from "../stores/UsersStore";

export function ChatPage() {
  const param = useParams();
  const userId = Number(param.userId);
  const users = useUsersStore((state) => state.users);
  const user = users.get(userId);

  const chats = useChatsStore((state) => state.chats);
  const messages = chats.get(userId) ?? [];

  const send = useWsStore((state) => state.send);

  function sendMessage() {
    let box = document.getElementById("messageBox");
    if (box == null) return;

    let text = box.textContent ?? "";
    box.textContent = "";
    if (text.length == 0) return;

    send(
      JSON.stringify({
        type: "send[direct]",
        recipient: userId,
        content: text,
      }),
    );
  }

  return (
    <div className="flex h-full flex-col bg-slate-900">
      <div className="flex flex-none gap-4 bg-slate-800 p-4">
        <BackButton />
        <img
          className="h-12 w-12"
          src={user?.pfp ?? "/tauri.svg"}
          alt="John Wick's profile picture."
        />
        <p className="content-center text-3xl font-bold text-gray-200">
          {user?.name ?? "Unknown user"}
        </p>
      </div>

      <div className="flex-1 overflow-auto pt-10">
        {messages.map((message, index) => (
          <MessageItem message={message} key={index} />
        ))}
      </div>

      <div className="flex flex-none content-center gap-4 p-4">
        <div
          contentEditable="true"
          className="max-h-40 flex-1 resize-none overflow-auto rounded-2xl bg-slate-700 p-4 text-xl text-gray-200"
          id="messageBox"
          onPaste={(e) => {
            e.preventDefault();
            let data = e.clipboardData.getData("text/plain");
            
            // Deprecated but is easiest solution for now.
            document.execCommand("insertText", false, data);
          }}
        ></div>
        <button
          className="h-14 w-14 flex-none rounded-2xl bg-slate-700 text-white"
          onClick={sendMessage}
        >
          -&gt;
        </button>
      </div>
    </div>
  );
}
