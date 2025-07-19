import { useParams } from "react-router";
import { Message } from "../Components/Message";
import { Back } from "../Components/Back";
import { useState } from "react";

let ws = new WebSocket(`ws://localhost:8000/ws/0`);

function sendMessage() {
  let data = document.getElementById("messageBox").textContent;
  if (data.length == 0) return;

  // addMessage(data, Date.now());
  ws.send(data);
}

export function Chat() {
  const { userId } = useParams();

  const [messages, setMessages] = useState([
    { text: "Consequences.", time: 0 },
  ]);

  function addMessage(text, time) {
    setMessages((messages) => messages.concat([{ text: text, time: time }]));
  }

  ws.onmessage = (e) => {
    addMessage(e.data, Date.now());
  };

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
        {messages.map((msg) => (
          <Message msg={msg}></Message>
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
          onClick={sendMessage}
        >
          -&gt;
        </button>
      </div>
    </div>
  );
}
