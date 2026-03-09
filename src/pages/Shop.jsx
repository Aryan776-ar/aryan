import Navbar from "../components/nav";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import phone14 from "../assets/14.jpg";
import phone15 from "../assets/15.jpg";
import phone9 from "../assets/9s.jpg";
import phoneair from "../assets/air.jpg";
import phone16 from "../assets/16.jpg";
import iphone12 from "../assets/iphone 12.jpg";
import iphone12pro from "../assets/iphone12pro.jpg";
import iphone12promax from "../assets/iphone12promax.jpg";
import iphone13 from "../assets/iphone13.jpg";
import iphone13pro from "../assets/iphone 13 pro.jpg";
import iphone13promax from "../assets/iphone13promax.jpg";
import iphone14 from "../assets/iphone14.jpg";
import iphone14pro from "../assets/iphone14pro.jpg";
import iphone15 from "../assets/iphone15.jpg";
import iphone15pro from "../assets/iphone15pro.jpg";
import iphone16 from "../assets/iphone16.jpg";
import iphone16pro from "../assets/iphone16pro.jpg";
import iphone17 from "../assets/iphone17.jpg";
import iphone17promax from "../assets/iphone17promax.jpg";
export default function Shop() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: "iPhone 14 Pro Max",
      price: 999,
      image: phone14,
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max",
      price: 799,
      image: phone15,
    },
    {
      id: 3,
      name: "MacBook Pro M3",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200",
    },
    {
      id: 4,
      name: "MacBook Air M2",
      price: 1199,
      image:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200",
    },
    {
      id: 5,
      name: "Apple Watch Series 9",
      price: 399,
      image: phone9,
    },
    {
      id: 6,
      name: "AirPods Pro",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1200",
    },
      {
      id: 7,
      name: "iPhone 17 Air",
      price: 999,
      image: phoneair,
    },
         {
      id: 8,
      name: "iPhone 16 Pro Max",
      price: 999,
      image: phone16,
    },
          {
      id: 9,
      name: "iPhone 12",
      price: 999,
      image: iphone12,
    },
          {
      id: 10,
      name: "iPhone 12 Pro",
      price: 999,
      image: iphone12pro,
    },
          {
      id: 11,
      name: "iPhone 12 Pro Max",
      price: 999,
      image: iphone12promax,
    },
          {
      id: 12,
      name: "iPhone 13",
      price: 999,
      image: iphone13,
    },
          {
      id: 13,
      name: "iPhone 13 Pro",
      price: 999,
      image: iphone13pro,
    },
          {
      id: 14,
      name: "iPhone 13 Pro Max",
      price: 999,
      image: iphone13promax,
    },
          {
      id: 15,
      name: "iPhone 14",
      price: 999,
      image: iphone14,
    },
          {
      id: 16,
      name: "iPhone 14 Pro",
      price: 999,
      image: iphone14pro,
    },
   
          {
      id: 17,
      name: "iPhone 15",
      price: 999,
      image: iphone15,
    },
          {
      id: 18,
      name: "iPhone 15 Pro",
      price: 999,
      image: iphone15pro,
    },
          {
      id: 19,
      name: "iPhone 16",
      price: 999,
      image: iphone16,
    },
          {
      id: 20,
      name: "iPhone 16 Pro",
      price: 999,
      image: iphone16pro,
    },
          {
      id: 21,
      name: "iPhone 17",
      price: 999,
      image: iphone17,
    },
          {
      id: 22,
      name: "iPhone 17 Pro Max",
      price: 999,
      image: iphone17promax,
    },

  ];

  return (
    <>
      <Navbar />

      <div className="bg-black min-h-screen py-20 px-6">
        <h1 className="text-4xl text-white text-center mb-16">
          Apple Products
        </h1>

        <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
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
                <p className="text-gray-400 mb-4">Rs.{product.price}</p>
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