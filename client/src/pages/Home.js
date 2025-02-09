import React, { useState } from "react";
import SearchWidget from "../components/SearchWidget/SearchWidget";
import CreateIndexSection from "../components/IndexSelection/CreateIndexSelection";
import SearchResultsWidget from "../components/SearchResultsWidget/SearchResultsWidget";
import HeaderComponent from "../components/HeaderCreation/HeaderCreation";
import FooterComponent from "../components/FooterCreation/FooterCreation";
import NavbarComponent from "../components/NavBar/NavBar";

import axios from "axios";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function Home({ searchResults, setSearchResults }) {
  // State to manage user query and search results
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null); // To store results from the backend
  const [error, setError] = useState(null); // To store any error messages

  // Add status state
  const [searchStatus, setSearchStatus] = useState("not started");

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
      {/* ------  Navigation Bar CODE: <NavbarComponent /> --------- */}
      <NavbarComponent />

      {/* ------- Header Section ----------*/}

      <HeaderComponent />

      {/* ------- First Two Widgets ------- */}

      {/* <div style={{display: "flex", justifyContent: "space-evenly", padding: "20px", flexWrap: "wrap", gap: "20px"}}>
        <PartsComponentSearch />
        <SecondWidget />
      </div> */}

      {/* ------- Second Two Widgets ------- */}

      <div style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "20px",
        flexWrap: "wrap",
      }}>
        <CreateIndexSection 
          setSearchResults={setSearchResults} 
          setSearchStatus={setSearchStatus}
        />
        <SearchResultsWidget 
          results={searchResults} 
          status={searchStatus}
        />
      </div>

      {/* ----  Footer Component     ----- */}

      <FooterComponent />
    </div>
  );
}

export default Home;
