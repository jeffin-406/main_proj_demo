import React from 'react';

function App() {
  const config = window._env_ || {
    APP_ENV: "Local",
    COLOR: "gray",
    APP_NAME: "Default Project"
  };

  const style = {
    backgroundColor: config.COLOR === 'RED' ? '#e74c3c' : '#2ecc71',
    height: '100vh', color: 'white', display: 'flex', 
    flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
  };

  return (
    <div style={style}>
      <h1>{config.APP_NAME}</h1>
      <h2>Environment: {config.APP_ENV}</h2>
    </div>
  );
}
export default App;
