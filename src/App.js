import React from 'react';

function App() {
  // Updated to match your .env file keys exactly
  const backgroundColor = window._env_?.COLOR || 'red';
  const environmentName = window._env_?.APP_ENV || 'Development';
  const applicationName = window._env_?.APP_NAME || 'Student Major Project';

  const styles = {
    backgroundColor: backgroundColor,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'sans-serif'
  };

  return (
    <div style={styles}>
      {/* Now your Title is dynamic too! */}
      <h1>{applicationName}</h1> 
      <p>Current Environment: <strong>{environmentName}</strong></p>
    </div>
  );
}

export default App;
