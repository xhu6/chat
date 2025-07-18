import { Message } from "../Components/Message";

export function Chat() {
  const messages = [
    { text: "Winston...", time: "10:20" },
    { text: "...", time: "10:22" },
    { text: "Winston...", time: "10:26" },
    { text: "Consequences.", time: "19:51" },
  ];

  return (
    <div className="flex h-screen flex-col bg-slate-900">
      <div className="flex flex-none gap-4 bg-slate-800 p-4">
        <img
          className="h-12 w-12"
          src="/vite.svg"
          alt="John Wick's profile picture."
        />
        <p className="content-center text-3xl font-bold text-white">
          John Wick
        </p>
      </div>

      <div className="flex-1 pt-10">
        {messages.map((msg) => (
          <Message msg={msg}></Message>
        ))}
      </div>

      <div className="flex flex-none content-center gap-4 bg-slate-800 p-4">
        <input type="text" className="flex-1 bg-white p-2 text-2xl" />
        <button className="flex-none rounded-2xl bg-slate-200 p-3">SEND</button>
      </div>
    </div>
  );
}
