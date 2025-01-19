import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Kyc = () => {
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
        KYC
      </Typography>
      <Button
        fullWidth
        variant="contained"
        startIcon={<CloudUploadIcon />}
        sx={{ mb: 2 }}
      >
        Data-sheet upload
      </Button>
      <TextField
        fullWidth
        label="Parameters/Settings"
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Financial and Risk Assessment"
        value="Renesas"
        variant="outlined"
        margin="normal"
        InputProps={{ readOnly: true }}
      />
      <TextField
        fullWidth
        label="Documentation Review"
        value="https://www.renesas.com/en/products"
        variant="outlined"
        margin="normal"
        InputProps={{ readOnly: true }}
      />
    </Box>
  );
};

export default Kyc;
