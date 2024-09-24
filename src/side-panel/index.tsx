import React from 'react';
import ReactDOM from 'react-dom/client';
import '../globals.css';
import App from './app';
import { ThemeProvider } from '@/components/theme-provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
