// CityBuses Component

"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const CityBuses = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-900 text-white py-16 px-6 text-center"
      >
        <h1 className="text-4xl font-bold mb-4">City Buses</h1>
        <p className="text-lg">
          Get ready for a smooth and affordable journey with CG Yatri City
          Buses.
        </p>
      </motion.div>

      {/* City Buses Info Section */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="max-w-7xl mx-auto px-4 sm:px-6 py-12"
>
  <h2 className="text-3xl font-semibold text-center mb-8">
    City Buses in Raipur: Your Commuting Solution
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* Bus Info Card 1 - Pandri to Bhatagaon */}
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-xl font-semibold mb-4">Route: Pandri to Bhatagaon</h3>
      <p className="text-gray-700 mb-4">
        Reliable buses running frequently from Pandri to Bhatagaon to make your commute easy.
      </p>
      <p className="text-gray-700 mb-2"><strong>Bus Number:</strong> 105</p>
      <p className="text-gray-700 mb-2"><strong>Driver Name:</strong> Ramesh Yadav</p>
      <p className="text-gray-700 mb-4"><strong>Driver Contact:</strong> 9876543210</p>
      <button onClick={() => router.push("/bus-schedule/pandri-bhatagaon")} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
        View Schedule
      </button>
    </div>

    {/* Bus Info Card 2 - Amanaka to HNLU */}
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-xl font-semibold mb-4">Route: Amanaka to HNLU</h3>
      <p className="text-gray-700 mb-4">
        Direct buses between Amanaka and HNLU, ensuring smooth travel for students and professionals.
      </p>
      <p className="text-gray-700 mb-2"><strong>Bus Number:</strong> 208</p>
      <p className="text-gray-700 mb-2"><strong>Driver Name:</strong> Suresh Kumar</p>
      <p className="text-gray-700 mb-4"><strong>Driver Contact:</strong> 9123456789</p>
      <button onClick={() => router.push("/bus-schedule/amanaka-hnl")} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
        View Schedule
      </button>
    </div>

    {/* Bus Info Card 3 - Airport to Railway Station */}
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-xl font-semibold mb-4">Route: Airport to Railway Station</h3>
      <p className="text-gray-700 mb-4">
        Convenient buses running between the Airport and Railway Station for travelers.
      </p>
      <p className="text-gray-700 mb-2"><strong>Bus Number:</strong> 303</p>
      <p className="text-gray-700 mb-2"><strong>Driver Name:</strong> Anil Patel</p>
      <p className="text-gray-700 mb-4"><strong>Driver Contact:</strong> 8765432109</p>
      <button onClick={() => router.push("/bus-schedule/airport-railway")} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
        View Schedule
      </button>
    </div>

    {/* Bus Info Card 4 - Pandri to Mowa */}
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-xl font-semibold mb-4">Route: Pandri to Mowa</h3>
      <p className="text-gray-700 mb-4">
        Frequent buses running from Pandri to Mowa to make travel convenient.
      </p>
      <p className="text-gray-700 mb-2"><strong>Bus Number:</strong> 401</p>
      <p className="text-gray-700 mb-2"><strong>Driver Name:</strong> Vijay Singh</p>
      <p className="text-gray-700 mb-4"><strong>Driver Contact:</strong> 9812345678</p>
      <button onClick={() => router.push("/bus-schedule/pandri-mowa")} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
        View Schedule
      </button>
    </div>

    {/* Bus Info Card 5 - Telibandha to Mana */}
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-xl font-semibold mb-4">Route: Telibandha to Mana</h3>
      <p className="text-gray-700 mb-4">
        Reliable buses from Telibandha to Mana for easy connectivity.
      </p>
      <p className="text-gray-700 mb-2"><strong>Bus Number:</strong> 502</p>
      <p className="text-gray-700 mb-2"><strong>Driver Name:</strong> Deepak Rao</p>
      <p className="text-gray-700 mb-4"><strong>Driver Contact:</strong> 9934567890</p>
      <button onClick={() => router.push("/bus-schedule/telibandha-mana")} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
        View Schedule
      </button>
    </div>

    {/* Bus Info Card 6 - IIIT Naya Raipur to CBD */}
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-xl font-semibold mb-4">Route: Amanaka to CBD</h3>
      <p className="text-gray-700 mb-4">
        Buses available from IIIT Naya Raipur to CBD, ideal for students and professionals.
      </p>
      <p className="text-gray-700 mb-2"><strong>Bus Number:</strong> 606</p>
      <p className="text-gray-700 mb-2"><strong>Driver Name:</strong> Manoj Yadav</p>
      <p className="text-gray-700 mb-4"><strong>Driver Contact:</strong> 9556778899</p>
      <button onClick={() => router.push("/bus-schedule/iiit-cbd")} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
        View Schedule
      </button>
    </div>

    {/* Bus Info Card 7 - Mowa to Railway Station */}
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-xl font-semibold mb-4">Route: Mowa to Railway Station</h3>
      <p className="text-gray-700 mb-4">
        Efficient buses connecting Mowa with Railway Station.
      </p>
      <p className="text-gray-700 mb-2"><strong>Bus Number:</strong> 707</p>
      <p className="text-gray-700 mb-2"><strong>Driver Name:</strong> Rajesh Kumar</p>
      <p className="text-gray-700 mb-4"><strong>Driver Contact:</strong> 9988776655</p>
      <button onClick={() => router.push("/bus-schedule/mowa-railway")} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
        View Schedule
      </button>
    </div>

    {/* Bus Info Card 8 - Bhatagaon to Amanaka */}
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-xl font-semibold mb-4">Route: Bhatagaon to IIIT Naya Raipur</h3>
      <p className="text-gray-700 mb-4">
        Buses connecting Bhatagaon with Amanaka for easy access to both areas.
      </p>
      <p className="text-gray-700 mb-2"><strong>Bus Number:</strong> 808</p>
      <p className="text-gray-700 mb-2"><strong>Driver Name:</strong> Sunil Tiwari</p>
      <p className="text-gray-700 mb-4"><strong>Driver Contact:</strong> 9898989898</p>
      <button onClick={() => router.push("/bus-schedule/bhatagaon-amanaka")} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
        View Schedule
      </button>
    </div>

    {/* Bus Info Card 9 - HNLU to Pandri */}
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-xl font-semibold mb-4">Route: HNLU to Pandri</h3>
      <p className="text-gray-700 mb-4">
        Frequent buses running from HNLU to Pandri, serving the educational hub.
      </p>
      <p className="text-gray-700 mb-2"><strong>Bus Number:</strong> 909</p>
      <p className="text-gray-700 mb-2"><strong>Driver Name:</strong> Bhanu Pratap</p>
      <p className="text-gray-700 mb-4"><strong>Driver Contact:</strong> 9555566778</p>
      <button onClick={() => router.push("/bus-schedule/hnlu-pandri")} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
        View Schedule
      </button>
    </div>

    {/* Bus Info Card 10 - Mana to Bhatagaon */}
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-xl font-semibold mb-4">Route: Mana to Bhatagaon</h3>
      <p className="text-gray-700 mb-4">
        Easy transport from Mana to Bhatagaon to enhance your commuting experience.
      </p>
      <p className="text-gray-700 mb-2"><strong>Bus Number:</strong> 1010</p>
      <p className="text-gray-700 mb-2"><strong>Driver Name:</strong> Pankaj Tiwari</p>
      <p className="text-gray-700 mb-4"><strong>Driver Contact:</strong> 9665332211</p>
      <button onClick={() => router.push("/bus-schedule/mana-bhatagaon")} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
        View Schedule
      </button>
    </div>

    {/* Bus Info Card 11 - Abanpur to NIT */}
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-xl font-semibold mb-4">Route: Abanpur to NIT</h3>
      <p className="text-gray-700 mb-4">
        Buses connecting Abanpur to NIT for quick and easy commuting.
      </p>
      <p className="text-gray-700 mb-2"><strong>Bus Number:</strong> 1111</p>
      <p className="text-gray-700 mb-2"><strong>Driver Name:</strong> Kamal Singh</p>
      <p className="text-gray-700 mb-4"><strong>Driver Contact:</strong> 9456456765</p>
      <button onClick={() => router.push("/bus-schedule/abanpur-nit")} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
        View Schedule
      </button>
    </div>

    {/* Bus Info Card 12 - IIM Kalinga to Vogera */}
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-xl font-semibold mb-4">Route: IIM to Tatibandh</h3>
      <p className="text-gray-700 mb-4">
        Convenient buses running between IIM Kalinga and Vogera for easy commute.
      </p>
      <p className="text-gray-700 mb-2"><strong>Bus Number:</strong> 1212</p>
      <p className="text-gray-700 mb-2"><strong>Driver Name:</strong> Sushil Patel</p>
      <p className="text-gray-700 mb-4"><strong>Driver Contact:</strong> 9736543245</p>
      <button onClick={() => router.push("/bus-schedule/iim-vogera")} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
        View Schedule
      </button>
    </div>

  </div>
</motion.div>


      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-blue-900 text-white py-12 text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">Ready to Travel?</h2>
        <p className="text-lg mb-6">
          Download the CG Yatri App to track your bus in real-time and never
          miss your ride.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() =>
              window.open("https://www.apple.com/app-store/", "_blank")
            }
            className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-80 transition"
          >
            <img src="/apple-logo.svg" alt="App Store" className="h-5 w-5" />
            App Store
          </button>
          <button
            onClick={() =>
              window.open("https://play.google.com/store", "_blank")
            }
            className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-80 transition"
          >
            <img src="/google-play.svg" alt="Google Play" className="h-5 w-5" />
            Google Play
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CityBuses;
