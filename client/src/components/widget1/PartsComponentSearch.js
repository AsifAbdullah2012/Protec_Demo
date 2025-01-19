import React from "react";
import axios from "axios";
import { Box, TextField, Button, Typography } from "@mui/material";

import { useState } from "react";

function PartsComponentSearch() {
  // States for managing input field values
  const [partId, setPartId] = useState("");
  const [type, setType] = useState("");
  const [company, setCompany] = useState("");
  const [settings, setSettings] = useState("");
  const [keywordId, setKeywordId] = useState("");

  // Function to handle the search action
  const handleSearch = () => {
    console.log("Search initiated with:");
    console.log("Part ID:", partId);
    console.log("Type:", type);
    console.log("Company:", company);
    console.log("Additional Settings:", settings);
    // Add your search logic here
  };

  return (
    <div
      style={{
        width: "400px",
        padding: "45px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Parts and Components Search
      </Typography>
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="partId"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Part/Component ID
        </label>
        <input
          type="text"
          id="partId"
          value={partId}
          onChange={(e) => setPartId(e.target.value)}
          placeholder="Enter Part ID"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="keywordId"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Keyword
        </label>
        <input
          type="text"
          id="keywordId"
          value={keywordId}
          onChange={(e) => setKeywordId(e.target.value)}
          placeholder="POL Voltage Regulator"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="type" style={{ display: "block", marginBottom: "5px" }}>
          Type
        </label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <option value="">Select Type</option>
          <option value="Resistor">Resistor</option>
          <option value="Capacitor">Capacitor</option>
          <option value="Inductor">Inductor</option>
        </select>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="company"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Company
        </label>
        <select
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <option value="">Select Company</option>
          <option value="Renesas">Renesas</option>
          <option value="Samsung">Samsung</option>
          <option value="Intel">Intel</option>
        </select>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="company"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Category
        </label>
        <select
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <option value="">Select Category</option>
          <option value="Cat1">Category1</option>
          <option value="Cat2">Category2</option>
          <option value="Cat3">Category3</option>
        </select>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="settings"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Additional GPT Prompt Settings
        </label>
        <textarea
          id="settings"
          value={settings}
          onChange={(e) => setSettings(e.target.value)}
          placeholder="Enter additional settings..."
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            minHeight: "60px",
          }}
        ></textarea>
      </div>
      <button
        onClick={handleSearch}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Search
      </button>
    </div>
  );
}

export default PartsComponentSearch;
