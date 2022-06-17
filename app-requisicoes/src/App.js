import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Menu from './Menu';
import Login from './pages/login/LoginForm'

const Home = lazy(() => import('./pages/home/Home'));
const ColaboradorCon = lazy(() => import('./pages/colaborador/ColaboradorCon'));

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
          <Route path="/colaborador" element={<ColaboradorCon />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );

}
export default App;
