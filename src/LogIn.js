import React, { useState } from "react";
import Player from "./PLayer";

function LogIn() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signIn = () => {
    setIsSignedIn(true);
  };
  return (
    <div>
      {isSignedIn ? (
        <Player />
      ) : (
        <div className="grid place-items-center h-screen bg-black">
          <img
            className="h-52"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt=""
          />
          <button
            class="bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-violet-300 text-white p-3 rounded-l-full rounded-r-full font-extrabold"
            type="submit"
            onClick={signIn}
          >
            LOGIN TO SPOTIFY
          </button>
        </div>
      )}
    </div>
  );
}

export default LogIn;
