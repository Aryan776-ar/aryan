import { useParams } from "react-router-dom";
import Navbar from "../components/nav";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetail() {

  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: "iPhone 14 Pro Max",
      price: 999,
      description:
        "The iPhone 14 Pro Max features a powerful A16 chip, Pro camera system and beautiful Super Retina display.",
      image:
        "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?q=80&w=1200",
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max",
      price: 1199,
      description:
        "Titanium design, A17 Pro chip and advanced camera system make iPhone 15 Pro the most powerful iPhone.",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1200",
    },
  ];

  const product = products.find((p) => p.id === Number(id));

  return (
    <>
      <Navbar />

      <div className="bg-black min-h-screen text-white flex items-center justify-center px-6 py-20">

        <div className="max-w-6xl grid md:grid-cols-2 gap-16 items-center">

          <img
            src={product.image}
            className="w-full max-w-md mx-auto"
          />

          <div>

            <h1 className="text-4xl font-semibold mb-4">
              {product.name}
            </h1>

            <p className="text-gray-400 mb-6">
              {product.description}
            </p>

            <p className="text-2xl font-semibold mb-8">
              ${product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition"
            >
              Add to Bag
            </button>

          </div>

        </div>
      </div>
    </>
  );
}