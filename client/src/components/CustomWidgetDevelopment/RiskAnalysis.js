import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

const RiskAnalysis = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <Button variant="contained" onClick={() => navigate("/risk")}>
        RiskAnalysis
      </Button>
    </Box>
  );
};

export default RiskAnalysis;
