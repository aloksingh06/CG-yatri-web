"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ShieldCheck, Zap, Headphones } from "lucide-react"; // Icons
import FooterSection from '../Components/FooterSection'


const AboutSection = () => {
  const router = useRouter();
  const router2 = useRouter();

  return (
    <>
    <section className="bg-white py-16 mt-8 px-6 md:px-20">
      {/* 1st section */}
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

        {/* Title and Subtitle */}
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
            CG Yatri is revolutionizing travel with seamless booking experiences
            and unparalleled service.
          </p>
        </motion.div>

        {/* Content and Image */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Text Content */}
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
              Our platform combines cutting-edge technology with human expertise
              to deliver personalized travel experiences.
            </p>

            {/* Stats */}
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

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/travel-banner.jpg" // apna image yha replace kar dena
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

      {/* 2nd section  */}
      <section className="bg-white py-16 px-6">
        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {/* Feature Card 1 */}
          <div className="bg-blue-50 rounded-2xl p-6 text-center shadow hover:shadow-md transition">
            <div className="bg-blue-100 w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full">
              <Zap className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Fast Booking</h3>
            <p className="text-gray-600">
              Our lightning fast platform ensures you can book your travel in
              seconds, not minutes.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-blue-50 rounded-2xl p-6 text-center shadow hover:shadow-md transition">
            <div className="bg-blue-100 w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full">
              <ShieldCheck className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Secure Payments</h3>
            <p className="text-gray-600">
              Bank level security protects your transactions and personal
              information.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-blue-50 rounded-2xl p-6 text-center shadow hover:shadow-md transition">
            <div className="bg-blue-100 w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full">
              <Headphones className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our travel experts are available round the clock to assist you.
            </p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-blue-50 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Our Mission</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            To empower travelers with innovative technology that simplifies the
            entire travel experience, from inspiration to destination and
            beyond.
          </p>
          <button
            onClick={() => router.push("/join-us")}
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Join Our Journey →
          </button>
        </motion.div>
      </section>
    </section>
    <section>
        <FooterSection/>
      </section>
    </>
    
  );
};

export default AboutSection;

// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { FaCar, FaBus, FaShieldAlt } from "react-icons/fa"; // Logos ke liye react-icons use kiya hai

// const blogs = [
//   {
//     id: 1,
//     category: "Auto Tips",
//     date: "May 15, 2023",
//     title: "How to Book the Perfect Auto for Your Commute",
//     description:
//       "Learn the best practices for booking autos through CG Yatri to ensure timely pickups and fair pricing every time.",
//     icon: <FaCar className="text-4xl text-blue-500" />,
//     link: "/blog/auto-tips",
//   },
//   {
//     id: 2,
//     category: "Bus Updates",
//     date: "May 10, 2023",
//     title: "New Bus Routes Added in Raipur City",
//     description:
//       "Discover the latest bus route expansions that will connect more neighborhoods and reduce your commute time.",
//     icon: <FaBus className="text-4xl text-blue-500" />,
//     link: "/blog/bus-updates",
//   },
//   {
//     id: 3,
//     category: "Safety Tips",
//     date: "May 5, 2023",
//     title: "Essential Safety Measures for Night Commutes",
//     description:
//       "Important safety protocols every commuter should follow when traveling after dark in the city.",
//     icon: <FaShieldAlt className="text-4xl text-blue-500" />,
//     link: "/blog/safety-tips",
//   },
// ];

// const categories = [
//   { name: "All Posts", link: "/blog" },
//   { name: "Auto Tips", link: "/blog/auto-tips" },
//   { name: "Bus Updates", link: "/blog/bus-updates" },
//   { name: "Safety Tips", link: "/blog/safety-tips" },
//   { name: "Commuter Stories", link: "/blog/commuter-stories" },
// ];

// const BlogSection = () => {
//   return (
//     <section className="py-12 px-6 mt-3 bg-blue-50">
//       {/* content section */}
//       <section className="py-12 px-6 bg-blue-50 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
//             Latest Travel Updates & Tips
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto mb-8">
//             Stay informed with our expert advice, service updates, and commuter
//             stories to make your journeys smoother.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center gap-4"
//         >
//           {categories.map((category, idx) => (
//             <Link
//               key={idx}
//               href={category.link}
//               className="bg-white text-blue-700 px-4 py-2 rounded-full border hover:bg-blue-100 transition font-medium"
//             >
//               {category.name}
//             </Link>
//           ))}
//         </motion.div>
//       </section>

//         {/* blog box section */}
//       <div className="max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-3 gap-8">
//           {blogs.map((blog, index) => (
//             <motion.div
//               key={blog.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
//             >
//               <div className="bg-blue-100 flex items-center justify-center h-58">
//                 {blog.icon}
//               </div>
//               <div className="p-6 flex flex-col flex-1">
//                 <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
//                   <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
//                     {blog.category}
//                   </span>
//                   <span>{blog.date}</span>
//                 </div>
//                 <h3 className="text-lg font-semibold mb-2 text-blue-900">
//                   {blog.title}
//                 </h3>
//                 <p className="text-gray-600 flex-1">{blog.description}</p>
//                 <Link
//                   href={blog.link}
//                   className="text-blue-600 font-medium mt-4 hover:underline"
//                 >
//                   Read More →
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="text-center mt-10">
//           <Link
//             href="/blog"
//             className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
//           >
//             View All Blog Posts
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;

// // import React from 'react'
// // import { blogData} from '../data'
// // import Image from 'next/image'
// // import ScrollableSection from '../Components/ScrollableSection'

// // import autoimage from '../images/autoimage.jpg'
// // import FooterSection from '../Components/FooterSection'
// // const Blog = () => {

// //   return (
// //     <div  >
// //         <div className='py-16 px-6 md:px-40'>
// //         <div className='flex flex-col gap-5'>
// //           <h1 className='text-5xl font-semibold'>Latest Updates & Travel Tips</h1>
// //           <p className='text-gray-700 text-lg'>

// //           Get the latest news, travel tips, and updates about smart commuting in Chhattisgarh.
// //           </p>
// //           <p className='text-xl font-semibold'>At CG Yatri, we believe in making travel simple and stress-free. Whether you're a daily commuter or an occasional rider, our blog brings you helpful tips, system updates, and insights to make your journey smoother across Raipur and beyond.</p>
// //         </div>
// //         <div>
// //        <ScrollableSection Data={blogData} />
// //         </div>
// //         </div>
// //         <div className='flex flex-col lg:flex-row gap-10 justify-between items-center my-16 bg-[#7ec0fb] p-10  shadow-md py-16 px-6 md:px-40'>
// //           <div className='w-full lg:w-1/2 flex flex-col gap-5'>
// //           <h1 className='text-5xl font-semibold'>How CG Yatri is Making Daily Travel Easier in Raipur</h1>
// //           <p className='text-gray-700 text-lg'>

// //           From direct driver payments to live bus tracking, know how CG Yatri is changing the way Raipur commutes.
// //           </p>
// //           <h1>
// //           CG Yatri is transforming public transport in Raipur by putting power directly in the hands of commuters and drivers. With features like live bus tracking, real-time vehicle availability, and easy ticket booking, daily travel has never been this smooth.
// // What sets us apart is direct driver payments — no third-party commissions, no hidden charges. It builds trust, transparency, and supports the local driver community.
// // Whether you're commuting by bus, auto, or cab, CG Yatri ensures a safe, reliable, and hassle-free experience, all in one simple app.
// //           </h1>
// //           </div>
// //           <div className='w-full lg:w-1/2 flex justify-center'>
// //               <Image
// //                            src={autoimage}
// //                            alt='blog-image'
// //                            width={400}
// //                            height={150}
// //                            className="rounded-xl object-cover shadow-md"
// //                          />
// //           </div>
// //         </div>

// //         {/* real story */}
// //          <div className='py-16 px-6 md:px-40    '>
// //         <div className='flex flex-col gap-5'>
// //         <h1 className='text-5xl font-semibold'>Real Stories, Real Journeys</h1>
// //         <h1>Discover how people across Raipur are commuting smarter with CG Yatri.</h1>
// //         </div>
// //         <div>
// //           <ScrollableSection Data={blogData} />
// //          </div>
// //          </div>

// //         {/* Footer */}
// //         <div>
// //           <FooterSection />
// //         </div>
// //     </div>
// //   )
// // }

// // export default Blog
