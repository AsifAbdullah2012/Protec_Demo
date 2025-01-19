import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import TopKSliders from "./slideCreation";

function CreateIndexSection() {
  const [file, setFile] = useState(null);
  const [apiKey, setApiKey] = useState("");
  const [status, setStatus] = useState("");
  const [searchquery, setSearchQuery] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Capture the selected file
  };

  const handleCreateIndex = () => {
    if (!file || !apiKey) {
      setStatus("Please provide both a file and an API key.");
      return;
    }

    setStatus("Creating index...");

    // Simulate an API call (replace this with actual API logic)
    setTimeout(() => {
      setStatus("Index created successfully!");
    }, 2000);
  };

  const handleSearch = () => {
    console.log("handled completely!");
  };

  return (
    <div
      style={{
        width: "520px",
        padding: "45px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Create New Index
      </Typography>
      <Typography variant="body2" gutterBottom>
        To create a new index, enter your API key and upload a PDF. You can get
        a free API key by signing up.
      </Typography>

      {/* File Upload */}
      <Box sx={{ marginBottom: "15px" }}>
        <label htmlFor="file-upload">
          <Typography variant="body2" sx={{ marginBottom: "5px" }}>
            Upload PDF
          </Typography>
        </label>
        <TextField
          id="file-upload"
          type="file"
          fullWidth
          onChange={handleFileChange}
          inputProps={{ accept: ".pdf" }}
        />
      </Box>

      {/* API Key Input */}
      <Box sx={{ marginBottom: "15px" }}>
        <label htmlFor="api-key">
          <Typography variant="body2" sx={{ marginBottom: "5px" }}>
            API Key
          </Typography>
        </label>
        <TextField
          id="api-key"
          type="password"
          fullWidth
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter your API key"
        />
      </Box>

      {/* Create Index Button */}
      <Button
        variant="contained"
        fullWidth
        onClick={handleCreateIndex}
        sx={{
          marginBottom: "15px",
          color: "white",
          backgroundColor: "black",
          "&:hover": {
            backgroundColor: "darkgray", // Hover effect
          },
        }}
      >
        Create Index
      </Button>

      {/* Status Message */}
      {status && (
        <Typography
          variant="body2"
          sx={{
            color: status.includes("successfully") ? "green" : "red",
          }}
        >
          {status}
        </Typography>
      )}

      {/* API Key Input */}
      <Box sx={{ marginBottom: "15px" }}>
        <label htmlFor="search-query">
          <Typography variant="body2" sx={{ marginBottom: "5px" }}>
            Search Query
          </Typography>
        </label>
        <TextField
          id="searchquery"
          type="text"
          fullWidth
          value={searchquery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="eg. what is the difference A basis and B basis?"
        />
      </Box>
      <TopKSliders />
      <button
        onClick={handleSearch}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          backgroundColor: "green",
        }}
      >
        Search
      </button>
    </div>
  );
}

export default CreateIndexSection;
