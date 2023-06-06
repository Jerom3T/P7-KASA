import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/index.scss';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
