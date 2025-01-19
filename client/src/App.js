import React, { useState } from "react";
import PartsComponentSearch from "./components/widget1/PartsComponentSearch";
import SecondWidget from "./components/widget2/SecondWidget"; // Import the second widget
import SearchWidget from "./components/SearchWidget/SearchWidget";
import CreateIndexSection from "./components/IndexSelection/CreateIndexSelection";
import SearchResultsWidget from "./components/SearchResultsWidget/SearchResultsWidget";
import HeaderComponent from "./components/HeaderCreation/HeaderCreation";
import FooterComponent from "./components/FooterCreation/FooterCreation";

import axios from "axios";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NewPage from "./pages/CustomWidgetDevelopmentPage";
import Home from "./pages/Home";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import NavbarComponent from "./components/NavBar/NavBar";
import NoPage from "./pages/NoPage";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Layout />} />
        <Route path="contact" element={<Contact />} />
        <Route path="newpage" element={<NewPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
