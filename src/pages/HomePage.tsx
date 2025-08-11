import { useState } from "react";
import { Link } from "react-router";

import { ProfileCard } from "../components/ProfileCard";
import { profiles } from "../data";

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    alert(searchQuery);
  };

  return (
    <div>
      <div className="flex-none gap-4 bg-slate-800 p-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 rounded-xl bg-slate-600 p-4 text-slate-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button className="flex-none text-white" onClick={handleSearch}>
            Search
          </button>

          <Link
            to={"/Settings"}
            className="flex-none text-xl font-medium text-white hover:text-slate-200"
          >
            ...
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4">
        {profiles.map((person) => (
          <ProfileCard person={person} />
        ))}
      </div>
    </div>
  );
}
