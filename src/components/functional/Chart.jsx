import React, { PureComponent } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'To Do', value: 400 },
  { name: 'In Progress', value: 300 },
  { name: 'In Review', value: 300 },
  { name: 'Completed', value: 200 },
  { name: 'Reject', value: 278 }
];


export default class Chart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
