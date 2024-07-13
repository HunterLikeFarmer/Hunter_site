import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/tailwind.css'; // Import Tailwind CSS
import './styles/index.css'; // If you have other global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
