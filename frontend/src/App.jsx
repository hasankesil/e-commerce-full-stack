import HomePage from "./pages/HomePage";
import React from "react";
import "./App.css";
import ShopPage from "./pages/ShopPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";



function App() {
  return (
    <React.Fragment>

      {/* <HomePage /> */}
      {/* <AuthPage /> */}
      {/* <CartPage /> */}
      {/* <BlogDetailsPage/> */}
      <ProductDetailsPage />
    </React.Fragment>
  );
}


export default App;