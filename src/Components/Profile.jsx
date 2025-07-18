export function Profile({ person }) {
  return (
    <div className="Profile">
      <div className="Person-info">
        <button type="button" onClick={() => alert('Hello world!')}>{person.name}</button>
        <p>{person.pfp}</p>``
      </div>
    </div>
  );
}
