import Navbar from "../components/nav";

export default function Orders() {

  const orders = [
    {
      id: "ORD-1023",
      date: "March 1, 2026",
      status: "Delivered",
      total: "$1299",
      items: [
        {
          name: "iPhone 15 Pro",
          image:
            "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=500",
        },
      ],
    },
    {
      id: "ORD-1011",
      date: "February 14, 2026",
      status: "Shipped",
      total: "$899",
      items: [
        {
          name: "AirPods Pro",
          image:
            "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=500",
        },
      ],
    },
    {
      id: "ORD-1002",
      date: "January 30, 2026",
      status: "Processing",
      total: "$2199",
      items: [
        {
          name: "MacBook Air M2",
          image:
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=500",
        },
      ],
    },
  ];

  const getStatusColor = (status) => {
    if (status === "Delivered") return "text-green-400";
    if (status === "Shipped") return "text-blue-400";
    return "text-yellow-400";
  };

  return (
    <>
      <Navbar />

      <div className="bg-black min-h-screen text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl font-semibold mb-12">Your Orders</h1>

          <div className="space-y-6">

            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition"
              >

                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-sm text-gray-400">Order ID</p>
                    <p className="font-medium">{order.id}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-400">Date</p>
                    <p>{order.date}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-400">Status</p>
                    <p className={`font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-400">Total</p>
                    <p className="font-semibold">{order.total}</p>
                  </div>
                </div>

                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 border-t border-neutral-800 pt-6"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                    </div>

                    <button className="border border-neutral-700 px-4 py-2 rounded-full text-sm hover:bg-neutral-800 transition">
                      View Details
                    </button>

                  </div>
                ))}
              </div>
            ))}

          </div>

        </div>
      </div>
    </>
  );
}