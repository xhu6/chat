import { useWsStore } from "stores/WsStore";

import sendIcon from "assets/icons/send_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

function sendMessage(userId: number) {
  const send = useWsStore.getState().send;

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

function SendButton({ userId }: { userId: number }) {
  return (
    <button
      className="h-14 w-14 flex-none rounded-2xl bg-blue-600 hover:bg-blue-500"
      onClick={() => sendMessage(userId)}
    >
      <img src={sendIcon} alt="" className="m-auto h-8" />
    </button>
  );
}

function MessageBox() {
  return (
    <div
      contentEditable="true"
      className="max-h-40 flex-1 overflow-x-clip overflow-y-scroll rounded-2xl bg-slate-700 p-4 text-xl wrap-break-word text-gray-200 outline-0"
      id="messageBox"
      onPaste={(e) => {
        e.preventDefault();
        let data = e.clipboardData.getData("text/plain");

        // Deprecated but is easiest solution for now.
        document.execCommand("insertText", false, data);
      }}
    ></div>
  );
}

export function BottomBar({ userId }: { userId: number }) {
  return (
    <div className="bottom-0 flex w-full content-center gap-4 px-4 pb-2">
      <MessageBox />
      <SendButton userId={userId} />
    </div>
  );
}
