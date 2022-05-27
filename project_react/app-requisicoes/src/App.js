import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Menu from './Menu';

const Home = lazy(() => import('./pages/home/Home'));
const ColaboradorCon = lazy(() => import('./pages/colaborador/ColaboradorCon'));
const TipoReq = lazy(() => import('./pages/tipoRequisicao/TipoReqCon'));
const Solicitante = lazy(() => import('./pages/solicitante/SolicitanteCon'));
const Andamento = lazy(() => import('./pages/andamento/AndamentoCon'));

function App() {

  return (
    <BrowserRouter>
      <Menu />

      <Suspense fallback={<div>Carregando ...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colaborador" element={<ColaboradorCon />} />
          <Route path="/tipoRequisicao" element={<TipoReq />} />
          <Route path="/solicitante" element={<Solicitante />} />
          <Route path="/andamento" element={<Andamento />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );

}
export default App;




