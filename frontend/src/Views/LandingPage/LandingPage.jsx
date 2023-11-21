import React from "react";
import Header from "../../Componentes/Header/Header";
import VideoAndButton from "../../Componentes/VideoAndButton/VideoAndButton";
import HelpYou from "../../Componentes/HelpYou/HelpYou";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div>
      <Header />
      <VideoAndButton />
      <HelpYou />
    </div>
  );
};

export default LandingPage;
