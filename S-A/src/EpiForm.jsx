import React, { useState } from 'react';
import api from '../api.js';

function EpiForm() {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [validade, setValidade] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoEpi = { nome, categoria, quantidade, validade };
    try {
      await api.post('/epis', novoEpi);
      alert('EPI cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar o EPI:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome do EPI" required />
      <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} placeholder="Categoria" required />
      <input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} placeholder="Quantidade" required />
      <input type="date" value={validade} onChange={(e) => setValidade(e.target.value)} placeholder="Data de Validade" required />
      <button type="submit">Cadastrar EPI</button>
    </form>
  );
}

export default EpiForm;
