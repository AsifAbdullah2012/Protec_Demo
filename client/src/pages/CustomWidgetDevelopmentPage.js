// src/pages/NewPage.js
import React from "react";
import NavbarComponent from "../components/NavBar/NavBar";
import DueDiligence from "../components/CustomWidgetDevelopment/DueDiligence";
import Kyc from "../components/CustomWidgetDevelopment/Kyc";
import RotAnalysis from "../components/CustomWidgetDevelopment/RotAnalysis";
import HeaderCreation from "../components/HeaderCreation/HeaderCreation";
import FooterCreation from "../components/FooterCreation/FooterCreation";
import HeaderComponentWidgetDevelopment from "../components/HeaderCreation/HeaderCreationWidgetDevelopment";
import CreateIndexSection from "../components/IndexSelection/CreateIndexSelection";
import SearchResultsWidget from "../components/SearchResultsWidget/SearchResultsWidget";

const NewPage = () => {
  // mock data for the Search Results Widget
  const mockData = {
    status: "completed",
    images: [
      "https://via.placeholder.com/100", // Replace with actual image URLs
      "https://via.placeholder.com/100",
    ],
    retrievedText: [
      { text: "Example retrieved text 1", score: 0.85 },
      { text: "Example retrieved text 2", score: 0.78 },
    ],
  };

  return (
    <div>
      <NavbarComponent />
      <HeaderComponentWidgetDevelopment />
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

      <div
        style={{
          display: "flex", // Enable flexbox for layout
          justifyContent: "space-evenly", // Space widgets evenly
          padding: "20px",
          flexWrap: "wrap",
        }}
      >
        <CreateIndexSection />
        <SearchResultsWidget
          status={mockData.status}
          images={mockData.images}
          retrievedText={mockData.retrievedText}
        />
        {/* Add other components here (e.g., right-side content) */}
      </div>
      <FooterCreation />
    </div>
  );
};

export default NewPage;
