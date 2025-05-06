"use client";
import { useState, useRef, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
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
  FaSearch,
  FaMapSigns, FaRupeeSign,
} from "react-icons/fa";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Listbox } from "@headlessui/react";
import { HiSelector } from "react-icons/hi";
import { useRouter } from "next/navigation";
import ServiceProviderModal from "./ServiceProviderModal";
import axios from "axios";
import api from "@/utils/api";

const RAIPUR_ROUTES = [
  "Raipur Railway Station",
  "Telibandha",
  "Sector 15",
  "CBD",
  "North Block",
  "Mahanadi Bhawan",
  "Indravati Bhawan",
  "South Block",
  "Sector 27",
  "Sector 29",
  "HNLU",
  "Nawagaon",
  "Stadium",
  "Satya Sai Hospital",
  "Sector 12",
  "Vedanta Hospital",
  "Jungle Safari",
  "IIIT",
  "Muktangan"
];
const SERVICES = [
  {
    name: "City Bus",
    icon: <FaBus size={32} />,
    description: "Book autos easily and affordably for short trips.",
  },
  {
    name: "Auto Rickshaw",
    icon: <FaCarSide size={32} />,
    description: "Book autos easily and affordably for short trips.",
  },
  {
    name: "Cab",
    icon: <FaTaxi size={32} />,
    description: "Book autos easily and affordably for short trips.",
  },
  {
    name: "Bike",
    icon: <FaMotorcycle size={32} />,
    description: "Book autos easily and affordably for short trips.",
  },
  {
    name: "Rental Services",
    icon: <FaCarSide size={32} />,
    description: "Rent vehicles for hours or days at best prices.",
  },
  {
    name: "Freight Mover",
    icon: <FaTruckMoving size={32} />,
    description: "Book autos easily and affordably for short trips.",
  },

  {
    name: "Packers & Movers",
    icon: <FaBoxOpen size={32} />,
    description: "Book autos easily and affordably for short trips.",
  },
  {
    name: "EV Charging",
    icon: <FaChargingStation size={32} />,
    description: "Book autos easily and affordably for short trips.",
  },
  {
    name: "Parking",
    icon: <FaParking size={32} />,
    description: "Book autos easily and affordably for short trips.",
  },
];

// FAQs
const faqData = [
  {
    question: "When will the app be launched and who owns the CG Yatri app?",
    answer:
      "App will launch soon - signup . App will be made and operated by Innovara Megacorp LLP , Company based in Raipur.  It will have important stakeholders and community enablers like Driver unions, Transport authority etc.",
  },
  {
    question:
      "How is CG Yatri helpful and how is it different from other ride apps?",
    answer:
      "For commuters - CG Yatri is a government-supported mobility app for Chhattisgarh that lets you book autos, buses, cabs, and more — with zero commission and fixed fares. Drivers earn more, and you pay less. For Service providers - CG Yatri brings all service providers on one platform, boosting visibility and business — no need for ads, just more customers.Want to advertise? Put your brand on city autos and help drivers earn more.  ",
  },
  {
    question: "Can I track public transport like city buses in real-time?",
    answer:
      "Yes! You’ll be able to track city buses live on the map, see estimated arrival times, and plan your travel better.",
  },
  {
    question: "How is fare decided. Is CG Yatri cheaper?",
    answer:
      "Yes, fares are fixed by the government — no surge pricing, no hidden charges, same rate chart for drivers and users. What you see is what you pay.All fares are based on official government rates decided by consulting union drivers and transport experts. No interference by private apps or middlemen.",
  },
  {
    question: "Do I have to pay extra charges apart from the fare? ",
    answer:
      "No. You pay only the fixed fare — no extra charges, no commission fees.In case of tolls and parking charges being levied you might have to pay that.",
  },
  {
    question: "What modes of transport are available on CG Yatri?",
    answer:
      "There will be an in-app support option. Just tap “Report Issue” after the ride, and our team will help you right away.",
  },
];

const BookRideSection = () => {
 
  

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
    {
      name: "Amit Patel",
      rating: 5,
      feedback:
        "Moved my entire office using their packers & movers service. Professional and efficient.",
    },
    {
      name: "Amit Patel",
      rating: 5,
      feedback:
        "Moved my entire office using their packers & movers service. Professional and efficient.",
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
  const [fare, setFare] = useState(null);
const [error, setError] = useState('');
  const router2 = useRouter();

  const handleSave = (data) => {
    console.log("Saved Data:", data);
    setServiceProviderData(data); // backend integration ke liye ready data
  };

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [showSuggestions, setShowSuggestions] = useState({
    from: false,
    to: false,
  });
  // const router = useRouter();

  const handleSelectFrom = (route) => {
    setFrom(route);
    setShowSuggestions((prev) => ({ ...prev, from: false }));
  };

  const handleSelectTo = (route) => {
    setTo(route);
    setShowSuggestions((prev) => ({ ...prev, to: false }));
  };

  // const handleSearch = () => {
  //   router.push("/available-services");
  // };

  // for right scrolling in popular route
  const scrollRef = useRef();

  const handleScrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  // code for FAQs
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };



  // search function 
  const handleSearch = async () => {
    setError('');
    setFare(null);
  
    try {
      const response = await api.get('/api/fare', {
        params: { 
          from: from,
          to: to,
        }
      });
  
      if (response.data && response.data.fare !== undefined) {
        setFare(response.data.fare);
      } else {
        setError(response.data.error || 'Fare not found');
      }
    } catch (err) {
      if (err.response && err.response.data?.error) {
        setError(err.response.data.error);
      } else {
        setError('Failed to fetch fare. Please try again.');
      }
    }
  };
   // Auto call when both 'from' and 'to' are filled
   
  
  return (
    <div className="bg-blue-100">
      {/* book your ride section 2nd section */}
      <section className="md:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 px-8 bg-blue-50  rounded-xl shadow-md"
        >
          <h2 className="text-4xl font-bold text-center mb-6">
            Book Your Ride
          </h2>

          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* From Input */}
            <div className="relative w-full md:w-1/2">
              <input
                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                placeholder="Enter pickup point"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                onFocus={() =>
                  setShowSuggestions({ ...showSuggestions, from: true })
                }
              />
              {showSuggestions.from && (
                <ul
                  className="absolute bg-white border w-full max-h-40 overflow-y-auto z-10 rounded-md shadow"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {RAIPUR_ROUTES.filter((r) =>
                    r.toLowerCase().includes(from.toLowerCase())
                  ).map((route, i) => (
                    <li
                      key={i}
                      className="p-2 hover:bg-blue-100 cursor-pointer transition"
                      onClick={() => handleSelectFrom(route)}
                    >
                      {route}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* To Input */}
            <div className="relative w-full md:w-1/2">
              <input
                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                placeholder="Enter destination"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                onFocus={() =>
                  setShowSuggestions({ ...showSuggestions, to: true })
                }
              />
              {showSuggestions.to && (
                <ul
                  className="absolute bg-white border w-full max-h-40 overflow-y-auto z-10 rounded-md shadow"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {RAIPUR_ROUTES.filter((r) =>
                    r.toLowerCase().includes(to.toLowerCase())
                  ).map((route, i) => (
                    <li
                      key={i}
                      className="p-2 hover:bg-blue-100 cursor-pointer transition"
                      onClick={() => handleSelectTo(route)}
                    >
                      {route}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Search Button */}
            <div className="w-full md:w-auto">
              <button
                onClick={handleSearch}
                disabled={!from || !to}
                className={`w-full md:w-auto mt-2 md:mt-0 p-3 px-4 rounded-lg shadow flex items-center justify-center transition 
      ${
        from && to
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }`}
      
              >
                <FaSearch className="mr-2" /> Search
              </button>

              {/* fare show */}
             

{error && (
  <div className="text-center mt-4">
    <p className="text-red-500">{error}</p>
  </div>
)}

            </div>
            
          </div>
          {fare !== null && (
  <div className="flex justify-center  my-8">
      <motion.div
      whileHover={{ scale: 1.03 }}
    
      className="md:w-1/2 flex items-center justify-between p-4 border border-gray-200 rounded-xl shadow-sm cursor-pointer bg-white hover:bg-green-50 transition"
    >
      <div className="flex items-center gap-4">
        <div className="text-green-600 text-xl">
          <FaBus />
        </div>
        <div>
          <p className="font-semibold text-gray-800">From: {from}</p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <FaMapSigns className="text-gray-400" />
            To: {to}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-green-700 font-bold text-lg">
        <FaRupeeSign />
        {fare}
      </div>
    </motion.div>
  </div>
)}
          {/* Services */}
          <h3 className="text-2xl font-bold text-center mb-6"> Services</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
  {SERVICES.map((service, i) => {
    const isLastOddItem =
      SERVICES.length % 2 === 1 && i === SERVICES.length - 1;

    return (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        className={` bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center transition-all duration-300
          ${isLastOddItem ? "w-full col-span-2 justify-self-center sm:col-span-1 " : ""}
        `}
      >
        <div className="text-3xl sm:text-4xl text-blue-600 mb-2">
          {service.icon}
        </div>
        <h4 className="text-sm sm:text-lg font-semibold text-black mb-2">
          {service.name}
        </h4>

        <p className="hidden sm:block text-gray-600 mb-3 text-sm">
          {service.description}
        </p>

        <button className="bg-blue-600 mb-2 text-white px-4 py-1 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-blue-700 transition">
          Explore
        </button>
      </motion.div>
    );
  })}
</div>


        </motion.div>
      </section>
      <div className="  mx-1 " >
      <hr className="my-6 border-t border-gray-500  block md:hidden" />
      </div>
      {/* 3rd section (popular routes) */}
      <section className="md:py-24 py-4">
        <div className="md:max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
            <h2 className="text-xl sm:text-2xl font-bold">
              Popular Routes in Raipur
            </h2>
            <a
              href="#"
              className="text-blue-600 hover:underline text-sm font-semibold"
            >
              View All Routes →
            </a>
          </div>

          {/* Cards and Scroll Button Container */}
          <div className="relative">
            {/* Horizontal Scroll Container */}
            <div
              ref={scrollRef}
              className="flex space-x-4 sm:space-x-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            >
              {routes.map((route, index) => (
                <div
                  key={index}
                  className="min-w-[250px] sm:min-w-[300px] bg-white p-4 sm:p-5 rounded-lg shadow hover:shadow-lg transition duration-300 cursor-pointer"
                >
                  <h3 className="text-md sm:text-lg font-semibold mb-2">
                    {route.from} to {route.to}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Bus: {route.bus} | Auto: {route.auto} | Cab: {route.cab}
                  </p>
                  <div className="flex justify-end">
                    <ArrowRight className="text-blue-600" />
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Right Button */}
            <button
              onClick={handleScrollRight}
              className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 bg-blue-600 shadow p-2 rounded-full hover:bg-blue-800 transition z-10"
            >
              <ArrowRight className="text-white" />
            </button>
          </div>
        </div>
      </section>
      <div className="  mx-6 " >
      <hr className="my-6 border-t border-gray-500  block md:hidden" />
      </div>
      {/* 4th section (real time tracking) */}
      <section className="md:py-12 w-full  py-2  mb-1">
        <div className="w-full mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10 md:gap-32">
          {/* Left Side - Map Box */}
          <div className="bg-blue-50 p-2 rounded-2xl shadow-lg w-full md:w-[70vw] h-64 md:h-[56vh]">
            <iframe
              src="https://maps.google.com/maps?q=Raipur%20Chhattisgarh&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "1rem" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 px-2 sm:px-0 md:pr-32 mt-6 md:mt-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left">
              Real-Time Tracking
            </h2>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center md:text-left">
              Track your ride in Real-Time
            </h3>
            <p className="text-gray-600 mb-6 text-center md:text-left">
              With CG Yatri, you can follow your vehicle’s live location from
              pickup to drop. No more waiting guesses—just smooth, stress-free
              travel.
            </p>

            {/* Vehicle Info Box */}
            <div className="bg-white p-4 sm:p-6 rounded-lg text-center shadow-md">
              <p className="text-md sm:text-lg font-semibold mb-2">
                Vehicle Name
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                Showing its current location
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="  mx-6 mb-2 mt-[-2] " >
      <hr className=" border-t border-gray-500  block md:hidden" />
      </div>
      {/* 7th section (featurs) */}
      <section className="pb-16 md:pb-28 px-4 ">
        <div className="md:max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">
            Why Choose CG Yatri?
          </h2>

          <div className="grid gap-5 md:gap-8  md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="bg-white rounded-2xl shadow-md p-9 flex flex-col items-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                {feature.title}
              </h3>
              <p className="text-gray-500 w-[70%] text-sm">{feature.description}</p>
            </motion.div>
            
            ))}
          </div>
        </div>
      </section>
      
      {/* 8th section (user review) */}
      <section className="py-12 md:py-28 bg-blue-600 text-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">What Our Users Say</h2>
        </div>

        <div className="md:max-w-6xl mx-auto grid gap-5 md:gap-8 px-4 md:grid-cols-3">
          {review.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-blue-700 p-4 md:p-6 rounded-lg shadow-md"
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
      <div className="  mx-6 " >
      <hr className="my-6 border-t border-gray-500  block md:hidden" />
      </div>
      {/* 9th section (About section) */}
      <section className="pt-4 md:pt-8 px-4 md:mt-32 mt-8   flex flex-col md:flex-row gap-6 md:gap-8 md:max-w-7xl mx-auto items-start">
        {/* Left Content */}
        <motion.div
          className="flex-1"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold md:mb-4 mb-3 ">About CG Yatri</h2>
          <p className="md:mb-6 mb-3 text-gray-700">
            CG Yatri is Chhattisgarh's premier urban mobility platform,
            integrating all forms of city transportation into one seamless
            experience. Our mission is to make urban travel efficient,
            affordable, and sustainable.
          </p>
          <p className="md:mb-8 mb-6 text-gray-700">
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
              onClick={() => router2.push("/Contact")}
              className="border border-blue-600 text-teal-900 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="flex-1 bg-gray-100 p-8 rounded-lg shadow-lg"
          initial={{ x: 0, opacity: 0 }}
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
      
      {/* FAQs  */};
      <section className="md:my-16 my-6 px-4 sm:px-6">
        <div className="md:max-w-7xl mx-auto py-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 text-center leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300 bg-white rounded-lg p-4 sm:p-5 cursor-pointer shadow-sm hover:shadow-md transition duration-300"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-center gap-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold flex-1">
                    {faq.question}
                  </h3>
                  <span
                    className={`text-xl sm:text-2xl transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-sm sm:text-base text-gray-700 mt-2 px-1 sm:px-2">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookRideSection;
