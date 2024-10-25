import React, { useState } from 'react';
import Login from './Login.jsx'; // Ajuste o caminho se necessário
import Home from './Home.jsx'; // Corrigido para importar Home

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar login

  const handleLogin = () => {
    setIsLoggedIn(true); // Altera o estado para logado
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} /> // Passa a função de login como props
      ) : (
        <Home />
      )}
    </div>
  );
};

export default App;
