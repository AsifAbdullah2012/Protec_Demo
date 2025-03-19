import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Product A", sales: 400 },
  { name: "Product B", sales: 300 },
];

const MyBarChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="sales" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
);

export default MyBarChart;
