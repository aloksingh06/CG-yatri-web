"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaFlag,
  FaCarSide,
  FaBus,
  FaMotorcycle,
  FaTruckMoving,
  FaBoxOpen,
  FaChargingStation,
  FaParking,
  FaTaxi,
} from "react-icons/fa";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Listbox } from "@headlessui/react";
import { HiSelector } from "react-icons/hi";
import { useRouter } from "next/navigation";
import ServiceProviderModal from "./ServiceProviderModal";

const BookRideSection = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const services = [
    {
      name: "City Bus",
      logo: "/images/busLogo.jpg", // Replace with actual logo URL
    },
    {
      name: "Auto Rickshaw",
      logo: "/path/to/auto-rickshaw-logo.png", // Replace with actual logo URL
    },
    {
      name: "Cab",
      logo: "/path/to/cab-logo.png", // Replace with actual logo URL
    },
    {
      name: "Bike",
      logo: "/path/to/bike-logo.png", // Replace with actual logo URL
    },
    {
      name: "Freight Mover",
      logo: "/path/to/freight-mover-logo.png", // Replace with actual logo URL
    },
    {
      name: "Packers & Movers",
      logo: "/path/to/packers-movers-logo.png", // Replace with actual logo URL
    },
    {
      name: "EV Charging",
      logo: "/path/to/ev-charging-logo.png", // Replace with actual logo URL
    },
    {
      name: "Parking",
      logo: "/path/to/parking-logo.png", // Replace with actual logo URL
    },
  ];

  const handleFindRide = () => {
    if (pickup && destination) {
      alert(`Finding rides from ${pickup} to ${destination}`);
    } else {
      alert("Please enter both Pickup and Destination!");
    }
  };

  const routes = [
    {
      from: "Railway Station",
      to: "Airport",
      bus: "₹25",
      auto: "₹120",
      cab: "₹250",
    },
    {
      from: "Pandri",
      to: "Telibandha",
      bus: "₹15",
      auto: "₹80",
      cab: "₹180",
    },
    {
      from: "Shankar Nagar",
      to: "Amanaka",
      bus: "₹20",
      auto: "₹100",
      cab: "₹220",
    },
    {
      from: "Gudhiyari",
      to: "Sadar Bazar",
      bus: "₹15",
      auto: "₹90",
      cab: "₹200",
    },
    // Extra routes for testing scroll
    {
      from: "Raipura",
      to: "Mowa",
      bus: "₹18",
      auto: "₹85",
      cab: "₹210",
    },
    {
      from: "Tatibandh",
      to: "Dumartarai",
      bus: "₹22",
      auto: "₹95",
      cab: "₹230",
    },
  ];

  const locations = [
    "Railway Station",
    "Airport",
    "Pandri",
    "Telibandha",
    "Shankar Nagar",
    "Amanaka",
    "Gudiyari",
    "Sadar Bazar",
  ];

  const services2 = [
    {
      title: "Auto Services",
      icon: <FaCarSide size={32} />,
      desc: "Book autos easily and affordably for short trips.",
      link: "/services/auto",
    },
    {
      title: "Cab Services",
      icon: <FaTaxi size={32} />,
      desc: "Ride comfortably with our cab service anytime.",
      link: "/services/cab",
    },
    {
      title: "Bus Services",
      icon: <FaBus size={32} />,
      desc: "Find and reserve seats in local and intercity buses.",
      link: "/services/bus",
    },
    {
      title: "Rental Services",
      icon: <FaCarSide size={32} />,
      desc: "Rent vehicles for hours or days at best prices.",
      link: "/services/rental",
    },
    {
      title: "Bike Services",
      icon: <FaMotorcycle size={32} />,
      desc: "Get quick bike rides across the city.",
      link: "/services/bike",
    },
    {
      title: "Freight Movers",
      icon: <FaTruckMoving size={32} />,
      desc: "Move goods and heavy items securely and quickly.",
      link: "/services/freight",
    },
    {
      title: "Packer Movers",
      icon: <FaBoxOpen size={32} />,
      desc: "Shift homes and offices with trusted packers.",
      link: "/services/packers",
    },
    {
      title: "EV Charging Stations",
      icon: <FaChargingStation size={32} />,
      desc: "Locate EV charging points with live availability.",
      link: "/services/ev-charging",
    },
    {
      title: "Parking Stations",
      icon: <FaParking size={32} />,
      desc: "Find parking spaces with real-time updates.",
      link: "/services/parking",
    },
  ];
  const router = useRouter();

  const fares = [
    {
      type: "City Bus",
      icon: <FaBus className="text-green-500" size={24} />,
      price: "₹15-25",
      wait: "15-10 min wait",
    },
    {
      type: "Auto Rickshaw",
      icon: <FaMotorcycle className="text-yellow-400" size={24} />,
      price: "₹80-120",
      wait: "5-10 min wait",
    },
    {
      type: "Premium Cab",
      icon: <FaTaxi className="text-blue-400" size={24} />,
      price: "₹180-300",
      wait: "5-15 min wait",
    },
  ];

  const [from, setFrom] = useState(locations[0]);
  const [to, setTo] = useState(locations[1]);
  const [selectedFare, setSelectedFare] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBookRide = () => {
    if (!selectedFare) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Booking from ${from} to ${to} by ${selectedFare.type} confirmed!`);
      setSelectedFare(null); // Reset after booking
    }, 1500);
  };

  const features = [
    {
      title: "Affordable Pricing",
      description:
        "Competitive rates across all services with transparent pricing and no hidden charges.",
      icon: "💼",
    },
    {
      title: "Safe & Secure",
      description:
        "Verified drivers, emergency contacts, and 24/7 customer support for your safety.",
      icon: "🛡️",
    },
    {
      title: "Eco-Friendly",
      description:
        "Promoting sustainable transport with EV options and carbon footprint tracking.",
      icon: "🌿",
    },
  ];

  const review = [
    {
      name: "Rajesh Verma",
      rating: 5,
      feedback:
        "The bus tracking feature is a game-changer. I no longer waste time waiting at stops.",
    },
    {
      name: "Priya Singh",
      rating: 4.5,
      feedback:
        "Found an EV charging station quickly when my battery was low. Lifesaver!",
    },
    {
      name: "Amit Patel",
      rating: 5,
      feedback:
        "Moved my entire office using their packers & movers service. Professional and efficient.",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [serviceProviderData, setServiceProviderData] = useState(null);
  const router2 = useRouter();

  const handleSave = (data) => {
    console.log("Saved Data:", data);
    setServiceProviderData(data); // backend integration ke liye ready data
  };

  return (
    <div className="bg-gray-100">
      {/* book your ride section 2nd section */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Book Your Ride
          </motion.h2>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Pickup and Destination Inputs */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex items-center border rounded-md px-4 py-2 w-full bg-gray-50">
                <FaMapMarkerAlt className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Enter pickup point"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="outline-none bg-transparent w-full"
                />
              </div>

              <div className="flex items-center border rounded-md px-4 py-2 w-full bg-gray-50">
                <FaFlag className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Enter destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="outline-none bg-transparent w-full"
                />
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Select Service</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="border rounded-lg p-4 text-center cursor-pointer hover:bg-blue-100 transition-all"
                  >
                    <img
                      src={service.logo} // Assuming 'logo' is a property in your service object
                      alt={service.name}
                      className="w-16 h-16 mx-auto mb-2 object-contain"
                    />
                    <p className="text-sm font-semibold">{service.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Find Ride Button */}
            <div className="text-center">
              <button
                onClick={handleFindRide}
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full transition-all"
              >
                Find Available Ride
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* book your ride section 2nd section farebox */}
      <section className="py-10 bg-white rounded-lg mx-4 md:mx-20 my-10 shadow">
        <div className="max-w-3xl mx-auto p-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            Fare Calculator
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* From Dropdown */}
            <Listbox value={from} onChange={setFrom}>
              <div className="relative">
                <Listbox.Button className="w-full p-3 text-left border rounded-lg bg-white">
                  {from}
                  <HiSelector
                    className="absolute right-3 top-3 text-gray-400"
                    size={20}
                  />
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
                  {locations.map((loc, idx) => (
                    <Listbox.Option
                      key={idx}
                      value={loc}
                      className={({ active }) =>
                        `cursor-pointer select-none p-3 ${
                          active ? "bg-green-100" : ""
                        }`
                      }
                    >
                      {loc}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>

            {/* To Dropdown */}
            <Listbox value={to} onChange={setTo}>
              <div className="relative">
                <Listbox.Button className="w-full p-3 text-left border rounded-lg bg-white">
                  {to}
                  <HiSelector
                    className="absolute right-3 top-3 text-gray-400"
                    size={20}
                  />
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
                  {locations.map((loc, idx) => (
                    <Listbox.Option
                      key={idx}
                      value={loc}
                      className={({ active }) =>
                        `cursor-pointer select-none p-3 ${
                          active ? "bg-green-100" : ""
                        }`
                      }
                    >
                      {loc}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>

          {/* Fare Details */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-lg mb-4">Select a Service</h3>
            {fares.map((fare, index) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                key={index}
                onClick={() => setSelectedFare(fare)}
                className={`flex items-center justify-between py-3 border-b last:border-0 cursor-pointer rounded-lg px-3
                ${
                  selectedFare?.type === fare.type
                    ? "bg-green-100"
                    : "hover:bg-green-50"
                }
              `}
              >
                <div className="flex items-center gap-4">
                  {fare.icon}
                  <div>
                    <p className="font-semibold">{fare.type}</p>
                    <p className="text-sm text-gray-400">{fare.wait}</p>
                  </div>
                </div>
                <p className="font-semibold">{fare.price}</p>
              </motion.div>
            ))}
          </div>

          {/* Book Button */}
          <div className="text-center">
            <button
              onClick={handleBookRide}
              disabled={!selectedFare || loading}
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed w-full"
            >
              {loading ? "Booking..." : "Book Your Ride Now"}
            </button>
          </div>
        </div>
      </section>

      {/* 3rd section (popular routes) */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Popular Routes in Raipur</h2>
            <a
              href="#"
              className="text-green-600 hover:underline text-sm font-semibold"
            >
              View All Routes →
            </a>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4">
            {routes.map((route, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-white p-5 rounded-lg shadow hover:shadow-lg transition duration-300 cursor-pointer"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {route.from} to {route.to}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Bus: {route.bus} | Auto: {route.auto} | Cab: {route.cab}
                </p>
                <div className="flex justify-end">
                  <ArrowRight className="text-green-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4th section (real time tracking) */}
      <section className="py-12 mb-12 bg-gray-100">
        <div className="w-full mx-auto px-6 flex flex-col md:flex-row items-center gap-32">
          {/* Left Side - Icon and Dotted Line */}
          {/* <div className=" md:w-1/2 bg-gray-200  flex justify-center">
            <div className=" image mt-10 md:mt-0">
              <Image
                src="/images/raipurLocation.png"
                alt="location"
                width={500}
                height={500}
                className="w-full max-w-md"
              />
            </div>
          </div> */}
          <div className="bg-blue-50 ml-12 p-2 rounded-2xl shadow-lg w-[70vw] h-[56vh]">
              <iframe
                src="https://maps.google.com/maps?q=Raipur%20Chhattisgarh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1rem' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          {/* Right Side - Content */}
          <div className=" pr-32 w-full  md:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-center md:text-left">
              Real-Time Tracking
            </h2>
            <h3 className="text-xl font-semibold mb-2 text-center md:text-left">
              Track your ride in Real-Time
            </h3>
            <p className="text-gray-600 mb-6 text-center md:text-left">
              With CG Yatri, you can follow your vehicle’s live location from
              pickup to drop. No more waiting guesses—just smooth, stress-free
              travel.
            </p>

            {/* Vehicle Info Box */}
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <p className="text-lg font-semibold mb-2">Vehicle Name</p>
              <p className="text-gray-700">Showing its current location</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5th section  (fast & easy ride) */}
      <section className="h-[90vh] flex flex-col bg-blue-600  md:flex-row items-center justify-around px-6 md:px-16  overflow-hidden">
        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start text-center md:text-left gap-6 max-w-xl"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Fast, Easy and <br /> Safe Rides
          </h1>
          <p className="text-white text-lg md:text-xl">
            Lightning-fast and user-friendly app to book your rides. Get picked
            up right at your doorstep by trusted drivers for a safe and smooth
            journey.
          </p>

          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <button className="bg-[#1400AE] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#100092] transition-colors duration-300">
              Download App
            </button>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
           initial={{ x: -100, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{ duration: 0.8 }}
          className="mt-10 md:mt-0"
        >
          <Image
            src="/images/easyRide.svg"
            alt="Auto Ride"
            width={500}
            height={300}
            className="w-full max-w-md"
          />
        </motion.div>
      </section>

      {/* 6th section (Service)  */}
      <section className="py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Discover Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
          {services2.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-center mb-4 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-center mb-6">{service.desc}</p>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => router.push(service.link)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full transition"
                >
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7th section (featurs) */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">
            Why Choose CG Yatri?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.9, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md p-9 flex flex-col items-center hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-700">
                  {feature.title}
                </h3>
                <p className="text-gray-500 w-[70%] text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8th section (user review) */}
      <section className="py-32 bg-blue-600 text-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">What Our Users Say</h2>
        </div>

        <div className="max-w-6xl mx-auto grid gap-8 px-4 md:grid-cols-3">
          {review.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-blue-700 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white text-blue-700 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A7 7 0 0112 15a7 7 0 016.879 2.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex">
                    {Array.from({ length: Math.floor(testimonial.rating) }).map(
                      (_, idx) => (
                        <svg
                          key={idx}
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.217 3.747a1 1 0 00.95.69h3.946c.969 0 1.371 1.24.588 1.81l-3.193 2.32a1 1 0 00-.364 1.118l1.217 3.747c.3.921-.755 1.688-1.54 1.118l-3.193-2.32a1 1 0 00-1.175 0l-3.193 2.32c-.784.57-1.838-.197-1.54-1.118l1.217-3.747a1 1 0 00-.364-1.118L2.294 9.174c-.783-.57-.38-1.81.588-1.81h3.946a1 1 0 00.95-.69l1.217-3.747z" />
                        </svg>
                      )
                    )}
                    {testimonial.rating % 1 !== 0 && (
                      <svg
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <defs>
                          <linearGradient id="half-grad">
                            <stop offset="50%" stopColor="currentColor" />
                            <stop offset="50%" stopColor="transparent" />
                          </linearGradient>
                        </defs>
                        <path
                          fill="url(#half-grad)"
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.217 3.747a1 1 0 00.95.69h3.946c.969 0 1.371 1.24.588 1.81l-3.193 2.32a1 1 0 00-.364 1.118l1.217 3.747c.3.921-.755 1.688-1.54 1.118l-3.193-2.32a1 1 0 00-1.175 0l-3.193 2.32c-.784.57-1.838-.197-1.54-1.118l1.217-3.747a1 1 0 00-.364-1.118L2.294 9.174c-.783-.57-.38-1.81.588-1.81h3.946a1 1 0 00.95-.69l1.217-3.747z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-sm">{testimonial.feedback}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 9th section (About section) */}
      <section className="py-16 px-4 my-32 bg-white flex flex-col md:flex-row gap-8 max-w-7xl mx-auto items-start">
        {/* Left Content */}
        <motion.div
          className="flex-1"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">About CG Yatri</h2>
          <p className="mb-6 text-gray-700">
            CG Yatri is Chhattisgarh's premier urban mobility platform,
            integrating all forms of city transportation into one seamless
            experience. Our mission is to make urban travel efficient,
            affordable, and sustainable.
          </p>
          <p className="mb-8 text-gray-700">
            From daily commuters to businesses needing logistics support, we
            serve all transportation needs across Raipur, Bilaspur, Bhilai, and
            other major cities in Chhattisgarh.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => router2.push("/About")}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Learn More
            </button>
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-blue-600 text-teal-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="flex-1 bg-gray-100 p-8 rounded-lg shadow-lg"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-4">Join Our Network</h3>
          <p className="mb-6 text-gray-600">
            Are you a driver, fleet owner, or service provider? Partner with us
            to grow your business.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition w-full"
          >
            Register as Service Provider
          </button>
        </motion.div>

        {/* Modal */}
        <ServiceProviderModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      </section>
    </div>
  );
};

export default BookRideSection;
