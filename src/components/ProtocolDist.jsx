import React from 'react';
import Plot from 'react-plotly.js';
import { data } from './data';

const ProtocolDistribution = () => {
  const protoCounts = data.reduce((acc, curr) => {
    const proto = curr.proto;
    acc[proto] = (acc[proto] || 0) + 1;
    return acc;
  }, {});

  const trace = {
    labels: Object.keys(protoCounts),
    values: Object.values(protoCounts),
    type: 'pie'
  };

  return (
    <Plot
      data={[trace]}
      layout={{ 
        title: 'Protocol Distribution', 
        template: 'plotly_dark',
        paper_bgcolor: '#000', 
        plot_bgcolor: '#001',
      }}
      useResizeHandler
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default ProtocolDistribution;
