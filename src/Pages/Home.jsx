import { Profile } from "../Components/Profile";
import { useState } from "react";
import { Link } from "react-router";

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
      <div className="flex-none gap-4 bg-slate-800 p-4">
        <form onSubmit={handleSearch} className="flex gap-4">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 rounded-xl bg-slate-600 p-4 text-slate-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button type="submit" className="flex-none text-white">
            Search
          </button>

          <Link
            to={"/Settings"}
            className="flex-none text-xl font-medium text-white hover:text-slate-200"
          >
            ...
          </Link>
        </form>
      </div>
      <div className="flex flex-col gap-4 p-4">
        {profiles.map((person) => (
          <Profile person={person} key={person.id} />
        ))}
      </div>
    </div>
  );
}
