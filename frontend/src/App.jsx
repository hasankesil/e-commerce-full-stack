import HomePage from "./pages/HomePage";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/ShopPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";




function App() {
  return (
    <Routes>
<Route path="/" element={<HomePage/>} />



    </Routes>
  );
}


export default App;