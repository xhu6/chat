import { Link } from "react-router";

import { User } from "../stores/UsersStore";

export function UserCard({ user }: { user: User }) {
  return (
    <Link to={`/chat/${user.id}`}>
      <div className="rounded-lg border border-slate-700 bg-slate-800 p-4 transition-colors hover:bg-slate-700 hover:text-white">
        <div className="flex items-center gap-2 text-center">
          <img className="h-10 w-10" src={user.pfp ?? "/tauri.svg"}></img>
          <p className="text-2xl font-medium text-gray-200">{user.name}</p>
        </div>
      </div>
    </Link>
  );
}
