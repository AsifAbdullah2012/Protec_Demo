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
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <Box sx={({ flexGrow: 2 }, { width: "100%" })}>
      <NavbarComponent />
      <HeaderComponentWidgetDevelopment />

      {/*       <div
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
      </div> */}

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs="4">
          <RotAnalysis />
        </Grid>
        <Grid item xs="4">
          <Kyc />
        </Grid>
        <Grid item xs="4">
          <DueDiligence />
        </Grid>
      </Grid>

      {/*   */}

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs="6">
          <CreateIndexSection />
        </Grid>
        <Grid item xs="6">
          <SearchResultsWidget
            status={mockData.status}
            images={mockData.images}
            retrievedText={mockData.retrievedText}
          />
        </Grid>
      </Grid>
      <FooterCreation />
    </Box>
  );
};

export default NewPage;
