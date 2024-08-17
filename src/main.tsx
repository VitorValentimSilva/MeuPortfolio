import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';

const rootElement = document.getElementById('root');

if(rootElement){
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  );
} 
else{
  console.error('Elemento com id "root" não encontrado.');
}