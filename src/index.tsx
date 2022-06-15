import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import GlobalStyle from './styles/globalStyle'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>
);

