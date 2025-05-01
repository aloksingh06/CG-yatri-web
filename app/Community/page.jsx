"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FooterSection from '../Components/FooterSection'


import {
  FaCar,
  FaUsers,
  FaHandHoldingHeart,
  FaMapMarkedAlt,
} from "react-icons/fa"; // icons

const communityOptions = [
  {
    title: "Driver Partners",
    description:
      "Join our network of professional drivers committed to safe and reliable transportation.",
    icon: <FaCar className="text-4xl text-blue-600 mb-4" />,
    link: "/community/driver-partners",
  },
  {
    title: "Local Unions",
    description:
      "Connect with other transport workers to advocate for better policies and working conditions.",
    icon: <FaUsers className="text-4xl text-blue-600 mb-4" />,
    link: "/community/local-unions",
  },
  {
    title: "Volunteers",
    description:
      "Help with community outreach, event organization, and supporting our initiatives.",
    icon: <FaHandHoldingHeart className="text-4xl text-blue-600 mb-4" />,
    link: "/community/volunteers",
  },
  {
    title: "Start a Community",
    description:
      "Bring CG Yatri to your area and help build local transport solutions.",
    icon: <FaMapMarkedAlt className="text-4xl text-blue-600 mb-4" />,
    link: "/community/start",
  },
];

const JoinCommunity = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!", { name, email, role: selectedRole });

    // Form submit ke baad redirect based on role
    if (selectedRole === "User") {
      router.push("/join/user");
    } else if (selectedRole === "Driver") {
      router.push("/join/driver");
    } else if (selectedRole === "Service Provider") {
      router.push("/join/service-provider");
    }
  };

  const images = [
    "/community1.jpg",
    "/community2.jpg",
    "/community3.jpg",
    "/community4.jpg",
    "/community5.jpg",
    "/community6.jpg",
  ];

  return (
    <>
    <section className="py-16 px-6 mt-10 bg-blue-100 text-center">
      {/* 1st section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Join the CG Yatri Community
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We're building a vibrant network of riders, drivers, volunteers, and
            transport supporters working together to create better commuting
            experiences across our cities. Your participation makes a
            difference!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {communityOptions.map((option, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Link href={option.link}>
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition hover:scale-105 cursor-pointer flex flex-col items-center h-full">
                  {option.icon}
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{option.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2nd section  */}
      <section className="bg-blue-50 mt-10 rounded-xl py-16 px-6">
        {/* Top Blue Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-600 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center text-white mb-12"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Ready to make a difference?
            </h2>
            <p className="text-white/80 max-w-lg">
              Whether you're a daily commuter, transport worker, or just
              passionate about better mobility, there's a place for you in our
              community.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg mt-6 md:mt-0 hover:bg-blue-100 transition"
          >
            Become a Member →
          </button>
        </motion.div>

        {/* Image Scroller */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden whitespace-nowrap"
        >
          <div className="flex animate-scroll-fast">
            {images.map((src, idx) => (
              <div key={idx} className="inline-block mx-4">
                <Image
                  src={src}
                  alt="Community member"
                  width={300}
                  height={200}
                  className="rounded-xl shadow-md"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 w-80 text-center">
              {!showForm ? (
                <>
                  <h3 className="text-xl font-bold mb-6 text-blue-700">
                    Join as
                  </h3>
                  <div className="flex flex-col gap-4">
                    <button
                      onClick={() => handleRoleSelect("User")}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                      As a User
                    </button>
                    <button
                      onClick={() => handleRoleSelect("Driver")}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                      As a Driver
                    </button>
                    <button
                      onClick={() => handleRoleSelect("Service Provider")}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                      As a Service Provider
                    </button>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 text-sm mt-6 underline"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-blue-700 mb-4">
                    Join as {selectedRole}
                  </h3>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border border-gray-300 rounded-lg px-3 py-2"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border border-gray-300 rounded-lg px-3 py-2"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setSelectedRole("");
                    }}
                    className="text-gray-500 text-sm mt-2 underline"
                  >
                    Back
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </section>

      
    </section>
    <section>
        <FooterSection/>
      </section>
    </>
    
  );
};

export default JoinCommunity;

// import React from 'react'
// import ScrollableSection from '../Components/ScrollableSection'

// import {blogData} from "../data"
// import JoinSection from '../Components/JoinSection'

// const Community = () => {
//   return (
//     <div>
//       <div className="bg-[#9cd6ff] rounded-3xl py-10 sm:py-10 md:py-20 px-10 sm:px-10 md:px-28 flex flex-col md:flex-row items-center md:items-start justify-between ">

//         {/* Left Side Content */}
//         <div className="md:w-1/2 w-full space-y-6 text-center md:text-left">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight">
//           CG Yatri Driver & Rider Plan
//           </h1>
//           <p className="text-base sm:text-lg text-gray-800">
//           CG Yatri isn’t just a travel app — it’s a community-driven initiative that brings together the people of Chhattisgarh under one platform. Our mission is to empower local drivers by giving them a fair and commission-free system, and to provide commuters with a smarter, safer, and more reliable travel experience. From Raipur’s busy streets to smaller towns, CG Yatri connects you with trusted local transport, making every ride feel personal, direct, and meaningful. We believe real change starts from the ground up — and with your support, we’re building a better way to move.
//           </p>

//         <div>
//           <h1>✅Zero Commission</h1>
//           <h1>✅pay only if you take ride</h1>

//         </div>

//         </div>

//         {/* Right Side Image Box */}
//         <div className="md:w-1/2 w-full flex justify-end items-end">
//           <div className="bg-white w-[100%] sm:w-[20vw] h-[30vw] sm:h-[20vw] rounded-3xl shadow-md flex items-center justify-center">
//             {/* Replace this with actual image if needed */}
//             <span className="text-gray-400">Image here</span>
//             {/* Example:
//             <Image src="/bus-map.png" alt="Map" width={300} height={300} className="rounded-3xl object-cover" />
//             */}
//           </div>
//         </div>
//       </div>
//       <div className=" rounded-3xl py-10 sm:py-10 md:py-20 px-10 sm:px-10 md:px-28 flex flex-col md:flex-row items-center md:items-start justify-between ">

//         {/* Left Side Content */}
//         <div className="md:w-1/2 w-full space-y-6 text-center md:text-left">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight">
//           Meet (driver-name for review), an Auto Driver from Raipur
//           </h1>
//           <p className="text-base sm:text-lg text-gray-800">
//           Earlier, I had to rely on agents and lost a share of my earnings. With CG Yatri, I get paid directly by customers. It’s simple, and I feel more independent
//           </p>

//         </div>

//         {/* Right Side Image Box */}
//         <div className="md:w-1/2 w-full flex justify-end items-end">
//           <div className="bg-white w-[100%] sm:w-[20vw] h-[30vw] sm:h-[20vw] rounded-3xl shadow-md flex items-center justify-center">
//             {/* Replace this with actual image if needed */}
//             <span className="text-gray-400">Image here</span>
//             {/* Example:
//             <Image src="/bus-map.png" alt="Map" width={300} height={300} className="rounded-3xl object-cover" />
//             */}
//           </div>
//         </div>
//       </div>
//     <div className='bg-[#9cd6ff] py-10 sm:py-10 md:py-20 px-10 sm:px-10 md:px-28'>
//          <h1 className='text-3xl font-semibold mb-5'>Feedback: What Our Riders Say</h1>

//          <ScrollableSection Data={blogData}/>
//     </div>
//     <div>
//       <JoinSection />
//     </div>
//     </div>
//   )
// }

// export default Community
