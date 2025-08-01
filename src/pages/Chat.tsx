import { useParams } from "react-router";

import { Message } from "../components/Message";
import { Back } from "../components/Back";

import { getWs } from "../connection";
import { ChatsContext } from "../contexts/ChatsContext";
import { useContext } from "react";

function sendMessage(userId: number) {
  let box = document.getElementById("messageBox");
  if (box == null) return;

  let text = box.textContent ?? "";
  box.textContent = "";
  if (text.length == 0) return;

  getWs().send(
    JSON.stringify({ type: "send[direct]", recipient: userId, content: text }),
  );
}

export function Chat() {
  const param = useParams();
  const userId = Number(param.userId);
  const { chats } = useContext(ChatsContext);
  const messages = chats.get(userId) ?? [];

  return (
    <div className="flex h-screen flex-col bg-slate-900">
      <div className="flex flex-none gap-4 bg-slate-800 p-4">
        <Back></Back>
        <img
          className="h-12 w-12"
          src="/vite.svg"
          alt="John Wick's profile picture."
        />
        <p className="content-center text-3xl font-bold text-gray-200">
          {userId}
        </p>
      </div>

      <div className="flex-1 overflow-auto pt-10">
        {messages.map((message) => (
          <Message message={message}></Message>
        ))}
      </div>

      <div className="flex flex-none content-center gap-4 p-4">
        <div
          contentEditable="true"
          className="max-h-40 flex-1 resize-none overflow-auto rounded-2xl bg-slate-700 p-4 text-xl text-gray-200"
          id="messageBox"
        ></div>
        <button
          className="h-14 w-14 flex-none rounded-2xl bg-slate-700 text-white"
          onClick={() => sendMessage(userId)}
        >
          -&gt;
        </button>
      </div>
    </div>
  );
}
