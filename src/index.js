import App from './App.1';
import { CartProvider } from './CartContext';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
  rootElement
);
