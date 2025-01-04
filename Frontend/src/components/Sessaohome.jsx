import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alerta from './Alerta';
import '../components/Sessaohome.scss';


function Sessaohome() {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [produtos, setProdutos] = useState([]);
  const [alerta, setAlerta] = useState({show: false, message:'' })
  const navigate = useNavigate();


  // Função para buscar os produtos do backend
  const fetchProdutos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products')
      setProdutos(response.data);
    } catch (error) {
      console.error('Erro ao buscar os produtos', error);
    }
  };

  // Função para cadastrar um produto
  const handleSubmit = async (e) => {
    e.preventDefault();
    const valorNumerico = parseFloat(valor);
    if (isNaN(valorNumerico)) {
      setAlerta({ show: true, message: 'Valor inválido! Por favor, insira um número válido.' });
      return;
   }


    const novoProduto = { name: nome, value: parseFloat(valor) };
    try {
      await axios.post('http://localhost:5000/api/products', novoProduto);
      fetchProdutos(); 
      setNome('');
      setValor('');
      setAlerta({ show: true, message: 'Produto cadastrado com sucesso!'});
    } catch (error) {
      console.error('Erro ao cadastrar o produto', error);
    }
  };

  useEffect(() => {
    fetchProdutos(); 
  }, []);

  return (
    <section className="container">
      <p className="title-form">Cadastro de Produtos</p>
      <form className="estile-form" onSubmit={handleSubmit}>
        <label htmlFor="m-nome">Produto</label>
        <input
          id="m-nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Insira o nome do produto"
          required
        />
        <label htmlFor="m-valor">Valor</label>
        <input
          id="m-valor"
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value.replace(/[^0-9.]/g, ''))}
          placeholder="Insira o valor do produto"
          required
        />
        <button id="btnSalvar" type="submit">Salvar</button>
        {alerta.show && <Alerta mensagem={alerta.message} onClose={() => setAlerta({ show: false, message: '' })} />}

      </form>
    </section>
  );
}
export default Sessaohome;
