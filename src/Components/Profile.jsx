import { Link } from "react-router";

export function Profile({ person }) {
  return (
    <Link to={`/chat/${person.name}`}>
      <div className="Profile m-2 rounded-lg border border-slate-700 bg-slate-800 p-4 transition-colors hover:bg-slate-700">
        <div className="Person-info flex items-center gap-2 text-center">
          <img src={person.pfp}></img>
          <p className="nav-link text-2xl font-medium text-white hover:text-slate-200">
            {person.name}
          </p>
        </div>
      </div>
    </Link>
  );
}
