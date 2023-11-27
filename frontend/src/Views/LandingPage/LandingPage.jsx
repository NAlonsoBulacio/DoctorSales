import React from "react";
import Header from "../../Componentes/Header/Header";
import VideoAndButton from "../../Componentes/VideoAndButton/VideoAndButton";
import HelpYou from "../../Componentes/HelpYou/HelpYou";
import ProgramOffer from "../../Componentes/ProgrammOffer/ProgramOffer";
import WhyUs from "../../Componentes/WhyUs/WhyUs";
import Contrast from "../../Componentes/Contrast/Contrast";
import AnswersContrast from "../../Componentes/AnswersContrast/AnswersContrast";
import QuestionsAnswers from "../../Componentes/QuestionsAnswers/QuestionsAnswers";
import Footer from "../../Componentes/Footer/Footer";
import Options from "../../Componentes/Options/Options";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div>
      <Header />
      <VideoAndButton />
      <HelpYou />
      <ProgramOffer />
      <WhyUs />
      <Contrast />
      <AnswersContrast />
      <QuestionsAnswers />
      <Options />
      <Footer />
    </div>
  );
};

export default LandingPage;
