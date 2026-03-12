import Navbar from "../components/nav";
import { useState } from "react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Aryan",
    email: "aryan@gmail.com",
    joined: "2024",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navbar />

      <div className="bg-black min-h-screen text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <h1 className="text-4xl font-semibold mb-10 tracking-wide">
            My Profile
          </h1>

          <div className="bg-neutral-900/80 backdrop-blur-lg border border-neutral-800 rounded-3xl p-10 shadow-2xl">

            <div className="flex items-center gap-6 mb-10">

              <img
                src="https://i.pravatar.cc/150"
                alt="profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-white"
              />

              <div>
                <h2 className="text-2xl font-medium">{user.name}</h2>
                <p className="text-gray-400">{user.email}</p>
              </div>

            </div>

            <div className="space-y-6">

              <div className="flex justify-between border-b border-neutral-800 pb-4">
                <span className="text-gray-400">Full Name</span>

                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    className="bg-neutral-800 px-3 py-1 rounded-lg text-white"
                  />
                ) : (
                  <span>{user.name}</span>
                )}
              </div>

              <div className="flex justify-between border-b border-neutral-800 pb-4">
                <span className="text-gray-400">Email</span>

                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="bg-neutral-800 px-3 py-1 rounded-lg text-white"
                  />
                ) : (
                  <span>{user.email}</span>
                )}
              </div>

              <div className="flex justify-between border-b border-neutral-800 pb-4">
                <span className="text-gray-400">Member Since</span>
                <span>{user.joined}</span>
              </div>

            </div>

            <div className="mt-10">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition font-medium"
              >
                {isEditing ? "Save Changes" : "Edit Profile"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}