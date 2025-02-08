import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import TopKSliders from "./slideCreation";
import axios from "axios";

import * as pdfjs from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.entry";

function CreateIndexSection() {
  const [file, setFile] = useState(null);
  const [apiKey, setApiKey] = useState("");
  const [status, setStatus] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [response, setResponse] = useState(""); // Stores AI response
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Capture the selected file
  };

  const extractTextFromPDF = async (file) => {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onload = async () => {
        try {
          const pdfData = new Uint8Array(reader.result);

          // Import pdfjs-dist dynamically
          const pdfjsLib = await import("pdfjs-dist");

          pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

          const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
          let text = "";
          for (let i = 0; i < pdf.numPages; i++) {
            const page = await pdf.getPage(i + 1);
            const content = await page.getTextContent();
            text += content.items.map((item) => item.str).join(" ") + "\n";
          }
          resolve(text);
        } catch (error) {
          reject(error);
        }
      };

      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
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

  const handleSearch = async () => {
    if (!searchQuery || !apiKey || !file) {
      setStatus("Please provide a search query, API key, and upload a PDF.");
      return;
    }

    setStatus("Fetching answer...");
    setLoading(true);

    try {
      const extractedText = await extractTextFromPDF(file);
      console.log(apiKey);

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4-turbo", // Change to "gpt-3.5-turbo" if needed
          messages: [
            {
              role: "system",
              content:
                "You are an AI assistant helping with document analysis.",
            },
            {
              role: "user",
              content: `Based on this document:\n${extractedText}\n\n${searchQuery}`,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      setResponse(response.data.choices[0].message.content);
      console.log(response.data.choices[0].message.content);

      setStatus("Search completed.");
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse("Error processing your request. Please check your API key.");
    }

    setLoading(false);
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
          value={searchQuery}
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
