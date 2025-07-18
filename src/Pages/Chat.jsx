import { Message } from "../Components/Message";

export function Chat() {
  const messages = [
    { text: "Winston...", time: "10:20"},
    { text: "...", time: "10:22"},
    { text: "Winston...", time: "10:26"},
    { text: "Consequences.", time: "19:51"}
  ];

  return (
    <div className=" bg-slate-900 h-screen flex-col flex">
      <div className="bg-slate-800 p-4 gap-4 flex-none flex">
        <img
          className="h-12 w-12"
          src="/vite.svg"
          alt="John Wick's profile picture."
        />
        <p className="text-3xl content-center font-bold text-white">John Wick</p>
      </div>

      <div className="pt-10 flex-1">
        {messages.map((msg) => <Message msg={msg}></Message>)}
      </div>

      <div className="bg-slate-800 flex-none content-center p-4 flex gap-4">
        <input type="text" className="bg-white text-2xl p-2 flex-1"/>
        <button className="flex-none bg-slate-200 rounded-2xl p-3">SEND</button>
      </div>
    </div>
  );
}
