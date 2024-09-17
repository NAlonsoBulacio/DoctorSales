import React from "react";
import Header from "../E-Header/E-Header";
import "./Home.css";
import TitleAndVideo from "../../Componentes/TitleAndVideo/TitleAndVideo";
const Home = () => {

  return (
    <div className="w-full h-auto background-header flex flex-wrap justify-center space-y-6 lg:space-y-4">
      <div className="w-full">
        <Header />
      </div>
      <div className="w-full flex flex-wrap justify-center space-y-4 lg:space-y-10">
        <TitleAndVideo video={"wpp"} />
      </div>
    </div>
  );
};

export default Home;
