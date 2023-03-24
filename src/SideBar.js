import React from "react";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";
import './index.css'

function SideBar() {
  // const [{playlists}]=useDataLayerValue();

  return (
    <div className="sidebar flex flex-col pl-2.5 pr-2.5 min-w-230 h-screen bg-black text-white">
      <img
        className="h-16 object-contain	mr-auto	p-2.5"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

      <br />
      <strong className="ml-2.5 p-1 text-xs">PLAYLISTS</strong>
      <hr/>
    </div>
  );
}

export default SideBar;
