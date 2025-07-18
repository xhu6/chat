export function Profile({ person }) {
  return (
    <div className="Profile">
      <div className="movie-info">
        <h3>{person.name}</h3>
        <p>{person.pfp}</p>
      </div>
    </div>
  );
}
