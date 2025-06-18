// import React from 'react'

// export default function AddItem() {
//   return (
//     <div>AddItem</div>
//   )
// }

import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddItem() {
  // const router = useRouter()
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [amount, setAmount] = useState("");
  const [features, setFeatures] = useState([]);

  const toggleFeature = (id) => {
    setFeatures(
      features.map((feature) =>
        feature.id === id
          ? { ...feature, selected: !feature.selected }
          : feature
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would typically send this data to your backend
    const newSubscription = {
      title,
      subtitle,
      amount,
      features: features.filter((f) => f.selected).map((f) => f.name),
    };

    console.log("New subscription created:", newSubscription);

    // Reset form and redirect back to pricing page
    setTitle("");
    setSubtitle("");
    setAmount("");
    setFeatures(features.map((f) => ({ ...f, selected: false })));

    // Go back to main pricing page
    // router.push("/")
  };

  return (
    <div className=" p-6">
      <div className=" ">
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex items-center">
          <Link to="/subscription" className="mr-4 text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <h1 className="text-lg font-medium text-gray-800">
            Add Subscription
          </h1>
        </div>

        <div className="max-w-2xl">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 mb-6">
              <input
                type="text"
                placeholder="Package Name"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Package Amount"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Add Features"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>


            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-[#0743A2] hover:bg-[#0743A2] text-white rounded-full transition-colors font-medium"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
