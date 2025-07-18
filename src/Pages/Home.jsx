import { Profile } from "../Components/Profile";
import { useState } from "react";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const profiles = [
    { id: 1, name: "John Wick", pfp: "o" },
    { id: 2, name: "Wilson Cheung", pfp: "o" },
    { id: 3, name: "Xi Nan Shu", pfp: "o" },
    { id: 4, name: "Stephen Chou", pfp: "o" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="profile-grid">
        {profiles.map((person) => (
          <Profile person={person} key={person.id} />
        ))}
      </div>
    </div>
  );
}
