import { useParams } from "react-router";

import { ChatHeader } from "./ChatHeader";
import { MessageView } from "./MessageView";
import { BottomBar } from "./BottomBar";

export function ChatPage() {
  const param = useParams();
  const userId = Number(param.userId);

  return (
    <div className="flex h-full flex-col bg-slate-900">
      <ChatHeader userId={userId} />
      <MessageView userId={userId} />
      <BottomBar userId={userId} />
    </div>
  );
}
