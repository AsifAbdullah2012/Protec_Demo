import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const RiskNavbar = ({ setActiveTab }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* Menu Button for Sliding Navbar */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>

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

      {/* Sliding Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List>
          <ListItem
            button
            onClick={() => {
              setActiveTab("rotAnalysis");
              setDrawerOpen(false);
            }}
          >
            <ListItemText primary="Rot Analysis" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setActiveTab("kyc");
              setDrawerOpen(false);
            }}
          >
            <ListItemText primary="KYC" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setActiveTab("dueDiligence");
              setDrawerOpen(false);
            }}
          >
            <ListItemText primary="Due Diligence" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setActiveTab("riskAnalysis");
              setDrawerOpen(false);
            }}
          >
            <ListItemText primary="Risk Analysis" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default RiskNavbar;
