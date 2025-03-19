import React from "react";
import NavbarComponent from "../components/NavBar/NavBar";
import CsvUploader from "../components/RiskAnalysis/CsvUploader";
import MyLineChart from "../components/RiskAnalysis/LineChart";
import MyBarChart from "../components/RiskAnalysis/BarChart";
import MyPieChart from "../components/RiskAnalysis/PieChart";
import MyScatterPlot from "../components/RiskAnalysis/ScatterPlot";
import MyRadarChart from "../components/RiskAnalysis/RadarChart";
import MyAreaChart from "../components/RiskAnalysis/AreaChart";
import { Grid, Paper, Typography, Container, Box } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data for risk metrics
//TODO replace with the main data -----
const data = [
  { name: "Liquidity", value: 4.5 },
  { name: "Solvency", value: 3.8 },
  { name: "Profitability", value: 2.7 },
  { name: "Cash Flow", value: 4.1 },
  { name: "Market Risk", value: 3.2 },
];

const Risk = () => {
  return (
    <>
      <NavbarComponent />
      <Box
        sx={{
          backgroundColor: "#1976d2", // Blue Material-UI theme color
          color: "white",
          padding: "20px",
          textAlign: "center",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" component="h1">
          📊 Risk Analysis Dashboard
        </Typography>
      </Box>

      <Container maxWidth="lg" style={{ padding: "20px" }}>
        <Grid item xs={12} sm={6} md={2} padding={3}>
          <Paper style={{ padding: "20px", textAlign: "center" }}>
            <CsvUploader />
          </Paper>
        </Grid>

        {/* Section 3 - Three Columns */}
        <Grid container spacing={3} style={{ marginBottom: "20px" }}>
          <Grid item xs={12} sm={4}>
            <Paper style={{ padding: "20px", textAlign: "center" }}>
              <MyLineChart />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper style={{ padding: "20px", textAlign: "center" }}>
              <MyBarChart />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper style={{ padding: "20px", textAlign: "center" }}>
              <MyPieChart />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper style={{ padding: "20px", textAlign: "center" }}>
              <MyScatterPlot />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper style={{ padding: "20px", textAlign: "center" }}>
              <MyRadarChart />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper style={{ padding: "20px", textAlign: "center" }}>
              <MyAreaChart />
            </Paper>
          </Grid>
        </Grid>

        {/* Risk Overview Chart */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h6">Risk Score Overview</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Key Risk Metrics */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h6">Key Risk Metrics</Typography>
            <Typography>• Liquidity Risk: 4.5</Typography>
            <Typography>• Solvency Risk: 3.8</Typography>
            <Typography>• Profitability Risk: 2.7</Typography>
            <Typography>• Cash Flow Risk: 4.1</Typography>
            <Typography>• Market Risk: 3.2</Typography>
          </Paper>
        </Grid>
      </Container>
    </>
  );
};

export default Risk;
