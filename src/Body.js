import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React from "react";
import Header from "./Header";
import { songs } from "./Songs";
// import SongRow from './SongRow';

function Body() {
  return (
    <div
      className="p-8 w-full h-screen text-white "
      style={{
        overflowY: "overlay",
        background: "linear-gradient(transparent, rgba(0, 0, 0, 1))",
        backgroundColor: "rgb(91, 87, 115)",
      }}
    >
      <Header />

      <div className="flex items-end p-2.5">
        <img
          style={{
            height: "25vw",
            boxShadow: "0 4px 60px rgba(0, 0, 0, 0.5)",
          }}
          className="mx-0 my-5"
          src={songs[0].coverPath}
          alt="song"
        />
        <div className="ml-5 pb-4">
          <strong>PLAYLIST</strong>
          <h2 style={{ fontSize: "48px", marginbottom: "10px" }}>
            Discover Weekly
          </h2>
          <p style={{ fontSize: "14px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            rerum beatae dolor?
          </p>
        </div>
      </div>
      <div className="" style={{ zindex: "1", margin: "20px -30opx" }}>
        <div className="flex items-center ">
          <PlayCircleFilled style={{ fontSize: "6rem" , marginRight:'1.2rem' }} className="text-8xl ml-12 mt-5 mb-5 hover:ease-in duration-300 scale-1.5" />
          <Favorite fontSize="large" style={{ marginRight:'1.2rem' }} />
          <MoreHoriz className="mr-5" />
        </div>

        {/* List of Songs */}
        <div className="songRow">
          {/* Render the list of songs */}
          {songs.map((song, index) => (
            <div key={index} className="pt-10">
              <img className="h-32" src={song.coverPath} alt="Album Cover" />
              <h1 className="pt-2">{song.songName}</h1>
              <audio className="pt-2 h-10 w-52" src={song.filePath} controls />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
