import React, { useState } from "react";
import { Slider, Box, Typography } from "@mui/material";

function TopKSliders() {
  const [textTopK, setTextTopK] = useState(2);
  const [imageTopK, setImageTopK] = useState(2);

  const handleTextTopKChange = (event, newValue) => {
    setTextTopK(newValue);
  };

  const handleImageTopKChange = (event, newValue) => {
    setImageTopK(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "white", // Dark background for the container
        borderRadius: "8px",
      }}
    >
      {/* Text Top-K Slider */}
      <Box sx={{ textAlign: "center", color: "black" }}>
        <Typography variant="body1">Text Top-K</Typography>
        <Slider
          value={textTopK}
          onChange={handleTextTopKChange}
          min={1}
          max={10}
          step={1}
          marks
          valueLabelDisplay="auto"
          sx={{ width: 150 }}
        />
      </Box>

      {/* Image Top-K Slider */}
      <Box sx={{ textAlign: "center", color: "black" }}>
        <Typography variant="body1">Image Top-K</Typography>
        <Slider
          value={imageTopK}
          onChange={handleImageTopKChange}
          min={1}
          max={10}
          step={1}
          marks
          valueLabelDisplay="auto"
          sx={{ width: 150 }}
        />
      </Box>
    </Box>
  );
}

export default TopKSliders;
