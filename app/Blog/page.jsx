"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Zap,
  Headphones,
  Star,
  ActivitySquare,
  BadgeCheck,
  Undo2,
} from "lucide-react"; // Icons
import FooterSection from "../Components/FooterSection";

const AboutSection = () => {
  const router = useRouter();

  return (
    <>
      <section className="bg-white py-16 mt-8 px-6 md:px-20">
        {/* About Header */}
        <section>
          <div className="flex justify-center mb-6">
            <motion.button
              onClick={() => router.push("/About")}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full text-sm cursor-pointer"
            >
              About CG Yatri
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Your Journey, Our Commitment
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              CG Yatri is revolutionizing travel with seamless booking
              experiences and unparalleled service.
            </p>
          </motion.div>

          {/* Story and Banner */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Story
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2015, CG Yatri began as a small startup with a big
                vision - to make travel booking effortless and enjoyable. Today,
                we serve millions of travelers across the globe, offering
                comprehensive travel solutions.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our platform combines cutting-edge technology with human
                expertise to deliver personalized travel experiences.
              </p>

              <div className="flex gap-8">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Image
                      src="/user-icon.png"
                      alt="Travelers"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-blue-700">
                      5M+ Travelers
                    </p>
                    <p className="text-sm text-gray-500">Trusted annually</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Image
                      src="/globe-icon.png"
                      alt="Coverage"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-blue-700">
                      150+ Countries
                    </p>
                    <p className="text-sm text-gray-500">Worldwide coverage</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/travel-banner.jpg"
                  alt="Travel"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-blue-600 bg-opacity-80 p-4 text-white">
                  <h4 className="text-lg font-semibold">
                    Innovating Travel Since 2015
                  </h4>
                  <p className="text-sm">Pioneering digital travel solutions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-white py-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="bg-blue-100 rounded-2xl p-6 text-center hover:bg-blue-300 shadow-lg hover:scale-105 transition-transform">
              <div className="bg-blue-100 w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full">
                <Zap className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 ">Fast Booking</h3>
              <p className="text-gray-600">
                Our lightning fast platform ensures you can book your travel in
                seconds, not minutes.
              </p>
            </div>

            <div className="bg-blue-100 rounded-2xl p-6 text-center hover:bg-blue-300 shadow-lg hover:scale-105 transition-transform">
              <div className="bg-blue-100 w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full">
                <ShieldCheck className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                Bank level security protects your transactions and personal
                information.
              </p>
            </div>

            <div className="bg-blue-100 rounded-2xl p-6 text-center hover:bg-blue-300 shadow-lg hover:scale-105 transition-transform">
              <div className="bg-blue-100 w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full">
                <Headphones className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our travel experts are available round the clock to assist you.
              </p>
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 px-4"
          >
            <h2 className="text-3xl font-extrabold mb-4 text-blue-700">
              Why Choose CG Yatri?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-base">
              We blend{" "}
              <span className="text-blue-500 font-semibold">
                real-time tech
              </span>
              ,
              <span className="text-green-500 font-semibold">
                {" "}
                verified safety
              </span>
              , and{" "}
              <span className="text-purple-500 font-semibold">
                {" "}
                instant service
              </span>{" "}
              to create unforgettable travel memories.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-8">
              {/* Card 1 */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-gray-100 transition duration-100 cursor-pointer group"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="flex justify-center mb-4"
                >
                  <ActivitySquare
                    className="text-blue-600 group-hover:text-blue-800"
                    size={40}
                  />
                </motion.div>
                <h3 className="font-bold text-blue-700 text-lg">
                  Real-time Travel Updates
                </h3>
                <p className="text-gray-500 text-sm mt-3">
                  Get instant location tracking, live status, and smart alerts —
                  ensuring you're always one step ahead.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-gray-100 transition duration-100 cursor-pointer group"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="flex justify-center mb-4"
                >
                  <BadgeCheck
                    className="text-green-600 group-hover:text-green-800"
                    size={40}
                  />
                </motion.div>
                <h3 className="font-bold text-blue-700 text-lg">
                  100% Verified Drivers
                </h3>
                <p className="text-gray-500 text-sm mt-3">
                  Every driver is background-verified and professionally trained
                  for your maximum safety and comfort.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-gray-100 transition duration-100 cursor-pointer group"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="flex justify-center mb-4"
                >
                  <Undo2
                    className="text-purple-600 group-hover:text-purple-800"
                    size={40}
                  />
                </motion.div>
                <h3 className="font-bold text-blue-700 text-lg">
                  Instant Refund Promise
                </h3>
                <p className="text-gray-500 text-sm mt-3">
                  Cancel anytime and get your money back quickly without any
                  stress or delays.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Customer Testimonials */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-blue-50 py-12 rounded-2xl mb-20"
          >
            <h2 className="text-center text-2xl font-bold mb-8 text-gray-800">
              What Our Customers Say
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 px-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="text-yellow-400" size={20} />
                  <Star className="text-yellow-400" size={20} />
                  <Star className="text-yellow-400" size={20} />
                  <Star className="text-yellow-400" size={20} />
                  <Star className="text-yellow-400" size={20} />
                </div>
                <p className="text-gray-700 italic">
                  "CG Yatri made my travel hassle-free and quick. Highly
                  recommended!"
                </p>
                <p className="text-blue-700 mt-2 font-semibold">
                  - Ramesh Soni
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="text-yellow-400" size={20} />
                  <Star className="text-yellow-400" size={20} />
                  <Star className="text-yellow-400" size={20} />
                  <Star className="text-yellow-400" size={20} />
                  <Star className="text-yellow-400" size={20} />
                </div>
                <p className="text-gray-700 italic">
                  "Excellent customer service and easy-to-use app experience."
                </p>
                <p className="text-blue-700 mt-2 font-semibold">
                  - Seema Verma
                </p>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-blue-600 bg-opacity-90 text-white py-16 px-6 sm:px-12 md:px-20 rounded-2xl text-center relative overflow-hidden"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Stay Updated!
            </h2>
            <p className="mb-8 text-lg">
              Subscribe to get the latest travel deals, updates, and exclusive
              tips directly to your inbox.
            </p>

            {/* Newsletter Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {/* Card 1 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white text-blue-700 p-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500"
              >
                <h3 className="font-bold text-xl mb-3">Adventure Awaits</h3>
                <p className="text-gray-600">
                  Get the latest news and updates on your next adventure!
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white text-blue-700 p-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500"
              >
                <h3 className="font-bold text-xl mb-3">Exclusive Offers</h3>
                <p className="text-gray-600">
                  Unlock special discounts and curated deals just for you.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white text-blue-700 p-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500"
              >
                <h3 className="font-bold text-xl mb-3">Stress-Free Travel</h3>
                <p className="text-gray-600">
                  Tips and guides to make your journeys smooth and memorable.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white text-blue-700 p-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500"
              >
                <h3 className="font-bold text-xl mb-3">Early Access</h3>
                <p className="text-gray-600">
                  Be the first to know about new destinations and packages.
                </p>
              </motion.div>

              {/* Card 5 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white text-blue-700 p-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500"
              >
                <h3 className="font-bold text-xl mb-3">Inspiration Weekly</h3>
                <p className="text-gray-600">
                  Fresh travel ideas delivered to spark your wanderlust.
                </p>
              </motion.div>

              {/* Card 6 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white text-blue-700 p-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500"
              >
                <h3 className="font-bold text-xl mb-3">Safe Journeys</h3>
                <p className="text-gray-600">
                  Latest safety updates to keep your travels hassle-free.
                </p>
              </motion.div>
            </div>

            {/* Visit More Section */}
            <motion.div whileHover={{ scale: 1.05 }} className="mb-10">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300">
                Visit More Newsletters
              </button>
            </motion.div>

            {/* Subscribe Section */}
            <div className="flex justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-l-lg text-black bg-gray-300 focus:outline-none w-64"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-200 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </section>
      </section>

      {/* Footer */}
      <section>
        <FooterSection />
      </section>
    </>
  );
};

export default AboutSection;
