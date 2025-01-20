// src/pages/NewPage.js
import React from "react";
import NavbarComponent from "../components/NavBar/NavBar";
import DueDiligence from "../components/CustomWidgetDevelopment/DueDiligence";
import Kyc from "../components/CustomWidgetDevelopment/Kyc";
import RotAnalysis from "../components/CustomWidgetDevelopment/RotAnalysis";
import HeaderCreation from "../components/HeaderCreation/HeaderCreation";
import FooterCreation from "../components/FooterCreation/FooterCreation";

const NewPage = () => {
  return (
    <div>
      <NavbarComponent />
      <HeaderCreation />
      <div
        style={{
          display: "flex", // Enable flexbox for layout
          justifyContent: "space-evenly", // Space widgets evenly
          padding: "20px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <RotAnalysis />
        <Kyc />
        <DueDiligence />
      </div>
      <FooterCreation />
    </div>
  );
};

export default NewPage;
