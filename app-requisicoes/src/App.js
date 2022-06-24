import './styles/login.css';
import './styles/1000px.css';
import './styles/1200px.css';
import './styles/1600px.css';
import './styles/1900px.css';
import "primereact/resources/themes/saga-blue/theme.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Menu';
import Login from './pages/login/LoginForm';

const Home = lazy(() => import('./pages/home/Home'));
const ColaboradorCon = lazy(() => import('./pages/colaborador/ColaboradorCon'));
const SolicitanteCon = lazy(() => import('./pages/solicitante/SolicitanteCon'));
const TipoRequisicaoCon = lazy(() => import('./pages/tipoRequisicoes/TipoRequisicaoCon'));
const RequisicaoCon = lazy(() => import('./pages/requisicao/RequisicaoCon'));
const AtividadeCon = lazy(() => import('./pages/atividades/AtividadeCon'));
const AndamentoCon = lazy(() => import('./pages/andamento/AndamentoCon'));

function App() {
  const [token, setToken] = useState([])
  useEffect(() => {
    setToken(sessionStorage.getItem('token'));
  }, []);
  if (!token || token <= '') {
    return <Login />
  }
  return (
    <BrowserRouter>
      <Menu />
      <Suspense fallback={<div>Carregando ...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colaboradores" element={<ColaboradorCon />} />
          <Route path="/solicitantes" element={<SolicitanteCon />} />
          <Route path="/tipoRequisicoes" element={<TipoRequisicaoCon />} />
          <Route path="/requisicoes" element={<RequisicaoCon />} />
          <Route path="/atividades" element={<AtividadeCon />} />
          <Route path="/andamentos" element={<AndamentoCon />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );

}
export default App;
