import React, { useState, useEffect, useRef } from 'react';
import LivrosSrv from '../services/LivrosSrv';

function App() {
  const [livros, setLivros] = useState([])
  useEffect(() => {
    onClickAtualizar(); // ao inicializar execula método para atualizar
  }, []);
  const onClickAtualizar = () => {
    LivrosSrv.listar().then(response => {
      setLivros(response.data);
      console.log("Livros atualizados");
    }).catch(e => {
      console.log("Erro: " + e.message);
    });
  }
}