export function Message({ msg }) {
  return (
    <div className="bg-slate-900 px-4 py-2 text-gray-200">
      <span className="text-gray-400">{msg.time}</span>
      <span className="ml-4 text-xl">{msg.text}</span>
    </div>
  );
}
