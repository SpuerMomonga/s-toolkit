import React from 'react';
import ReactDOM from 'react-dom/client';
import '../globals.css';

export function App() {
  return <div>hello, world</div>;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
