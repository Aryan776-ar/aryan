import Navbar from "../components/nav";

export default function Contact() {
  return (
    <>
      <Navbar /> 
      <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Contact Us
        </h1>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-600">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-600">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-600">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  );
}