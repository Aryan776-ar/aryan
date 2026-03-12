import Navbar from "../components/nav";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import airpods1 from "../assets/air1.jpg";
import airpods2 from "../assets/air2.jpg";
import airpodspro from "../assets/air2pro.jpg";
import airpodsmax from "../assets/airpodsmax1.jpg";
import airtag from "../assets/airtags.jpg";
import earphones from "../assets/earphone.jpg";

export default function Accessories() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); // CartContext

  const accessories = [
    { id: 1, name: "AirPods 1st Gen", price: 19000, image: airpods1 },
    { id: 2, name: "AirPods 2nd Gen", price: 23000, image: airpods2 },
    { id: 3, name: "AirPods Pro", price: 38500, image: airpodspro },
    { id: 4, name: "AirPods Max", price: 95000, image: airpodsmax },
    { id: 5, name: "AirTag 4 Pack", price: 16000, image: airtag },
    { id: 6, name: "Apple Earphones", price: 5500, image: earphones },
  ];

  return (
    <>
      <Navbar />

      <div className="bg-black min-h-screen py-20 px-6">
        <h1 className="text-4xl text-white text-center mb-16">
          Apple Accessories
        </h1>

        <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {accessories.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-900 p-6 rounded-2xl cursor-pointer hover:scale-105 transition-transform"
            >
              <div onClick={() => navigate(`/product/${item.id}`)}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-56 mx-auto object-contain"
                />
                <h3 className="text-white text-lg mt-4">{item.name}</h3>
                <p className="text-gray-400 mb-4">
                  Rs.{item.price.toLocaleString()}
                </p>
              </div>

              {/* Add to Cart button */}
              <button
                onClick={() => addToCart(item)} // <-- correct variable
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:scale-105 transform transition duration-300 shadow-md hover:shadow-xl mt-2"
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