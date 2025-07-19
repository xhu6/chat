import { useParams } from "react-router";
import { Message } from "../Components/Message";
import { Back } from "../Components/Back";

export function Chat() {
  const { userId } = useParams();

  const messages = [
    { text: "Winston...", time: "10:20" },
    { text: "...", time: "10:22" },
    { text: "Winston...", time: "10:26" },
    { text: "Consequences.", time: "19:51" },
  ];

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

      <div className="flex-1 pt-10">
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
          // Bit inefficient but oh well...
          onClick={() =>
            alert(document.getElementById("messageBox").textContent)
          }
        >
          -&gt;
        </button>
      </div>
    </div>
  );
}
