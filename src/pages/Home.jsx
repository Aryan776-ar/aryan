import Navbar from "../components/nav";
import phone14 from "../assets/14.jpg";
import phone15 from "../assets/15.jpg";
import phone16 from "../assets/16.jpg";
import phone17 from "../assets/i17.jpg";
import phoneair from "../assets/air.jpg";
export default function HomePage() {
  const phones = [
    {
      id: 1,
      name: "iPhone 14 Pro Max",
      price: "$999",
      image:phone14,
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max",
      price: "$799",
      image:phone15,
    },
    {
      id: 3,
      name: "iPhone 16 Pro Max",
      price: "$699",
      image:phone16,
    },
      {
      id: 4,
      name: "iPhone 17",
      price: "$699",
      image:phone17,
    },
    
     {
      id: 5,
      name: "iPhone Air",
      price: "$699",
      image:phoneair,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="bg-black text-white min-h-screen">

        {/* HERO */}
<section className="relative flex flex-col items-center justify-center text-center py-48 px-6 overflow-hidden">
  
  {/* The Background Image Layer */}
  <div className="absolute inset-0 -z-10">
    <img 
      src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=2000" 
      alt="Background" 
      className="w-full h-full object-cover opacity-60" 
    />
    {/* Optional Gradient Overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
  </div>

  <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
    iPhone
  </h1>
  <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
    Powerful. Beautiful. Designed to push the limits.
  </p>
  <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition">
    Explore
  </button>
</section>
        <section className="max-w-7xl mx-auto px-6 pb-24">

          <h2 className="text-3xl font-semibold text-center mb-14">
            Latest iPhones
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {phones.map((phone) => (
              <div
                key={phone.id}
                className="bg-neutral-900 rounded-3xl p-6 text-center hover:scale-[1.03] transition duration-300"
              >
                <div className="h-72 flex items-center justify-center mb-6">
                  <img
                    src={phone.image}
                    alt={phone.name}
                    className="max-h-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-medium mb-2">{phone.name}</h3>

                <p className="text-gray-400 mb-6">{phone.price}</p>

                <button className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
                  Buy
                </button>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-neutral-800 text-gray-500 text-center py-6">
          <p>© {new Date().getFullYear()} Apple Store Demo</p>
        </footer>

      </div>
    </>
  );
}