import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import getRandomColor from "../../fuctions/getRandomColor";
import selectData from "../../fuctions/selectData";
import './Chart.css'



const Chart = (props) => {
  const json = JSON.parse(props.json)
  const selectedData = selectData(json);
  const mockData = [selectedData.begin, selectedData.end];
  const configs = selectedData.configs;
  
  return (
    <LineChart
      width={1000}
      height={mockData.length * 150}
      data={mockData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend
        layout="vertical"
        iconType="circle"
        align="right"
        verticalAlign="top"
      />
      {configs.map((config, i) => (
        <Line dataKey={config} key={`line-${i}`} stroke={getRandomColor()} />
      ))}
    </LineChart>
  );
};

export default Chart