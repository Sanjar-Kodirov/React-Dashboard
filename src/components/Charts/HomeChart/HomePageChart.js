import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const HomePageChart = ({ title, data, dataKey, grid }) => {
  return (
    <div>
      <ResponsiveContainer width={"99%"} height={500}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke />
          <YAxis />
          <Tooltip stroke="#333" />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#017EFA"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#30D987" />
          <Line type="monotone" dataKey="dv" stroke="#FD1F9B" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HomePageChart;
