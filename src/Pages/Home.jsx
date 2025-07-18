import { Profile } from "../Components/Profile";
import { useState } from "react";
import { Link } from "react-router-dom"

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const profiles = [
    { id: 1, name: "John Wick", pfp: "/vite.svg" },
    { id: 2, name: "Wilson Cheung", pfp: "/vite.svg" },
    { id: 3, name: "Xi Nan Shu", pfp: "/vite.svg" },
    { id: 4, name: "Stephen Chou", pfp: "/vite.svg" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home flex h-screen flex-col bg-slate-900">
        <div className="flex flex-none gap-4 bg-slate-700 p-4 justify-center">
          <form onSubmit={handleSearch} className="search-form flex gap-2 border p-2 rounded-xl">
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
            <Link to={'/Settings'} className="nav-link text-white text-xl font-medium hover:text-slate-200">...</Link>
          </form>
        </div>
      <div className="flex-col gap-4">
        {profiles.map((person) => (
          <Profile person={person} key={person.id} />  
        ))}
      </div>
    </div>
  );
}
