import React from "react";
import Body from "./Body";
import SideBar from "./SideBar";
import Footer from "./Footer";
import Header from "./Header";
import './index.css'

function Player() {
  return (
    <div className="flex flex-col">
      <div className="flex grow">
        {/* <Header /> */}
        <SideBar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
