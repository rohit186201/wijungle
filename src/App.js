import React from 'react';
import './App.css'; 
import AlertFrequency from './components/AlertFrequency';
import AlertsByCategory from './components/AlertsByCategory';
import ProtocolDist from './components/ProtocolDist';
import RevDist from './components/RevDist';
function App() {
  return (
    <div className="App">
      <AlertFrequency />
      <AlertsByCategory />
      <ProtocolDist />
      <RevDist />
    </div>
  );
}

export default App;