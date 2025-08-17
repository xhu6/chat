import { useChatsStore } from "stores/ChatsStore";
import { Message } from "stores/ChatsStore";

function MessageItem({ message }: { message: Message }) {
  let date = new Date(message.timestamp);
  return (
    <div className="bg-slate-900 px-4 py-2 text-gray-200">
      <span className="text-gray-400">{date.toLocaleTimeString()}</span>
      <span className="ml-4 text-xl font-bold">{message.sender}</span>
      <span className="ml-4 text-xl">{message.content}</span>
    </div>
  );
}

export function MessageView({ userId }: { userId: number }) {
  const messages = useChatsStore((state) => state.chats.get(userId)) ?? [];

  return (
    <div className="flex-1 overflow-auto pt-10">
      {messages
        .filter((e) => e != undefined)
        .map((message, index) => (
          <MessageItem message={message} key={index} />
        ))}
    </div>
  );
}
