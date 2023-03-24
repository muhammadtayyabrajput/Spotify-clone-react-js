import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

// className="sticky flex bg-gray-600 justify-between	p-5 h-16 w-full"

function Footer() {
  return (
    <div
      style={{
        position: "fixed",
        height: "110px",
        backgroundColor: "#282828",
        bottom: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        height: "65px",
        width: "100%",
      }}
    >
      <div className="flex items-center text-white w-72">
        <img
          className="h-14 w-14 mr-5 object-contain"
          src="https://i1.sndcdn.com/artworks-UxM4BbNJZUXB-0-t500x500.jpg"
          alt=""
        />
        <div>
          <h4 className="mb-1.5">Jalebi Baby</h4>
          <p className="text-xs	">Tesher</p>
        </div>
      </div>

      <div className="max-w-xs px-0 py-24 flex text-white items-center justify-between ">
        <ShuffleIcon
          style={{
            ":hover": { transition: "transform 0.2s ease-in-out" },
            ":hover": { transform: "scale(1.2) !important" },
            color: "#1ed15e",
          }}
        />
        <SkipPreviousIcon
          className="footer__icon"
          style={{
            ":hover": { transition: "transform 0.2s ease-in-out" },
            ":hover": { transform: "scale(1.2) !important" },
          }}
        />
        <PlayCircleOutlineIcon
          fontSize="large"
          className="footer__icon"
          style={{
            ":hover": { transition: "transform 0.2s ease-in-out" },
            ":hover": { transform: "scale(1.2) !important" },
          }}
        />
        <SkipNextIcon
          className="footer__icon"
          style={{
            ":hover": { transition: "transform 0.2s ease-in-out" },
            ":hover": { transform: "scale(1.2) !important" },
          }}
        />
        <RepeatIcon
          style={{
            ":hover": { transition: "transform 0.2s ease-in-out" },
            ":hover": { transform: "scale(1.2) !important" },
            color: "#1ed15e",
          }}
        />
      </div>

      <div className="flex justify-between items-center text-white ">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon className="text-green" />
          </Grid>
          <Grid item>
            <VolumeDownIcon className="text-green" />
          </Grid>
          <Grid item xs>
            <Slider
              aria-labelledby="continuous-slider"
              className="text-green"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
