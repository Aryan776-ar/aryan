import Navbar from "../components/nav";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

// Macbook Images
import macbookair from "../assets/macbookair.jpg";
import macbookpro from "../assets/macbookpro.jpg";

// Accessories Images
import airpods from "../assets/airpods.jpg";
import watch from "../assets/watch.jpg";
import charger from "../assets/charger.jpg";
import keyboard from "../assets/keyboard.jpg";

export default function Accessories() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  // Macbook Products
  const macbooks = [
    {
      id: 101,
      name: "MacBook Air M2",
      price: 1199,
      image: macbookair,
    },
    {
      id: 102,
      name: "MacBook Pro M3",
      price: 1999,
      image: macbookpro,
    },
  ];

  // Accessories Products
  const accessories = [
    {
      id: 201,
      name: "AirPods Pro",
      price: 249,
      image: airpods,
    },
    {
      id: 202,
      name: "Apple Watch Series 9",
      price: 399,
      image: watch,
    },
    {
      id: 203,
      name: "Apple MagSafe Charger",
      price: 49,
      image: charger,
    },
    {
      id: 204,
      name: "Apple Magic Keyboard",
      price: 99,
      image: keyboard,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="bg-black min-h-screen py-20 px-6">

        {/* Macbook Section */}
        <h1 className="text-4xl text-white text-center mb-10">
          MacBooks
        </h1>

        <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-20">
          {macbooks.map((product) => (
            <div
              key={product.id}
              className="bg-neutral-900 p-6 rounded-2xl cursor-pointer hover:scale-105 transition-transform"
            >
              <div onClick={() => navigate(`/product/${product.id}`)}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-56 mx-auto object-contain"
                />
                <h3 className="text-white text-lg mt-4">{product.name}</h3>
                <p className="text-gray-400 mb-4">${product.price}</p>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="w-full border border-white text-white py-2 rounded-full hover:bg-white hover:text-black mt-2"
              >
                Add to Bag
              </button>
            </div>
          ))}
        </div>

        {/* Accessories Section */}
        <h1 className="text-4xl text-white text-center mb-10">
          Apple Accessories
        </h1>

        <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {accessories.map((product) => (
            <div
              key={product.id}
              className="bg-neutral-900 p-6 rounded-2xl cursor-pointer hover:scale-105 transition-transform"
            >
              <div onClick={() => navigate(`/product/${product.id}`)}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-56 mx-auto object-contain"
                />
                <h3 className="text-white text-lg mt-4">{product.name}</h3>
                <p className="text-gray-400 mb-4">${product.price}</p>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="w-full border border-white text-white py-2 rounded-full hover:bg-white hover:text-black mt-2"
              >
                Add to Bag
              </button>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}