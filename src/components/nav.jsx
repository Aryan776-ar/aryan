import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FiShoppingCart } from "react-icons/fi"; // Cart icon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { cartItems = [] } = useContext(CartContext) || {};
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-black text-white border-b border-neutral-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <Link to="/" className="text-xl font-semibold text-white">
            AppleStore
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-10 text-sm text-gray-300">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>

            <Link to="/shop" className="hover:text-white transition">
              Shop
            </Link>

            <Link to="/about" className="hover:text-white transition">
              About
            </Link>

            <Link to="/contact" className="hover:text-white transition">
              Contact
            </Link>
            <Link to="/accessories" className="hover:text-white transition">
              Accessories
            </Link>

            {/* CART ICON */}
            <Link to="/cart" className="relative hover:text-white transition">
              <FiShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* PROFILE */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-neutral-700 transition"
              >
                P
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-neutral-900 border border-neutral-700 rounded-xl shadow-lg overflow-hidden">
                  <Link
                    to="/profile"
                    className="block px-4 py-3 text-sm text-gray-300 hover:bg-neutral-800 hover:text-white"
                  >
                    Profile
                  </Link>

                  <Link
                    to="/orders"
                    className="block px-4 py-3 text-sm text-gray-300 hover:bg-neutral-800 hover:text-white"
                  >
                    Orders
                  </Link>

                  <Link
                    to="/cart"
                    className="block px-4 py-3 text-sm text-gray-300 hover:bg-neutral-800 hover:text-white relative"
                  >
                    Cart
                    {totalItems > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                        {totalItems}
                      </span>
                    )}
                  </Link>

                  <button className="w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-neutral-800">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-neutral-800 px-6 py-6 space-y-5 text-center text-white">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-gray-400">
            Home
          </Link>

          <Link to="/shop" onClick={() => setIsOpen(false)} className="block hover:text-gray-400">
            Shop
          </Link>

          <Link to="/profile" onClick={() => setIsOpen(false)} className="block hover:text-gray-400">
            Profile
          </Link>

          <Link to="/cart" onClick={() => setIsOpen(false)} className="relative block hover:text-gray-400">
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        
          <Link to="/accessories" onClick={() => setIsOpen(false)} className="block hover:text-gray-400">
            Accessories
          </Link>

        </div>
      )}
    </nav>
  );
}