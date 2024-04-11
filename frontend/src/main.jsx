import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import CartProvider from './context/CartProvider.jsx';
import { Layout } from "./layouts/Layout";



ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <CartProvider>
      <Layout>
        <App />
      </Layout>

    </CartProvider>
</BrowserRouter>

  
  
)
