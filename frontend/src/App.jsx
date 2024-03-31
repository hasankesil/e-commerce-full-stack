import HomePage from "./pages/HomePage";
import React from "react";
import "./App.css";
import ShopPage from "./pages/ShopPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";


function App() {
  return (
    <React.Fragment>

      {/* <HomePage /> */}
      {/* <AuthPage /> */}
      <CartPage />
    </React.Fragment>
  );
}


export default App;