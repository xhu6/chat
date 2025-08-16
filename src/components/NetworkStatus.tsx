import { useWsStore } from "stores/WsStore";

export function NetworkStatus() {
  const connected = useWsStore((state) => state.connected);

  const style = connected
    ? "h-0 bg-green-800 delay-1000"
    : "h-5 bg-black delay-0";

  return (
    <div
      className={`overflow-hidden text-center text-white transition-[height] duration-500 ${style}`}
    >
      {connected ? "Connected" : "Disconnected"}
    </div>
  );
}
