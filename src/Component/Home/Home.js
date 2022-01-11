import React from "react";
import Profile from "../Profile/Profile";
import VideoComp from "../VideoComp/VideoComp";

const Home = () => {
  return (
    <div id="home">
      <div>
        <Profile />
      </div>
      
      <div>
        <VideoComp />
      </div>
    </div>
  );
};

export default Home;
