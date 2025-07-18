import { Link } from "react-router-dom"

export function Profile({ person }) {
  return (
    <div className="Profile">
      <div className="Person-info">
        <Link to={`/chat/${person.name}`} className="nav-link">{person.name}</Link>
        <p>{person.pfp}</p>
      </div>
    </div>
  );
}
