import HomePage from "./pages/HomePage";
import React from "react";
import "./App.css";
import ShopPage from "./pages/ShopPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";


function App() {
  return (
    <React.Fragment>

      {/* <HomePage /> */}
      {/* <AuthPage /> */}
      {/* <CartPage /> */}
      <BlogDetailsPage/>
    </React.Fragment>
  );
}


export default App;