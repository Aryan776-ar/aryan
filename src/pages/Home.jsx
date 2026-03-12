import Navbar from "../components/nav";
import phone14 from "../assets/14.jpg";
import phone15 from "../assets/15.jpg";
import phone16 from "../assets/16.jpg";
import phone17 from "../assets/i17.jpg";
import phoneair from "../assets/air.jpg";
import iphone17promax from "../assets/iphone17promax.jpg";

export default function HomePage() {
  const phones = [
    { id: 1, name: "iPhone 14 Pro Max", price: 191990, image: phone14 },
    { id: 2, name: "iPhone 15 Pro Max", price: 210000, image: phone15 },
    { id: 3, name: "iPhone 16 Pro Max", price: 207000, image: phone16 },
    { id: 4, name: "iPhone 17", price: 161599, image: phone17 },
    { id: 5, name: "iPhone Air", price: 178999, image: phoneair },
    { id: 6, name: "iPhone 17 Pro Max", price: 239999, image: iphone17promax },
  ];

  return (
    <>
      <Navbar />

      <div className="bg-black text-white min-h-screen font-sans">
        {/* HERO SECTION */}
        <section className="relative flex flex-col items-center justify-center text-center py-48 px-6 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
              src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=2000"
              alt="Background"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg">
            iPhone
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl drop-shadow">
            Powerful. Beautiful. Designed to push the limits.
          </p>
          <button className="bg-white text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-shadow shadow-md hover:shadow-lg">
            Explore
          </button>
        </section>

        {/* LATEST IPHONES */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <h2 className="text-3xl font-semibold text-center mb-14">
            Latest iPhones
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {phones.map((phone) => (
              <div
                key={phone.id}
                className="bg-neutral-900 rounded-3xl p-6 text-center hover:scale-105 transform transition duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="h-72 flex items-center justify-center mb-6">
                  <img
                    src={phone.image}
                    alt={phone.name}
                    className="max-h-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-2">{phone.name}</h3>

                <p className="text-gray-400 mb-6">
                  Rs.{phone.price.toLocaleString()}
                </p>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:scale-105 transform transition duration-300 shadow-md hover:shadow-xl">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-neutral-800 text-gray-400 text-center py-6">
          <p>© {new Date().getFullYear()} Apple Store Demo</p>
        </footer>
      </div>
    </>
  );
}