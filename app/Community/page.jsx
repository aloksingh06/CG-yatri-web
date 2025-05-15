"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FooterSection from '../Components/FooterSection';
import {
  FaCar,
  FaUsers,
  FaHandHoldingHeart,
  FaMapMarkedAlt,
} from "react-icons/fa";

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

const blogs = [
  {
    title: "5 Essential Safety Tips for CG Yatri Drivers",
    date: "May 5, 2025",
    desc: "Learn how to stay safe on the road with these essential tips for drivers using the CG Yatri platform.",
    img: "https://images.unsplash.com/photo-1586739050530-2fddeb1770d4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Rider Safety with CG-Yatri",
    date: "April 28, 2025",
    desc: "Your safety is our top priority. Know how we ensure secure rides every time with verified partners.",
    img: "https://images.unsplash.com/photo-1653463207246-1dc03899dfe0?q=80&w=1970&auto=format&fit=crop",
  },
  {
    title: "Why Locals Choose CG-Yatri",
    date: "April 15, 2025",
    desc: "Fast, affordable, and reliable — CG-Yatri is becoming the preferred choice across Chhattisgarh.",
    img: "https://images.unsplash.com/photo-1493401415972-d4001c9fa2aa?q=80&w=2070&auto=format&fit=crop",
  },
];

const images = [
  "https://images.unsplash.com/photo-1604343670513-af01df1260a1?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1640262653876-972eee988fd3?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1742282302316-c96c1f516776?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1656236866815-78ecbb5bb86d?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1709304815991-b67cdaf889c7?q=80&w=2073&auto=format&fit=crop",
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

    if (selectedRole === "User") {
      router.push("/join/user");
    } else if (selectedRole === "Driver") {
      router.push("/join/driver");
    } else if (selectedRole === "Service Provider") {
      router.push("/join/service-provider");
    }
  };

  return (
    <>
      <style jsx global>{`
        @keyframes scrollLoop {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scroll-loop {
          display: flex;
          width: max-content;
          animation: scrollLoop 25s linear infinite;
        }
      `}</style>

      <section className="py-16 px-6 mt-10 bg-blue-100 text-center">
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
            experiences across our cities. Your participation makes a difference!
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

      <section className="bg-blue-50 mt-10 rounded-xl py-16 px-6">
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden"
        >
          <div className="scroll-loop">
            {[...images, ...images].map((src, idx) => (
              <div key={idx} className="w-60 mx-2">
                <img
                  src={src}
                  alt="Community member"
                  className="w-full h-52 object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 w-80 text-center">
              {!showForm ? (
                <>
                  <h3 className="text-xl font-bold mb-6 text-blue-700">Join as</h3>
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

      <section className="bg-white min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-3">CG Yatri Blog</h1>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Insights, tips and news for riders, drivers, and mobility service providers
          </p>
          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {blogs.map((blog, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <img src={blog.img} alt={blog.title} className="w-full h-52 object-cover" />
                <div className="p-5 text-left">
                  <h2 className="text-lg font-semibold text-gray-800">{blog.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                  <p className="text-gray-600 text-sm mb-4">{blog.desc}</p>
                  <a href="#" className="text-pink-600 text-sm font-medium hover:underline">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <FooterSection />
      </section>
    </>
  );
};

export default JoinCommunity;
