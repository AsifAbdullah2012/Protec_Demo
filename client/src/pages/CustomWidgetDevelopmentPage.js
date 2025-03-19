// src/pages/NewPage.js
import React, { useState } from "react";
import NavbarComponent from "../components/NavBar/NavBar";
import DueDiligence from "../components/CustomWidgetDevelopment/DueDiligence";
import Kyc from "../components/CustomWidgetDevelopment/Kyc";
import CsvUploader from "../components/RiskAnalysis/CsvUploader";
import RotAnalysis from "../components/CustomWidgetDevelopment/RotAnalysis";
import RiskAnalysis from "../components/CustomWidgetDevelopment/RiskAnalysis";
import HeaderCreation from "../components/HeaderCreation/HeaderCreation";
import FooterCreation from "../components/FooterCreation/FooterCreation";
import HeaderComponentWidgetDevelopment from "../components/HeaderCreation/HeaderCreationWidgetDevelopment";
import CreateIndexSection from "../components/IndexSelection/CreateIndexSelection";
import SearchResultsWidget from "../components/SearchResultsWidget/SearchResultsWidget";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import RiskNavbar from "../components/NavBar/RiskNavbar";
import { Typography, Container } from "@mui/material";

const NewPage = () => {
  const [searchResults, setSearchResults] = useState("");
  const [activeTab, setActiveTab] = useState("rotAnalysis");
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
      <RiskNavbar setActiveTab={setActiveTab} />
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

      {/* Conditionally Render Multiple Components for Each Tab */}
      {activeTab === "rotAnalysis" && (
        <>
          <Container maxWidth="lg" style={{ padding: "20px" }}>
            <Typography variant="h4" align="center" color="gray" gutterBottom>
              Rot Analysis
            </Typography>
            <Grid container spacing={2} style={{ marginBottom: "20px" }}>
              <Grid item xs={12} sm={4}>
                <Paper style={{ padding: "20px", textAlign: "center" }}>
                  <RotAnalysis />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Paper style={{ padding: "20px", textAlign: "center" }}>
                  <CsvUploader />
                </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs="6">
                <CreateIndexSection setSearchResults={setSearchResults} />
              </Grid>
              <Grid item xs="6">
                <SearchResultsWidget
                  status={mockData.status}
                  images={mockData.images}
                  retrievedText={mockData.retrievedText}
                  results={searchResults}
                />
              </Grid>
            </Grid>{" "}
            {/* Additional component when RotAnalysis is active */}
          </Container>
        </>
      )}

      {/* Conditionally Render Multiple Components for Each Tab */}
      {activeTab === "kyc" && (
        <>
          <Container maxWidth="lg" style={{ padding: "20px" }}>
            <Typography variant="h4" align="center" color="gray" gutterBottom>
              KYC
            </Typography>
            <Kyc />
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs="6">
                <CreateIndexSection setSearchResults={setSearchResults} />
              </Grid>
              <Grid item xs="6">
                <SearchResultsWidget
                  status={mockData.status}
                  images={mockData.images}
                  retrievedText={mockData.retrievedText}
                  results={searchResults}
                />
              </Grid>
            </Grid>{" "}
            {/* Additional component when RotAnalysis is active */}
          </Container>
        </>
      )}

      {/* Conditionally Render Multiple Components for Each Tab */}
      {activeTab === "dueDiligence" && (
        <>
          <Container maxWidth="lg" style={{ padding: "20px" }}>
            <Typography variant="h4" align="center" color="gray" gutterBottom>
              Due Dilligence
            </Typography>
            <DueDiligence />
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs="6">
                <CreateIndexSection setSearchResults={setSearchResults} />
              </Grid>
              <Grid item xs="6">
                <SearchResultsWidget
                  status={mockData.status}
                  images={mockData.images}
                  retrievedText={mockData.retrievedText}
                  results={searchResults}
                />
              </Grid>
            </Grid>{" "}
            {/* Additional component when RotAnalysis is active */}
          </Container>
        </>
      )}

      {activeTab === "riskAnalysis" && (
        <>
          <Container maxWidth="lg" style={{ padding: "20px" }}>
            <Typography variant="h4" align="center" color="gray" gutterBottom>
              Risk Analysis
            </Typography>
            <CsvUploader />
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs="6">
                <CreateIndexSection setSearchResults={setSearchResults} />
              </Grid>
              <Grid item xs="6">
                <SearchResultsWidget
                  status={mockData.status}
                  images={mockData.images}
                  retrievedText={mockData.retrievedText}
                  results={searchResults}
                />
              </Grid>
            </Grid>{" "}
            {/* Additional component when RotAnalysis is active */}
          </Container>
        </>
      )}

      {/*   */}

      <FooterCreation />
    </Box>
  );
};

export default NewPage;
