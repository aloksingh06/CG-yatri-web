"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Download, Info, Smartphone, Network, Expand } from "lucide-react";
import FooterSection from "../Components/FooterSection";

const HeroSection = () => {
  const features = [
    {
      icon: <Smartphone size={32} className="text-blue-600" />,
      title: "Mobile App Convenience",
      description:
        "Book and manage your travel from anywhere with our user-friendly mobile app, launching first in Raipur.",
    },
    {
      icon: <Network size={32} className="text-blue-600" />,
      title: "Integrated Network",
      description:
        "Combining government and private transportation options for comprehensive travel solutions across Chhattisgarh.",
    },
    {
      icon: <Expand size={32} className="text-blue-600" />,
      title: "Statewide Expansion",
      description:
        "Starting with Raipur, we're committed to expanding our services to cover all of Chhattisgarh.",
    },
  ];

  return (
    <div className=" w-full min-h-screen mt-12 bg-gray-100">
      {/* 1st section  */}
      <section className="bg-white text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-b from-blue-600 to-blue-400 text-white py-10 text-center h-98 flex flex-col justify-center items-center"
        >
          <h1 className="text-4xl font-bold mb-4">About CG Yatri</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Revolutionizing mobility in Chhattisgarh with seamless
            transportation solutions for riders, drivers, and service providers.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Story</h2>
            <p className="mb-4">
              CG Yatri is a driver-centric and customer-friendly mobility
              platform, developed in collaboration with the Chhattisgarh
              Government. Our vision is to contribute meaningfully to the
              state’s Integrated and Open Mobility movement by creating a
              transparent, inclusive, and technology-driven transportation
              network.  
            </p>
            <p className="mb-6">
              We aim to build an open ecosystem where innovators in the mobility
              domain can access the tools, data, and infrastructure they need to
              bring their ideas to life. CG Yatri is not just a service — it's a
              mobility backbone that enables collaboration across public and
              private stakeholders for the greater good of the people of
              Chhattisgarh
            </p>
            <p className="mb-6">
              Our mission is to empower drivers with greater earnings and
              visibility, while offering citizens a seamless travel experience.
              By bridging the gap between demand and supply, and ensuring fair
              and direct payments, CG Yatri creates a platform where both
              drivers and the public support and uplift each other — with the
              strength of community, innovation, and governance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-blue-50 text-blue-800 p-4 rounded shadow"
              >
                <p className="text-xl font-bold">50,000+</p>
                <p className="text-sm">Happy Riders</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-blue-50 text-blue-800 p-4 rounded shadow"
              >
                <p className="text-xl font-bold">5,000+</p>
                <p className="text-sm">Verified Drivers</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-blue-50 text-blue-800 p-4 rounded shadow"
              >
                <p className="text-xl font-bold">20+</p>
                <p className="text-sm">Service Providers</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-lg overflow-hidden"
          >
            <Image
              src="/images/easyRide.svg" // Make sure this image is placed in the public folder
              alt="Truck on highway"
              width={750}
              height={500}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* 2nd section  */}
      {/* <section className="py-16 px-6 md:px-20  text-blue-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Why Choose CG Yatri?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-blue-700 mb-12 max-w-2xl mx-auto"
          >
            We're revolutionizing travel in Chhattisgarh with innovative
            features designed to make your journey seamless.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <div className="mb-6 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-blue-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 3rd section  */}
      <section className="bg-blue-600 text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Vision for Chhattisgarh Travel
            </h2>
            <p className="mb-6 text-blue-100">
              At CG Yatri, our goal is to make travel across Chhattisgarh more
              accessible and efficient. We're starting by launching a mobile app
              in Raipur to provide a seamless travel experience.
            </p>
            <p className="mb-6 text-blue-100">
              Our platform integrates both government and private transportation
              communities to offer a wide range of options for users. While
              Raipur is our initial focus, we aim to expand statewide, reaching
              all of Chhattisgarh.
            </p>
            <p className="text-blue-100">
              As we grow, we'll continuously improve the app based on user
              feedback, ensuring better services and a smoother travel
              experience for everyone.
            </p>
          </motion.div>

          {/* Right Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white max-h-[70vh]  rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
          >
            <Image
              //
              src="/images/cgLandscp.jpg"
              alt="Chhattisgarh landscape"
              width={400}
              height={200}
              className="rounded-xl mb-4 object-fill"
            />
            <h3 className="text-blue-900 text-xl font-semibold mb-2">
              Connecting Chhattisgarh
            </h3>
            <p className="text-blue-700">
              From Raipur to every corner of the state
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4th section  */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Phone Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/images/mobile.png"
              alt="Mobile App Preview"
              width={300}
              height={600}
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Right Side - Download Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Coming Soon to Your Smartphone
            </h2>
            <p className="text-gray-600 mb-8">
              Our mobile app will revolutionize how you travel across
              Chhattisgarh.
            </p>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              {/* Download Button */}
              <a
                href="#"
                className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition w-full md:w-auto text-center"
              >
                Download App
              </a>

              {/* Ratings Box */}
              <div className="bg-blue-100 text-blue-800 px-6 py-3 rounded-xl flex items-center gap-2 justify-center md:justify-start">
                ⭐ 4.8 Rating | 500+ Reviews
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer section  */}
      <section>
        <FooterSection />
      </section>
    </div>
  );
};

export default HeroSection;

// import React from "react";
// import FooterSection from "../Components/FooterSection";

// const About = () => {
//   return (
//     <div className="text-[#04214E] ">
//       {/* About Us Section */}
//       <section className="bg-[#7EC0FB] text-[#04214E] py-12">
//         <div className="w-full px-[100px]  h-[75vh]">
//           <div>
//             <h2 className="text-sm font-semibold mb-2">Get to know us more</h2>
//             <h1 className="text-4xl font-bold mb-6">About Us</h1>
//             <p className="text-lg leading-7 text-justify">
//               CG Yatri is a driver-centric and customer-friendly mobility
//               platform, developed in collaboration with the Chhattisgarh
//               Government. Our vision is to contribute meaningfully to the
//               state’s Integrated and Open Mobility movement by creating a
//               transparent, inclusive, and technology-driven transportation
//               network.
//             </p>
//             <br />
//             <p className="text-lg leading-7 text-justify">
//               We aim to build an open ecosystem where innovators in the mobility
//               domain can access the tools, data, and infrastructure they need to
//               bring their ideas to life. CG Yatri is not just a service — it's a
//               mobility backbone that enables collaboration across public and
//               private stakeholders for the greater good of the people of
//               Chhattisgarh.
//             </p>
//             <br />
//             <p className="text-lg leading-7 text-justify">
//               Our mission is to empower drivers with greater earnings and
//               visibility, while offering citizens a seamless travel experience.
//               By bridging the gap between demand and supply, and ensuring fair
//               and direct payments, CG Yatri creates a platform where both
//               drivers and the public support and uplift each other — with the
//               strength of community, innovation, and governance.
//             </p>
//           </div>
//           {/* <div className="w-[418px] h-[424px] bg-gray-300 rounded-[29px] mx-auto md:mx-0"></div> */}
//         </div>
//       </section>

//       {/* CG Yatri App Section */}
//       <section className="bg-[#E2F0FF] flex justify-center items-center h-screen text-[#04214E] py-12">
//         <div className=" flex justify-between px-[100px]">
//           <div className="w-[50%] flex flex-col justify-center">
//             <h2 className="text-3xl font-bold mb-4">CG Yatri App</h2>
//             <p className="text-lg leading-7 mb-4">
//               The CG Yatri app is designed to offer seamless, multimodal
//               transport solutions to commuters — from buses and autos to cabs
//               and more — all in one place. Built on a zero-commission model, it
//               ensures that 100% of your payment goes directly to the driver,
//               supporting better earnings and livelihoods for them and their
//               families. Additionally We are also enabling ad-based revenue
//               streams for drivers to earn beyond rides — another step towards
//               financial empowerment
//             </p>
//             <br />
//             <p className="text-lg leading-7 mb-4">
//               By removing middlemen and enabling direct connections, CG Yatri
//               brings affordability to commuters and dignity to drivers —
//               redefining how mobility works in Chhattisgarh.
//             </p>
//             <button className="bg-[#04214E] w-[30%] text-white px-6 py-2 rounded-md hover:bg-[#06306b]">
//               Download the App
//             </button>
//           </div>
//           <div className="w-[470px] h-[424px] bg-gray-300 rounded-[29px] mx-auto md:mx-0"></div>
//         </div>
//       </section>

//       {/* Our Team Section */}
//       <section className="bg-[#7EC0FB] flex justify-center items-center h-screen text-[#04214E] py-12">
//         <div className=" flex justify-between px-[100px]">
//           <div className="w-[50%] flex flex-col justify-center">
//             <h2 className="text-3xl font-bold mb-4">Our Team</h2>
//             <p className="text-lg leading-7 mb-4">
//               We're a group of passionate problem solvers, technologists, and
//               changemakers committed to transforming how Chhattisgarh moves.
//             </p>
//             <p className="text-lg leading-7 mb-4">
//               What drives us? The belief that mobility should be inclusive,
//               efficient, and empowering — for commuters, drivers, and cities
//               alike.
//             </p>
//             <button className="bg-[#04214E] w-[30%] text-white px-6 py-2 rounded-md hover:bg-[#06306b]">
//               Download the App
//             </button>
//           </div>
//           <div className="w-[470px] h-[424px] bg-gray-300 rounded-[29px] mx-auto md:mx-0"></div>
//         </div>
//       </section>

//       {/* Advisors & Collaborators Section */}
//       <section className="bg-[#E2F0FF] text-[#04214E] py-12">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-6">
//             Advisors & Collaborators <span></span>
//           </h2>
//           <p className="text-base mb-8">
//             We're fortunate to be guided and supported by key figures from:
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12 ">
//             {[
//               "Local Driver Unions",
//               "Industry and Commerce department",
//               "Traffic Control Department",
//               "Raipur Munncipal Corporation",
//               "Urban Development Authority",
//               "Transport Innovation Council",
//             ].map((name, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div className="h-32 w-74 bg-gray-300 rounded-md mb-2"></div>
//                 <p className="text-center font-medium">{name}</p>
//               </div>
//             ))}
//           </div>
//           <p className="text-lg font-medium text-center ">
//             Together, we're co-creating a mobility ecosystem that belongs to the
//             people - and works for the people.
//           </p>
//         </div>
//       </section>

//       {/* FAQ Sectiton */}
//       {/* FAQ Section */}
//       <section className=" text-[#04214E] py-12">
//         <div className="max-w-6xl mx-auto px-4 ">
//           <h2 className="text-3xl font-bold mb-4 text-center">FAQs</h2>

//           {/* FAQ Questions */}
//           {[
//             {
//               question:
//                 "When will the app be launched and who owns the CG Yatri app?",
//               answer: "",
//             },
//             {
//               question:
//                 "How is CG Yatri helpful and how is it different from other ride apps?",
//               answer: "",
//             },
//             {
//               question: "How do I book a ride through the CG YAtri app?",
//               answer: "",
//             },
//             {
//               question:
//                 "Can I track ublic transport like city buses in real-tiem?",
//               answer: "",
//             },
//             {
//               question: "Is CG Yatri cheaper than other platforms?",
//               answer: "",
//             },
//             {
//               question: "How is CG Yatri ensuring fare transperancy?",
//               answer: "",
//             },
//             {
//               question: "DO I have to ay extra charges apart from the fare?",
//               answer: "",
//             },
//             {
//               question: "What modes of transport are available on CG Yatri?",
//               answer: "",
//             },
//             {
//               question: "Is CG Yatri available outside Raipur?",
//               answer: "",
//             },
//             {
//               question: "How do I report a problem with a ride or driver?",
//               answer: "",
//             },
//           ].map((faq, i) => (
//             <div key={i} className="mb-8 ">
//               <div className=" border-1 p-4 rounded-lg shadow-md group transition duration-300 hover:shadow-lg cursor-pointer">
//                 <div className="flex items-center justify-between">
//                   <p className="font-semibold text-lg">{faq.question}</p>
//                   <span className="text-xl transform group-hover:rotate-180 transition-all duration-300 ease-in-out">
//                     &lt;
//                   </span>
//                 </div>
//                 <div className="max-h-0 overflow-hidden group-hover:max-h-[300px] transition-all duration-500 ease-in-out text-[#04214E] text-base mt-4">
//                   {faq.answer}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section>
//         <FooterSection />
//       </section>
//     </div>
//   );
// };

// export default About;
