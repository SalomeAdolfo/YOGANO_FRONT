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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<App />} />
          <Route path='/login' element={<SignInPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/pedidos' element={<PedidosPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);