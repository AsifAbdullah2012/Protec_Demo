import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const DueDiligence = () => {
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
      <Typography variant="h6" textAlign="center" gutterBottom>
        Due Diligence
      </Typography>
      <Button
        fullWidth
        variant="contained"
        startIcon={<CloudUploadIcon />}
        sx={{ mb: 2 }}
      >
        Data-upload
      </Button>
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1">Parameters/Settings</Typography>
        <ul>
          <li>Financial and Credit Analysis</li>
          <li>Operational Due Diligence</li>
          <li>Data Protection</li>
          <li>(ESG) Compliance</li>
        </ul>
      </Box>
      <TextField
        fullWidth
        label="Operational Due Diligence"
        value="Renesas"
        variant="outlined"
        margin="normal"
        InputProps={{ readOnly: true }}
      />
      <Button
        fullWidth
        variant="outlined"
        startIcon={<CloudUploadIcon />}
        sx={{ mt: 2 }}
      >
        Additional Data-upload
      </Button>
    </Box>
  );
};

export default DueDiligence;
