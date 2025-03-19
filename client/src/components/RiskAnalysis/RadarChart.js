import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { skill: "Speed", value: 80 },
  { skill: "Strength", value: 60 },
  { skill: "Agility", value: 90 },
];

const MyRadarChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <RadarChart data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="skill" />
      <Radar
        dataKey="value"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  </ResponsiveContainer>
);

export default MyRadarChart;
