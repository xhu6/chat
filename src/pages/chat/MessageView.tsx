import { useChatsStore } from "stores/ChatsStore";
import { Message } from "stores/ChatsStore";

function MessageItem({ message }: { message: Message }) {
  const timeString = new Date(message.timestamp).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="my-4 pl-2">
      <div className="mb-1 inline-block indent-0">
        <span className="mr-2 inline-block rounded-md bg-slate-700 px-1 text-gray-100">
          User {message.sender}
        </span>
        <span className="inline-block text-sm text-gray-400">{timeString}</span>
      </div>
      <div className="ml-4 text-lg/5 wrap-anywhere text-gray-300">
        {message.content}
      </div>
    </div>
  );
}

export function MessageView({ userId }: { userId: number }) {
  const messages = useChatsStore((state) => state.chats.get(userId)) ?? [];

  return (
    <div className="flex-1 overflow-auto bg-slate-900 px-2 py-4">
      {messages
        .filter((e) => e != undefined)
        .map((message, index) => (
          <MessageItem message={message} key={index} />
        ))}
    </div>
  );
}
