import { useState } from "react";
import { Link } from "react-router";

import { useUsersStore } from "stores/UsersStore";

import { UserCard } from "./UserCard";

import settingsIcon from "assets/icons/settings_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import searchIcon from "assets/icons/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    alert(searchQuery);
  };

  const users = useUsersStore((state) => state.users);

  return (
    <div className="bg-slate-900">
      <div className="flex-none gap-4 bg-slate-800 p-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 rounded-xl bg-slate-600 p-4 text-slate-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button className="flex-none" onClick={handleSearch}>
            <img src={searchIcon} alt="" className="h-8" />
          </button>

          <Link to={"/Settings"} className="flex-none content-center">
            <img src={settingsIcon} alt="" className="h-8" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4">
        {[...users.values()].map((user, index) => (
          <UserCard user={user} key={index} />
        ))}
      </div>
    </div>
  );
}
