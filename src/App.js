import React from 'react';

function App() {
  // Safe fallback if your env script hasn't loaded yet
  const backgroundColor = window._env_?.COLOR || 'red';
  const environmentName = window._env_?.ENVIRONMENT || 'Development';

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
      <h1>Student Major Project</h1>
      <p>Current Environment: <strong>{environmentName}</strong></p>
    </div>
  );
}

export default App;
