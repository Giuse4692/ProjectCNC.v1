import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';

const App = () => {
  const [token, setToken] = useState(null);

  const handleLogin = (token) => {
    setToken(token);
  };

  return (
    <div>
      {!token ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <div>Welcome! You are logged in.</div>
      )}
    </div>
  );
};

export default App;
