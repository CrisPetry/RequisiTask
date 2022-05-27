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
      label: 'Colaboradores', icon: 'pi pi-id-users',
      command: () => { navigate("/colaborador") }
    },

    {
      label: 'Solicitantes', icon: 'pi pi-id-card',
      command: () => { navigate("/solicitantes") }
    },

    {
      label: 'TiposReq', icon: 'pi pi-id-star',
      command: () => { navigate("/tiposreq") }
    },

    {
      label: 'Andamento', icon: 'pi pi-id-book',
      command: () => { navigate("/andamento") }
    },

    {
      label: 'Sair', icon: 'pi pi-fw pi-power-off'
    }
  ];

  return (<Menubar model={items} />)
}

export default Menu;