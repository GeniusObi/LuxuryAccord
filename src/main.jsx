import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { KindeProvider } from '@kinde-oss/kinde-auth-react';
import { UserProvider } from './context/user_context.jsx';
import { ProductsProvider } from './context/products_context.jsx';
import { FilterProvider } from './context/filter_context.jsx';
import { CartProvider } from './context/cart_context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <KindeProvider
    clientId={process.env.KINDE_CLIENTID}
    domain={process.env.KINDE_DOMAIN}
    logoutUri={window.location.origin}
    redirectUri={window.location.origin}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </KindeProvider>
);
