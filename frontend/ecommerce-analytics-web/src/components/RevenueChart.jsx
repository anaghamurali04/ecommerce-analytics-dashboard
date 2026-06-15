import { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function RevenueChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse("/monthly_revenue.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const formattedData = result.data.map((row) => ({
          month: row.month?.slice(0, 7),
          revenue: Number(row.revenue),
          total_orders: Number(row.total_orders)
        }));

        setData(formattedData);
      }
    });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#38bdf8"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default RevenueChart;