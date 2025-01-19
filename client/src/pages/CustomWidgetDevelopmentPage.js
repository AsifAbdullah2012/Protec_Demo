// src/pages/NewPage.js
import React from "react";
import NavbarComponent from "../components/NavBar/NavBar";
import DueDiligence from "../components/CustomWidgetDevelopment/DueDiligence";
import Kyc from "../components/CustomWidgetDevelopment/Kyc";
import RotAnalysis from "../components/CustomWidgetDevelopment/RotAnalysis";

const NewPage = () => {
  return (
    <div>
      <NavbarComponent />
      <div
        style={{
          display: "flex", // Enable flexbox for layout
          justifyContent: "space-evenly", // Space widgets evenly
          padding: "20px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <DueDiligence />
        <Kyc />
        <RotAnalysis />
      </div>
    </div>
  );
};

export default NewPage;
