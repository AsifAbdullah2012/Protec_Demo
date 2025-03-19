import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useEffect, useState } from "react";

const Kyc = () => {
  var Alpha_api = "TBBXF339EBMF61G2";
  const [data, setData] = useState(null);
  //const url = `https://www.alphavantage.co/query?function=ETF_PROFILE&symbol=QQQ&apikey=${Alpha_api}`;

  const url =
    "https://www.alphavantage.co/query?function=CASH_FLOW&symbol=IBM&apikey=${Alpha_api}";

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: { "User-Agent": "fetch-client" },
    })
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Runs once when the component mounts

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

      <TextField
        fullWidth
        label="Documentation Review"
        value="https://www.renesas.com/en/products"
        variant="outlined"
        margin="normal"
        InputProps={{ readOnly: true }}
      />

      {/* ✅ Displaying API Result Correctly */}
      <Typography variant="h6" sx={{ mt: 2 }}>
        ETF Profile:
      </Typography>
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: "10px",
          borderRadius: "5px",
          maxHeight: "200px",
          overflowY: "auto",
          border: "1px solid #ddd",
        }}
      >
        {data ? (
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        ) : (
          <Typography variant="body2">Loading...</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Kyc;
