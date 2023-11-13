import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import { AuthProvider } from './contexts/AuthProvider';
import { ToastContainer } from 'react-toastify';
import PedidosPage from './pages/PedidosPage';
import ReactGA from 'react-ga'
import AdminProtectedRoutes from './utils/AdminProtectedRoutes';
import ShowPedidos from './pages/ShowPedidos';
import IsLoggedUser from './utils/IsLoggedUser';
import DetallePedido from './pages/DetallePedido';
import '../src/styles/PedidosStyles.css'
import MisPedidosPage from './pages/MisPedidosPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
ReactGA.initialize('6353945940')
root.render(
  <React.StrictMode>
    <ToastContainer />
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<App />} />
          <Route path='/login' element={<SignInPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route element={<AdminProtectedRoutes />}>
            <Route path='/pedidos/admin' element={<ShowPedidos />} />
          </Route>
          <Route element={<IsLoggedUser />}>
            <Route path='/mis/pedidos' element={<MisPedidosPage />} />
            <Route path='/pedidos' element={<PedidosPage />} />
            <Route path='/pedido/:id' element={<DetallePedido />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);