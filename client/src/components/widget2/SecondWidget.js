import React from "react";
import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

function SecondWidget() {
  const [partId, setPartId] = useState("");
  const [settings, setSettings] = useState("");
  return (
    <div
      style={{
        width: "400px",
        padding: "40px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Datasheet Search
      </Typography>
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="upload"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Datasheet Upload
        </label>
        <input
          type="file"
          id="upload"
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
          htmlFor="partId"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Search Parameter Settings
        </label>
        <input
          type="text"
          id="partId"
          value={partId}
          onChange={(e) => setPartId(e.target.value)}
          placeholder="Input Settings"
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
          htmlFor="company"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Company
        </label>
        <select
          id="company"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <option value="">Select Company</option>
          <option value="Renesas">Renesas</option>
          <option value="Intel">Intel</option>
          <option value="Samsung">Samsung</option>
        </select>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="settings"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Website Link
        </label>
        <textarea
          id="settings"
          value={settings}
          onChange={(e) => setSettings(e.target.value)}
          placeholder="For example renesas.com"
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

export default SecondWidget;
