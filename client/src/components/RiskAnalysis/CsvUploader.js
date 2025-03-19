import React, { useState } from "react";
import {
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Papa from "papaparse";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { std } from "mathjs";

const formatYAxis = (value) => {
  if (value >= 1e9) return `$${(value / 1e9).toFixed(1)}B`; // Billions
  if (value >= 1e6) return `$${(value / 1e6).toFixed(1)}M`; // Millions
  if (value <= -1e9) return `-$${Math.abs(value / 1e9).toFixed(1)}B`; // Negative Billions
  if (value <= -1e6) return `-$${Math.abs(value / 1e6).toFixed(1)}M`;
  return `$${value.toLocaleString()}`;
};

const formatXAxis = (tickItem) => {
  return tickItem.split(" ")[0]; // Extracts only "YYYY-MM-DD"
};

const CsvUploader = () => {
  const [csvData, setCsvData] = useState([]);
  const [csvRisk, setRiskData] = useState([]);
  const [riskMetricsVector, setRiskMetrics] = useState({});

  // Handle File Upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Parse CSV file using PapaParse
    Papa.parse(file, {
      complete: (result) => {
        setCsvData(result.data);
        console.log("CSV Data:", result.data); // Display parsed data in console
      },
      header: true,
      skipEmptyLines: true,
    });
  };

  // Risk Metrics
  // Compute Key Risk Metrics
  //FIXME error in calculation the Risk matrics
  const computeRiskMetricsVector = () => {
    const totalCurrentAssets = csvData.reduce(
      (sum, row) => sum + Number(row.totalCurrentAssets || 0),
      0
    );
    const totalCurrentLiabilities = csvData.reduce(
      (sum, row) => sum + Number(row.totalCurrentLiabilities || 1),
      0
    );
    const totalLiabilities = csvData.reduce(
      (sum, row) => sum + Number(row.totalLiabilities || 0),
      0
    );
    const totalShareholderEquity = csvData.reduce(
      (sum, row) => sum + Number(row.totalShareholderEquity || 1),
      0
    );
    const totalRevenue = csvData.reduce(
      (sum, row) => sum + Number(row.totalRevenue || 1),
      0
    );
    const netIncome = csvData.reduce(
      (sum, row) => sum + Number(row.netIncome_x || 0),
      0
    );

    const operatingCashflow = csvData.map((row) =>
      Number(row.operatingCashflow || 0)
    );
    const reportedEPS = csvData.map((row) => Number(row.reportedEPS || 0));
    const estimatedEPS = csvData.map((row) => Number(row.estimatedEPS || 1));

    // Fix standard deviation calculation
    const cashFlowRisk = std(operatingCashflow);
    const marketRisk = std(
      reportedEPS.map(
        (val, i) => ((val - estimatedEPS[i]) / estimatedEPS[i]) * 100
      )
    );

    const liquidityRisk = totalCurrentAssets / totalCurrentLiabilities;
    const solvencyRisk = totalLiabilities / totalShareholderEquity;
    const profitabilityRisk = (netIncome / totalRevenue) * 100;

    setRiskMetrics({
      liquidityRisk: liquidityRisk.toFixed(2),
      solvencyRisk: solvencyRisk.toFixed(2),
      profitabilityRisk: profitabilityRisk.toFixed(2),
      cashFlowRisk: cashFlowRisk.toFixed(2),
      marketRisk: marketRisk.toFixed(2),
    });
  };

  // Risk Analysis Computations
  const computeRiskMetrics = () => {
    return csvData.map((row) => ({
      fiscalDateEnding: row.fiscalDateEnding,
      debt_to_equity:
        Number(row.totalLiabilities) / Number(row.totalShareholderEquity),
      current_ratio:
        Number(row.totalCurrentAssets) / Number(row.totalCurrentLiabilities),
      net_profit_margin:
        (Number(row.netIncome_x) / Number(row.totalRevenue)) * 100,
      earnings_surprise_percentage:
        ((Number(row.reportedEPS) - Number(row.estimatedEPS)) /
          Number(row.estimatedEPS)) *
        100,
    }));
  };

  const riskMetrics = computeRiskMetrics();

  const yMin = Math.min(...csvData.map((d) => Number(d.netIncome_x))) * 1.1; // Set lower limit 10% below min
  const yMax = Math.max(...csvData.map((d) => Number(d.netIncome_x))) * 1.1; // Set upper limit 10% above max

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Typography variant="h5">Upload a CSV File</Typography>

      {/* Hidden Input Field for File Upload */}
      <input
        accept=".csv"
        type="file"
        onChange={handleFileUpload}
        style={{ display: "none" }}
        id="upload-button"
      />

      {/* Upload Button */}
      <label htmlFor="upload-button">
        <Button
          variant="contained"
          color="primary"
          component="span"
          startIcon={<CloudUploadIcon />}
        >
          Upload CSV
        </Button>
      </label>

      {/* Display CSV Data in a Beautiful Table */}
      {csvData.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <Typography variant="h6">CSV Data Preview</Typography>
          <TableContainer
            component={Paper}
            style={{
              maxHeight: 400,
              overflow: "auto",
              border: "1px solid #ddd",
            }}
          >
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {Object.keys(csvData[0]).map((key, index) => (
                    <TableCell
                      key={index}
                      style={{ fontWeight: "bold", background: "#f0f0f0" }}
                    >
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {csvData.slice(0, 10).map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {Object.values(row).map((value, colIndex) => (
                      <TableCell key={colIndex}>{value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Display Key Risk Metrics */}
          <div
            style={{
              marginTop: "20px",
              textAlign: "left",
              padding: "10px",
              background: "#f4f4f4",
              borderRadius: "8px",
            }}
          >
            <Typography variant="h6">Key Risk Metrics</Typography>
            {/*  FIXME  */}
            <Typography variant="subtitle2">
              • Liquidity Risk: 4.5
              {/*iskMetricsVector.liquidityRisk*/}
            </Typography>
            <Typography variant="subtitle2">
              • Solvency Risk: 3.8
              {/*riskMetricsVector.solvencyRisk*/}
            </Typography>
            <Typography variant="subtitle2">
              • Profitability Risk: 2.7
              {/*riskMetricsVector.profitabilityRisk*/}
            </Typography>
            <Typography variant="subtitle2">
              • Cash Flow Risk: 4.1
              {/*riskMetricsVector.cashFlowRisk*/}
            </Typography>
            <Typography variant="subtitle2">
              • Market Risk: 3.2
              {/*riskMetricsVector.marketRisk*/}
            </Typography>
          </div>

          {/* Line Chart for Revenue vs. Cost */}
          <Typography variant="h6" style={{ marginTop: "20px" }}>
            Revenue vs. Cost
          </Typography>
          <ResponsiveContainer width="100%" height={500}>
            <LineChart data={csvData.slice(0, 62)}>
              <XAxis dataKey="fiscalDateEnding" tickFormatter={formatXAxis} />
              <YAxis tickFormatter={formatYAxis} />
              <Tooltip formatter={(value) => formatYAxis(value)} />
              <Line type="monotone" dataKey="totalRevenue" stroke="#8884d8" />
              <Line type="monotone" dataKey="costOfRevenue" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>

          {/* Bar Chart for Net Income */}
          <Typography variant="h6" style={{ marginTop: "20px" }}>
            Net Income Over Time
          </Typography>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={csvData.slice(0, 62)}>
              <XAxis dataKey="fiscalDateEnding" tickFormatter={formatXAxis} />
              <YAxis tickFormatter={formatYAxis} domain={[yMin, yMax]} />
              <Tooltip formatter={(value) => formatYAxis(value)} />
              <Bar dataKey="netIncome_x" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
      {/* Display Risk Analysis Charts */}
      {riskMetrics.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <Typography variant="h6">Debt-to-Equity Ratio</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Indicates the financial leverage of the company (higher values mean
            more debt risk)
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={riskMetrics}>
              <XAxis dataKey="fiscalDateEnding" tickFormatter={formatXAxis} />
              <YAxis domain={[0, "auto"]} />
              <Tooltip />
              <Bar dataKey="debt_to_equity" fill="#ff7300" />
            </BarChart>
          </ResponsiveContainer>

          <Typography variant="h6">Current Ratio</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Indicates liquidity (values below 1 suggest risk of short-term
            financial distress)
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={riskMetrics}>
              <XAxis dataKey="fiscalDateEnding" tickFormatter={formatXAxis} />
              <YAxis domain={[0, "auto"]} />
              <Tooltip />
              <Line type="monotone" dataKey="current_ratio" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>

          <Typography variant="h6">Net Profit Margin (%)</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Shows profitability (negative values indicate losses)
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={riskMetrics}>
              <XAxis dataKey="fiscalDateEnding" tickFormatter={formatXAxis} />
              <YAxis domain={[0, "auto"]} />
              <Tooltip />
              <Bar dataKey="net_profit_margin" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>

          <Typography variant="h6">Earnings Surprise (%)</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Measures how much actual earnings differ from estimated earnings.
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={riskMetrics}>
              <XAxis dataKey="fiscalDateEnding" tickFormatter={formatXAxis} />
              <YAxis domain={[0, "auto"]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="earnings_surprise_percentage"
                stroke="#d62728"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default CsvUploader;
