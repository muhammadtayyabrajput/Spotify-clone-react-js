import "./App.css";
import React, { useEffect ,useState} from "react";
import HomeIcon from "@material-ui/icons/Home";
import "tailwindcss/tailwind.css";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "./Spotify";
import { useDataLayerValue } from "./DataLayer";
import LogIn from "./LogIn";
import Player from "./PLayer";

// const spotify = new SpotifyWebApi();

function App() {

  return <div><LogIn /></div>;
}

export default App;
