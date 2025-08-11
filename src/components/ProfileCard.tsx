import { Link } from "react-router";

export function ProfileCard({
  person,
}: {
  person: { id: number; name: string; pfp: string };
}) {
  return (
    <Link to={`/chat/${person.id}`}>
      <div className="rounded-lg border border-slate-700 bg-slate-800 p-4 transition-colors hover:bg-slate-700 hover:text-white">
        <div className="flex items-center gap-2 text-center">
          <img src={person.pfp}></img>
          <p className="text-2xl font-medium text-gray-200">{person.name}</p>
        </div>
      </div>
    </Link>
  );
}
