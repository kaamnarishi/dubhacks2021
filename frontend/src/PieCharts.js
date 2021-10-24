import React from 'react';
import { PieChart, Pie, Cell} from 'recharts';


export function PieCharts(props) {
  // Sample data
  const GoogleWA = [
    {type: 'Total Spending', amount: .45},
    {type: 'Total Saving', amount: .40},
    {type: 'Leftover', amount: .15}
  ];

  const COLORS = ['#635DDF', '#D26236', '#83DDD4'];

  return (
    <PieChart width={600} height={600}>
      <Pie data={GoogleWA} dataKey="amount" outerRadius={200} fill="#8F8AF8, green, red">
        {GoogleWA.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}



