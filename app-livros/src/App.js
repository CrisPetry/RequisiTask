import './App.css';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import LivrosList from './LivrosList';
import LivrosForm from './LivrosForm';
import React, { useState, useEffect, useRef } from 'react';
import LivrosSrv from './services/LivrosSrv.js';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Toast } from 'primereact/toast';

function App() {
  const toastRef = useRef();
  const [livros, setLivros] = useState([]);
  useEffect(() => {
    onClickAtualizar(); //ao inicializar executa o método para atualizar
  }, []);

  const onClickAtualizar = async () => {
    LivrosSrv.listar().then(resp => {
      setLivros(resp.data);
      console.log(resp.data);
    }).catch(err => {
      console.log("erro:" + err.message);
    });
  };

  const initialState = { id: null, titulo: '', genero: '', autor: '', quantidade: '', precoUn: '' }
  const [livro, setLivro] = useState(initialState)
  const [editando, setEditando] = useState(false)
  const inserir = () => {
    setLivro(initialState);
    setEditando(true);
  }

  const salvar = () => {
    if (livro._id == null) {
      LivrosSrv.incluir(livro).then(response => {
        setEditando(false);
        onClickAtualizar();
        toastRef.current.show({ severity: 'success', summary: 'Salvou', life: 2000 });
      })
        .catch(e => {
          toastRef.current.show({ severity: 'error', summary: e.message, life: 4000 });
        });
    } else {
      LivrosSrv.alterar(livro).then(response => {
        setEditando(false);
        onClickAtualizar();
        toastRef.current.show({ severity: 'success', summary: 'Salvou', life: 2000 });
      })
        .catch(e => {
          toastRef.current.show({ severity: 'error', summary: e.message, life: 4000 });
        });
    }
  }

  const cancelar = () => {
    console.log('Cancelou..');
    setEditando(false);
  }

  const editar = (id) => {
    setLivro(livros.filter((livro) => livro._id === id)[0]);
    setEditando(true);
  }

  const excluir = (_id) => {
    confirmDialog({
      message: 'Excluir registro?',
      header: 'Confirmação',
      icon: 'pi pi-spin pi-spinner',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptClassName: 'p-button-danger',
      accept: () => excluirConfirm(_id)
    });
  }

  const excluirConfirm = (_id) => {
    LivrosSrv.excluir(_id).then(response => {
      onClickAtualizar();
      toastRef.current.show({
        severity: 'success',
        summary: 'Excluído',
        life: 2000
      });
    })
      .catch(e => {
        toastRef.current.show({
          severity: 'error',
          summary: e.message,
          life: 4000
        });
      });
  }



  if (!editando) {
    return (
      <div className="App">
        <ConfirmDialog />
        <Toast ref={toastRef} />
        <LivrosList livros={livros} onClickAtualizar={onClickAtualizar}
          inserir={inserir} editar={editar} excluir={excluir} />
      </div>
    )
  } else {
    <Toast ref={toastRef} />
    return (
      <div className="App">
        <Toast ref={toastRef} />
        <LivrosForm livro={livro} setLivro={setLivro} salvar={salvar} cancelar={cancelar} />
      </div>
    )
  }
}

export default App;