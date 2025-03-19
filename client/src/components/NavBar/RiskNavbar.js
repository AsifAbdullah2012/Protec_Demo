import React from "react";
import { AppBar, Toolbar, Button, Container } from "@mui/material";

const RiskNavbar = ({ setActiveTab }) => {
  return (
    <AppBar
      position="static"
      bg="primary"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Toolbar>
        <Button color="inherit" onClick={() => setActiveTab("rotAnalysis")}>
          Rot Analysis
        </Button>
        <Button color="inherit" onClick={() => setActiveTab("kyc")}>
          KYC
        </Button>
        <Button color="inherit" onClick={() => setActiveTab("dueDiligence")}>
          Due Diligence
        </Button>
        <Button color="inherit" onClick={() => setActiveTab("riskAnalysis")}>
          Risk Analysis
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default RiskNavbar;
