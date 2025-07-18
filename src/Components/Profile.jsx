import { Link } from "react-router-dom"

export function Profile({ person }) {
  return (
    <div className="Profile bg-slate-800 rounded-lg border border-slate-700 p-4 hover:bg-slate-700 transition-colors m-2">
      <div className="Person-info flex items-center text-center gap-2">
        <img src={person.pfp}></img>
        <Link to={`/chat/${person.name}`} className="nav-link text-white text-2xl font-medium hover:text-slate-200">{person.name}</Link>
      </div>
    </div>
  );
}
