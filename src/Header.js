import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="flex justify-between mb-8">
      <div className="flex bg-white p-2.5 text-gray-300 items-center rounded-3xl w-80">
        <SearchIcon />
        <input className="border-0	w-full"
          placeholder="Search for Artists, Songs or Podcasts"
          type="text"
        />
      </div>
    </div>
  );
}
export default Header;
