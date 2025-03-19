import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { x: 10, y: 20 },
  { x: 20, y: 30 },
  { x: 30, y: 50 },
];

const MyScatterPlot = () => (
  <ResponsiveContainer width="100%" height={300}>
    <ScatterChart>
      <XAxis type="number" dataKey="x" />
      <YAxis type="number" dataKey="y" />
      <Tooltip />
      <Scatter data={data} fill="red" />
    </ScatterChart>
  </ResponsiveContainer>
);

export default MyScatterPlot;
