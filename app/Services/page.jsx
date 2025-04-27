"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MdLocationOn, MdAccessTime } from "react-icons/md";
import { FaRupeeSign, FaCar, FaBolt } from "react-icons/fa";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import FooterSection from '../Components/FooterSection'


export default function Home() {
  const router = useRouter();
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [vehicleType, setVehicleType] = useState("All Types");

  const handleSearch = () => {
    router.push("/search");
  };

  const services = [
    {
      title: "Auto Rickshaw",
      subtitle: "Last mile connectivity",
      availableIn: "City Center, Suburbs",
      timings: "6:00 AM - 11:00 PM",
      fare: "₹10/km (min ₹25)",
      vehicle: "3-wheeler",
      status: "Available Now",
      statusColor: "text-green-600",
      buttonText: "Book Now",
      buttonLink: "/booking",
      eta: "ETA: 5-10 mins",
    },
    {
      title: "Premium Cab",
      subtitle: "Comfortable AC rides",
      availableIn: "Entire City",
      timings: "24/7",
      fare: "₹15/km (min ₹100)",
      vehicle: "Sedan/SUV",
      status: "Available Now",
      statusColor: "text-green-600",
      buttonText: "Book Now",
      buttonLink: "/booking",
      eta: "ETA: 7-15 mins",
    },
    {
      title: "City Bus",
      subtitle: "Affordable public transport",
      availableIn: "Major routes",
      timings: "5:30 AM - 10:30 PM",
      fare: "₹10-50 (fixed routes)",
      vehicle: "AC/Non-AC",
      status: "Next bus in 12 mins",
      statusColor: "text-green-600",
      buttonText: "View Schedule",
      buttonLink: "/booking",
      eta: "Frequency: 15-20 mins",
    },
    {
      title: "Rental Service",
      subtitle: "Affordable vehicle rentals",
      availableIn: "Across city locations",
      timings: "24/7",
      fare: "₹500/day onwards",
      vehicle: "Bikes, Cars, SUVs",
      status: "Available Now",
      statusColor: "text-green-600",
      buttonText: "Book Now",
      buttonLink: "/booking",
      eta: "Instant Confirmation",
    },
    {
      title: "Freight Movers",
      subtitle: "Goods transport solutions",
      availableIn: "City & Outskirts",
      timings: "6:00 AM - 10:00 PM",
      fare: "₹15/km (min ₹500)",
      vehicle: "Trucks, Mini-Trucks",
      status: "Available Now",
      statusColor: "text-green-600",
      buttonText: "Book Now",
      buttonLink: "/booking",
      eta: "ETA: 30-45 mins",
    },
    {
      title: "Packing Services",
      subtitle: "Secure packing for goods",
      availableIn: "Across City",
      timings: "9:00 AM - 8:00 PM",
      fare: "₹200 onwards",
      vehicle: "Staff Assisted",
      status: "Slots Open",
      statusColor: "text-green-600",
      buttonText: "Book Now",
      buttonLink: "/booking",
      eta: "Appointment based",
    },
    {
      title: "Bike Services",
      subtitle: "Bike repairs & servicing",
      availableIn: "Selected Workshops",
      timings: "9:00 AM - 7:00 PM",
      fare: "₹300 onwards",
      vehicle: "Two-Wheelers",
      status: "Available Now",
      statusColor: "text-green-600",
      buttonText: "Book Now",
      buttonLink: "/booking",
      eta: "Ready in 2-4 hrs",
    },
    {
      title: "Packers and Movers",
      subtitle: "Relocation services",
      availableIn: "City & Intercity",
      timings: "7:00 AM - 9:00 PM",
      fare: "₹2000 onwards",
      vehicle: "Trucks, Carriers",
      status: "Slots Filling Fast",
      statusColor: "text-green-600",
      buttonText: "Book Now",
      buttonLink: "/booking",
      eta: "Advance Booking",
    },
    {
      title: "EV Charging Station",
      subtitle: "Charge your electric vehicles",
      availableIn: "Main Roads, Malls",
      timings: "24/7",
      fare: "₹15/unit",
      vehicle: "2W, 4W EVs",
      status: "Available Now",
      statusColor: "text-green-600",
      buttonText: "Locate Station",
      buttonLink: "/booking",
      eta: "Nearby Available",
    },
    {
      title: "Parking Station",
      subtitle: "Safe parking solutions",
      availableIn: "Malls, Offices, Public Areas",
      timings: "24/7",
      fare: "₹30/hr",
      vehicle: "2W, 4W Vehicles",
      status: "Vacant Slots",
      statusColor: "text-green-600",
      buttonText: "Find Parking",
      buttonLink: "/booking",
      eta: "Real-Time Availability",
    },
  ];

  // service content section
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (

    <>
    <div className="min-h-screen mt-15 bg-gray-100 p-6">
      {/* 1st section */}
      <section>
        <div className="content w-full  p-5 flex flex-col items-center ">
          <h1 className="text-4xl text-blue-500 font-bold">
            CG Yatri Services
          </h1>
          <p className="text-lg text-center text-gray-500">
            Book your ride in seconds. Choose from our wide range of transport
            options <br /> available across the city.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-6xl mx-auto mt-10 space-y-8"
        >
          {/* Search Bar */}
          <div className="bg-white p-6 rounded-2xl shadow-md grid md:grid-cols-4 gap-4 items-center">
            <div>
              <label className="block text-gray-600 mb-1">Location</label>
              <div className="flex items-center border rounded-lg p-2">
                <MdLocationOn className="text-blue-600 mr-2" size={20} />
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  className="outline-none flex-1"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Destination</label>
              <div className="flex items-center border rounded-lg p-2">
                <MdLocationOn className="text-blue-600 mr-2" size={20} />
                <input
                  type="text"
                  placeholder="Enter drop location"
                  className="outline-none flex-1"
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Vehicle Type</label>
              <select
                className="w-full border rounded-lg p-2"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option>All Types</option>
                <option>Auto Rickshaw</option>
                <option>Premium Cab</option>
                <option>City Bus</option>
              </select>
            </div>

            <div className="flex justify-center items-end">
              <button
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 mt-7 text-white px-6 py-3 rounded-lg w-full"
              >
                Search
              </button>
            </div>
          </div>

          {/* Services Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between"
              >
                {/* Card Header */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaCar className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">{service.title}</h2>
                      <p className="text-gray-500 text-sm">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="space-y-2 mt-4 text-gray-600 text-sm">
                    <div className="flex items-center gap-2">
                      <MdLocationOn className="text-blue-600" />
                      <span>Available in: {service.availableIn}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdAccessTime className="text-blue-600" />
                      <span>Timings: {service.timings}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRupeeSign className="text-blue-600" />
                      <span>Fare: {service.fare}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCar className="text-blue-600" />
                      <span>Vehicle: {service.vehicle}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaBolt className="text-blue-600" />
                      <span className={`${service.statusColor} font-semibold`}>
                        {service.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-6 flex justify-between items-center">
                  <button
                    onClick={() => router.push(service.buttonLink)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                  >
                    {service.buttonText}
                  </button>
                  <span className="text-gray-400 text-xs">{service.eta}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 2nd section */}
      <section className="py-12 bg-white text-blue-900 mt-12 px-6  rounded-md md:px-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-8 text-center text-blue-600"
          >
            Our Service Terms & Benefits
          </motion.h2>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Text Content */}
            <motion.div variants={itemVariants} className="flex-1">
              <motion.p
                variants={itemVariants}
                className="mb-6 text-lg leading-relaxed text-blue-500"
              >
                We provide reliable, safe, and affordable services across Raipur
                city to meet all your travel, transport, and logistics needs.
                Enjoy a hassle-free experience with our wide network and
                dedicated support team.
              </motion.p>

              <ul className="space-y-5 mt-6">
                {[
                  "24/7 availability for cabs, autos, and rentals",
                  "Affordable fixed pricing on city buses",
                  "Trusted freight movers and packers services",
                  "Real-time service tracking and quick booking",
                  "Dedicated customer support and assistance",
                ].map((point, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-blue-500 mt-1" size={24} />
                    <span className="text-blue-600">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Image Content */}
            <motion.div
              variants={itemVariants}
              className="flex-1 flex justify-center"
            >
              <Image
                src="/images/serviceImg.svg"
                alt="Benefits of Services"
                width={450}
                height={450}
                className="rounded-xl shadow-md"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
      
    </div>
    <section>
        <FooterSection/>
      </section>
    </>
    
  );
}

// import React from 'react';

// const ServiceCard = ({ title, description, button1, button2 }) => (
//   <div className="bg-gray-200 rounded-xl shadow-md w-[521px] h-[281px] flex items-center justify-between px-4 py-6">
//     {/* Left Section */}
//     <div className="flex flex-col justify-between h-full">
//       <div>
//         <h3 className="text-xl font-semibold mb-2">{title}</h3>
//         <p className="text-sm text-gray-800 max-w-[280px]">{description}</p>
//       </div >
//       <div className="mt-4 space-y-2 flex flex-col">
//         <button className="bg-white px-4 py-1  text-sm rounded border"> {button1} </button>
//         <button className="bg-white px-4 py-1 w-[50%] text-sm rounded border"> {button2} </button>
//       </div>
//       <p className="text-xs text-gray-600 mt-2">Explore</p>
//     </div>

//     {/* Right Section - Image Placeholder */}
//     <div className="w-[201px] h-[218px] bg-white rounded-md shadow-inner"></div>
//   </div>
// );

// const Services = () => {
//   return (
//     <div className="bg-gradient-to-b from-white to-blue-200 min-h-screen">
//       {/* Header */}
//       <div className="bg-black text-white py-4 px-8 text-3xl  font-semibold">
//         Services
//       </div>

//       {/* Services Section */}
//       <section className="px-6 py-8 ">
//         <h2 className="text-2xl font-bold mb-6">See All Services</h2>
//         <div className="grid grid-cols-1  md:grid-cols-2 gap-8 justify-items-center">
//           <ServiceCard
//             title="City Bus"
//             description="Raipur’s Smart Bus Network at Your Fingertips! Track live buses, plan your journey, and pay onboard — all from your mobile."
//             button1="View Raipur City Bus Schedule"
//             button2="Explore"
//           />
//           <ServiceCard
//             title="Auto Rickshaw"
//             description="Affordable, Transparent Auto Rides. Book autos at government-approved per-kilometer rates. 80% of Raipur’s autos are already onboarding."
//             button1="Find Nearby Autos"
//             button2="Explore"
//           />
//           <ServiceCard
//             title="Cab"
//             description="Book Cabs for Solo or Group Travel. Instant cab booking with trusted local drivers."
//             button1="Book Now"
//             button2="Explore"
//           />
//           <ServiceCard
//             title="Rental Services"
//             description="Rent cars, bikes, or vans easily for your personal or business needs. Pay as you go!"
//             button1="See Rental Options"
//             button2="Explore"
//           />
//           <ServiceCard
//             title="Freight Movers"
//             description="Move Goods Seamlessly. Big or Small. Get access to 3-wheeler and 4-wheeler freight movers for every kind of logistics."
//             button1="Freight Options"
//             button2="Explore"
//           />
//           <ServiceCard
//             title="Packers and Movers"
//             description="Safe, Affordable Shifting Solutions. Professional services to help you move with comfort and care."
//             button1="Get a Quote"
//             button2="Explore"
//           />
//         </div>
//       </section>

//       {/* Additional Services Section */}
// <section className="px-6 py-12 space-y-16">
//   {/* EV Charging */}
//   <div className="flex flex-col md:flex-row justify-between items-center  rounded-xl shadow-md p-6">
//     <div className="max-w-lg space-y-3">
//       <h3 className="text-3xl font-bold">EV Charging Stations</h3>
//       <p className="text-md text-gray-700">
//         Locate EV charging stations in Raipur, support green commute and charge on-the-go.
//       </p>
//       <div className="text-sm text-blue-700  underline space-x-4">
//         <a href="#">Locate on map</a>
//         <a href="#">Find nearest station</a>
//       </div>
//     </div>
//     <div className="w-[521px] h-[200px] bg-white flex items-center justify-center rounded-md mt-6 md:mt-0">
//       <span className="text-gray-500">Map</span>
//     </div>
//   </div>

//   {/* Parking near you */}
//   <div className="flex flex-col md:flex-row justify-between items-center  rounded-xl shadow-md p-6">
//     <div className="max-w-lg space-y-3">
//       <h3 className="text-3xl font-semibold">Parking near your</h3>
//       <p className="text-md text-gray-700">
//         Find the best nearby parking zones, underground lots, and instant availability.
//       </p>
//       <div className="text-sm text-blue-700 underline space-x-4">
//         <a href="#">View on map</a>
//         <a href="#">Reserve parking</a>
//       </div>
//     </div>
//     <div className="w-[512px] h-[200px] bg-white flex items-center justify-center rounded-md mt-6 md:mt-0">
//       <span className="text-gray-500">Map</span>
//     </div>
//   </div>
// </section>

//     </div>
//   );
// };

// export default Services;
