import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Legend, Tooltip } from 'recharts';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const CustomPieChart = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: apiResponse = {} } = useQuery({
    queryKey: ['pie-chart-data'],
    queryFn: async () => {
      const res = await axiosSecure('/resumeCounts');
      return res.data;
    }
  });

  const pieChartData = Object.keys(apiResponse).map(key => ({
    name: key,
    value: apiResponse[key]
  }));


  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-xl">
    <ResponsiveContainer width="100%" aspect={2.0 / 1.0}>
        <PieChart>
          <Pie
            data={pieChartData }
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};


export default CustomPieChart;