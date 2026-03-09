import Navbar from "../components/nav";

export default function Profile() {

  const user = {
    name: "Aryan",
    email: "aryan@gmail.com",
    joined: "2024",
  };

  return (
    <>
      <Navbar />

      <div className="bg-black min-h-screen text-white py-16 px-6">

        <div className="max-w-3xl mx-auto">

          <h1 className="text-4xl font-semibold mb-10">Profile</h1>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-10">

            <div className="flex items-center gap-6 mb-8">

              <div className="w-20 h-20 rounded-full bg-neutral-700 flex items-center justify-center text-3xl">
                👤
              </div>

              <div>
                <h2 className="text-xl font-medium">{user.name}</h2>
                <p className="text-gray-400">{user.email}</p>
              </div>

            </div>

            <div className="space-y-6">

              <div className="flex justify-between border-b border-neutral-800 pb-4">
                <span className="text-gray-400">Full Name</span>
                <span>{user.name}</span>
              </div>

              <div className="flex justify-between border-b border-neutral-800 pb-4">
                <span className="text-gray-400">Email</span>
                <span>{user.email}</span>
              </div>

              <div className="flex justify-between border-b border-neutral-800 pb-4">
                <span className="text-gray-400">Member Since</span>
                <span>{user.joined}</span>
              </div>

            </div>

            <div className="mt-10 flex gap-4">

              <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition">
                Edit Profile
              </button>

              <button className="px-6 py-2 border border-neutral-600 rounded-full hover:bg-neutral-800 transition">
                Change Password
              </button>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}