import HomePage from "./pages/HomePage";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/ShopPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Blogs from "./components/Blogs/Blogs";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CategoryPage from "./pages/admin/Categories/CategoryPage";
import AdminUserPage from "./pages/admin/AdminUserPage";





function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} />
      <Route path="/admin/*">
        <Route path="users" element={<AdminUserPage />} />
        <Route path="categories" element={<CategoryPage />} />
      </Route>





    </Routes>
  );
}


export default App;