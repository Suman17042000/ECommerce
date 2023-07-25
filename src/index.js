import React from 'react';
import ReactDOM from 'react-dom/client';
import './Component/index.css';
import App from './Component/App';
import reportWebVitals from './reportWebVitals';
import {Context} from './Component/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Context>
    <App />
   </Context>
  
);
reportWebVitals();
