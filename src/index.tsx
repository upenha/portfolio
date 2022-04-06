import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Home from './pages/Home';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
