import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

ReactDOM.render(
  <Router>
    <CartProvider>
      <App />
    </CartProvider>
  </Router>,
  document.getElementById('root')
);
