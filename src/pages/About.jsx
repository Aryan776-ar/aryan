import Navbar from "../components/nav";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="bg-black text-white min-h-screen py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          {/* Title */}
          <h1 className="text-5xl font-bold mb-10 tracking-tight">
            About PhoneStore
          </h1>

          {/* Description */}
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              PhoneStore is your trusted destination for the latest smartphones
              and premium mobile accessories. We focus on quality, style, and
              customer satisfaction.
            </p>

            <p>
              Our mission is to bring powerful technology to everyone with
              affordable pricing, fast delivery, and reliable service.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="p-8 rounded-2xl bg-neutral-900 hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-3">
                 Fast Delivery
              </h3>
              <p className="text-gray-400">
                Quick shipping across all locations.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900 hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-3">
                 Secure Payments
              </h3>
              <p className="text-gray-400">
                Safe checkout with multiple payment options.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900 hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-3">
                Quality Products
              </h3>
              <p className="text-gray-400">
                Only original and verified products.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}