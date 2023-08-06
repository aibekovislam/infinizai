import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './components/Navbar';
import MainLayout from './layout/MainLayout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainLayout>
      <Navbar/>
      <App />
    </MainLayout>
  </React.StrictMode>
);
