import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Q1", value: 300 },
  { name: "Q2", value: 500 },
  { name: "Q3", value: 700 },
];

const MyAreaChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  </ResponsiveContainer>
);

export default MyAreaChart;
