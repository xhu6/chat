import { Message } from "../contexts/ChatsContext";

export function MessageItem({ message }: { message: Message }) {
  let date = new Date(message.timestamp);
  return (
    <div className="bg-slate-900 px-4 py-2 text-gray-200">
      <span className="text-gray-400">{date.toLocaleTimeString()}</span>
      <span className="ml-4 text-xl font-bold">{message.sender}</span>
      <span className="ml-4 text-xl">{message.content}</span>
    </div>
  );
}
