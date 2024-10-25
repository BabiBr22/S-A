import React, { useState } from 'react';
import './HistoricoEPIs.css'; // Estilo específico para o histórico de EPIs

const HistoricoEPIs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="header">
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Ícone do menu sanduíche */}
        </div>
        <div className="user-photo">
        <img 
            src="https://img.freepik.com/fotos-gratis/fundo_53876-32175.jpg" 
            alt="Perfil" 
            className="profile-picture" 
          />
          <span className="username">Nome do Usuário</span>
        </div>
      </header>
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <h3>Menu</h3>
          <ul>
            <li>Histórico de EPIs</li>
            <li>Histórico de Funcionários</li>
            <li>Registro de EPIs</li>
            <li>Registro de Funcionários</li>
          </ul>
        </div>
      </div>
      <div className="content">
        <h1>Histórico de EPIs</h1>
        {/* Aqui você pode adicionar a tabela ou a lista com os dados do histórico de EPIs */}
      </div>
    </div>
  );
};

export default HistoricoEPIs;
