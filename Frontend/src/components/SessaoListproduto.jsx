import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SessaoListproduto.scss';

function SessaoListproduto() {
  const [produtos, setProdutos] = useState([]);

  // Função para buscar os produtos do backend
  const fetchProdutos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      setProdutos(response.data);

    } catch (error) {
      console.error('Erro ao buscar os produtos', error);
    }
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  return (
    <div className="tabela-container">
      <h2>Produtos Cadastrados</h2>
      <table className="tabela-produtos">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.name}</td>
              <td>{produto.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SessaoListproduto;
