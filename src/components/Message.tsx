export function Message({
  message,
}: {
  message: { time: number; text: string };
}) {
  let date = new Date(message.time);
  return (
    <div className="bg-slate-900 px-4 py-2 text-gray-200">
      <span className="text-gray-400">{date.toLocaleTimeString()}</span>
      <span className="ml-4 text-xl">{message.text}</span>
    </div>
  );
}
