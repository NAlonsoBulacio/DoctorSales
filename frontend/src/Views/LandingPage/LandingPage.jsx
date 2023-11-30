import React, { useEffect, useState } from "react";
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
import WhatsAppButton from "../../Componentes/Whatsapp/WhatsappButton";
import "./LandingPage.css";
const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const thirtySecondsTimeout = setTimeout(() => {
      if (!scrolled) {
        window.fbq('trackCustom', 'ThirtySecondsOnPage');
        setScrolled(true);
      }
    }, 30000);

    const handleScroll = () => {
      if (!scrolled) {
        window.fbq("trackCustom", "Scrolled");
        setScrolled(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(thirtySecondsTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
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
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default LandingPage;
