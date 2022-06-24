import React from "react";
import { useNavigate } from "react-router-dom";
import { Menubar } from 'primereact/menubar';
import './styles/login.css';
import './styles/1000px.css';
import './styles/1200px.css';
import './styles/1600px.css';
import './styles/1900px.css';

function Menu() {
  let navigate = useNavigate();

  const items = [
    {
      label: 'Home', icon: 'pi pi-home',
      command: () => { navigate("/") }
    },
    {
      label: 'Usuários', icon: 'pi pi-users',
      items: [
        {
          label: 'Colaboradores', icon: 'pi pi-user',
          command: () => { navigate("/colaboradores") }
        },
        {
          label: 'Solicitantes', icon: 'pi pi-user-plus',
          command: () => { navigate("/solicitantes") }
        },
      ]
    },
    {
      label: 'Consultas', icon: 'pi pi-fw pi-ticket',
      items: [
        {
          label: 'Status', icon: 'pi pi-chart-bar',
          command: () => { navigate("/andamentos") }
        },
        {
          label: 'Atividades', icon: 'pi pi-chart-line',
          command: () => { navigate("/atividades") }
        },
      ]
    },

    {
      label: 'Pedidos', icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'Requisições', icon: 'pi pi-tags',
          command: () => { navigate("/requisicoes") }
        },
        {
          label: 'Tipos de Requisição', icon: 'pi pi-tag',
          command: () => { navigate("/tipoRequisicoes") }
        },
      ]
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