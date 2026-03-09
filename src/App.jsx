import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import HomePage from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Profile from "./pages/profile";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
    <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </CartProvider>
  );
}

export default App;