import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const RotAnalysis = () => {
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
        ROT Analysis
      </Typography>
      <TextField
        fullWidth
        label="Data Integration"
        value="Renesas"
        variant="outlined"
        margin="normal"
        InputProps={{ readOnly: true }}
      />
      <TextField
        fullWidth
        label="Identity Verification & Compliance Check"
        value="ISL70001SRH"
        variant="outlined"
        margin="normal"
        InputProps={{ readOnly: true }}
      />
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1">Additional Settings</Typography>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Supply Disruptions"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Demand Variability"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Quality Issues"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Cybersecurity"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Regulatory & Compliance"
          />
        </FormGroup>
        {/*          <ul>
          <li>Supply Disruptions</li>
          <li>Demand Variability</li>
          <li>Quality Issues</li>
          <li>Cybersecurity</li>
          <li>Regulatory & Compliance</li>
        </ul>  */}
      </Box>
    </Box>
  );
};

export default RotAnalysis;
