import React from "react";
import FooterSection from "../Components/FooterSection";

const About = () => {
  return (
    <div className="text-[#04214E]">
      {/* About Us Section */}
      <section className="bg-[#7EC0FB] text-[#04214E] py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-sm font-semibold mb-2">Get to know us more</h2>
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-lg leading-7">
              We are building a smart, reliable, and sustainable urban
              transportation platform dedicated to the people of Chhattisgarh.
              Whether it's for daily commuters, tourists, or local travelers, our
              platform brings innovative mobility solutions that are secure,
              efficient, and environment-friendly. With a team of dedicated
              professionals, we aim to revolutionize how people move within our
              cities—through smart planning, real-time information systems,
              seamless access to a wide network of public, private, and shared
              travel options.
            </p>
          </div>
          <div className="w-[418px] h-[424px] bg-gray-300 rounded-[29px] mx-auto md:mx-0"></div>
        </div>
      </section>

      {/* CG Yatri App Section */}
      <section className="bg-[#E2F0FF] text-[#04214E] py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">CG Yatri App</h2>
            <p className="text-lg leading-7 mb-4">
              CG Yatri is a state-of-the-art mobility application developed to
              deliver real-time transport services to the residents of
              Chhattisgarh. With intuitive features, multi-modal journey
              planning, and seamless integration of public and private transport,
              CG Yatri ensures a smart city experience.
            </p>
            <button className="bg-[#04214E] text-white px-6 py-2 rounded-md hover:bg-[#06306b]">
              Download the App
            </button>
          </div>
          <div className="w-[418px] h-[424px] bg-gray-300 rounded-[29px] mx-auto md:mx-0"></div>
        </div>
      </section>

      {/* Our Mobility Section */}
      <section className="bg-[#7EC0FB] text-[#04214E] py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mobility</h2>
            <p className="text-lg leading-7 mb-4">
              We envision a platform where autos, buses, taxis, and bikes work
              together through a community-driven approach. With digital maps,
              real-time info, and inclusive design, we're making mobility
              smarter and more democratic across Chhattisgarh.
            </p>
            <button className="bg-[#04214E] text-white px-6 py-2 rounded-md hover:bg-[#06306b]">
              Download the App
            </button>
          </div>
          <div className="w-[418px] h-[424px] bg-gray-300 rounded-[29px] mx-auto md:mx-0"></div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="bg-[#E2F0FF] text-[#04214E] py-16 px-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg leading-7 mb-4">
              Our vision is to empower people to go the extra mile smarter than
              ever before. Through data-driven systems, smart mobility, and
              digital innovation, we aim to improve city lives and help cities
              become more connected, sustainable, and inclusive.
            </p>
            <button className="bg-[#04214E] text-white px-6 py-2 rounded-md hover:bg-[#06306b]">
              Download the App
            </button>
          </div>
          <div className="w-[418px] h-[424px] bg-gray-300 rounded-[29px] mx-auto md:mx-0"></div>
        </div>
      </section>
      <section>
        <FooterSection />
      </section>
    </div>
  );
};

export default About;
