import React from 'react';
import Plot from 'react-plotly.js';
import { data } from './data';

const RevDistribution = () => {
  const revCounts = data.reduce((acc, curr) => {
    const rev = curr.alert.rev;
    acc[rev] = (acc[rev] || 0) + 1;
    return acc;
  }, {});

  const trace = {
    labels: Object.keys(revCounts),
    values: Object.values(revCounts),
    type: 'pie'
  };

  return (
    <Plot
      data={[trace]}
      layout={{ 
        title: 'Rev Distribution', 
        template: 'plotly_dark',
        paper_bgcolor: '#000', 
        plot_bgcolor: '#001',
      }}
      useResizeHandler
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default RevDistribution;
