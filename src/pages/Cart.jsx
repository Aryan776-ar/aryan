import Navbar from "../components/nav";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // ✅ Functional checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Optional: Send cartItems & subtotal to backend here

    alert(`Proceeding to checkout. Total: Rs.${subtotal.toLocaleString()}`);
    navigate("/checkout"); // Redirect to checkout page
  };

  return (
    <>
      <Navbar />

      <div className="bg-black min-h-screen text-white px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl mb-12">Your Bag</h1>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* CART ITEMS */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between bg-neutral-900 p-6 rounded-2xl"
                >
                  <div className="flex gap-6">
                    <img
                      src={item.image}
                      className="w-24 h-24 object-contain"
                    />

                    <div>
                      <h3>{item.name}</h3>
                      <p className="text-gray-400">
                        Rs.{item.price.toLocaleString()}
                      </p>

                      <div className="flex gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, "dec")}
                          className="border px-3"
                        >
                          -
                        </button>

                        {item.quantity}

                        <button
                          onClick={() => updateQuantity(item.id, "inc")}
                          className="border px-3"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p>
                      Rs.{(item.price * item.quantity).toLocaleString()}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ORDER SUMMARY */}
            <div className="bg-neutral-900 p-8 rounded-2xl">
              <h2 className="text-2xl mb-6">Order Summary</h2>

              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span>Rs.{subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between mb-4">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>Rs.{subtotal.toLocaleString()}</span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full mt-8 bg-white text-black py-3 rounded-full"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}