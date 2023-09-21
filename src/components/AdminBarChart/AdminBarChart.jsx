import React from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, ResponsiveContainer, Cell } from 'recharts';

const AdminBarChart = () => {
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF4E50', '#FC913A'];

  const data = [
    { month: 'Jan', sales: 150 },
    { month: 'Feb', sales: 200 },
    { month: 'Mar', sales: 180 },
    { month: 'Apr', sales: 220 },
    { month: 'May', sales: 250 },
    { month: 'Jun', sales: 280 },
    { month: 'Jul', sales: 300 },
    { month: 'Aug', sales: 270 },
    { month: 'Sep', sales: 230 },
    { month: 'Oct', sales: 260 },
    { month: 'Nov', sales: 240 },
    { month: 'Dec', sales: 280 },
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="w-full bg-white rounded-lg shadow-xl">
    <ResponsiveContainer width="100%" aspect={2.0 / 1.0}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdminBarChart;

