// DO NOT RENDER PII – use aggregate hooks only
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useAnonymizedData } from '../context/AnonymizedDataContext';

function GpaTrendChart() {
  const { gpaTrends } = useAnonymizedData();

  const formatTooltip = (value, name) => {
    if (name === 'avgGpa') {
      return [value.toFixed(2), 'Average GPA'];
    }
    return [value, name];
  };

  return (
    <div className="bg-secondary border border-primary p-6">
      <h3 className="text-xl font-display font-medium text-primary mb-6">
        5-Year GPA Trends
      </h3>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={gpaTrends}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis 
              dataKey="year" 
              stroke="#6b7280"
              style={{ fontFamily: 'Crimson Text, serif' }}
            />
            <YAxis 
              domain={[2.5, 4.0]}
              tickFormatter={(value) => value.toFixed(1)}
              stroke="#6b7280"
              style={{ fontFamily: 'Crimson Text, serif' }}
            />
            <Tooltip 
              formatter={formatTooltip}
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '0px',
                fontFamily: 'Crimson Text, serif'
              }}
            />
            <Legend 
              wrapperStyle={{ fontFamily: 'Crimson Text, serif' }}
            />
            <Line 
              type="monotone" 
              dataKey="avgGpa" 
              stroke="#2c2c2c" 
              strokeWidth={2}
              dot={{ fill: '#2c2c2c', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#2c2c2c', strokeWidth: 2, fill: '#ffffff' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 text-sm text-secondary">
        <p>Average GPA calculated across all enrolled students by academic year.</p>
      </div>
    </div>
  );
}

export default GpaTrendChart;