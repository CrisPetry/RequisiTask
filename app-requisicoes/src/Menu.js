import React from "react";
import { useNavigate } from "react-router-dom";
import { Menubar } from 'primereact/menubar';

function Menu() {
  let navigate = useNavigate();

  const items = [
    {
      label: 'Home', icon: 'pi pi-home',
      command: () => { navigate("/") }
    },
    {
      label: 'Colaboradores', icon: 'pi pi-id-card',
      command: () => { navigate("/colaboradores") }
    },
    {
      label: 'Atividades', icon: 'pi pi-id-card',
      command: () => { navigate("/atividades") }
    },
    {
      label: 'Solicitantes', icon: 'pi pi-id-card',
      command: () => { navigate("/solicitantes") }
    },
    {
      label: 'Andamentos', icon: 'pi pi-id-card',
      command: () => { navigate("/andamentos") }
    },
    {
      label: 'Tipos de Requisições', icon: 'pi pi-id-card',
      command: () => { navigate("/tipoRequisicoes") }
    },
    {
      label: 'Requisições', icon: 'pi pi-id-card',
      command: () => { navigate("/requisicoes") }
    },
    {
      label: 'Sair', icon: 'pi pi-sign-out',
      command: () => {
        sessionStorage.setItem('token', '');
      },
      url: '/'
    },
  ];

  return (<Menubar model={items} />)
}

export default Menu;