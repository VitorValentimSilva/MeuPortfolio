import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import { ThemeProvider } from 'styled-components';
import EstilosGlobais from './components/EstilosGlobais';
import { temaPadrao } from './theme';

const rootElement = document.getElementById('root');

if(rootElement){
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider theme={temaPadrao}>
        <EstilosGlobais />
        <AppRoutes />
      </ThemeProvider>
    </React.StrictMode>
  );
} 
else{
  console.error('Elemento com id "root" não encontrado.');
}