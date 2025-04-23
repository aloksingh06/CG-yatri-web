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
              Whether it's for daily commuters, tourists, or local travelers,
              our platform brings innovative mobility solutions that are secure,
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
              planning, and seamless integration of public and private
              transport, CG Yatri ensures a smart city experience.
            </p>
            <button className="bg-[#04214E] text-white px-6 py-2 rounded-md hover:bg-[#06306b]">
              Download the App
            </button>
          </div>
          <div className="w-[418px] h-[424px] bg-gray-300 rounded-[29px] mx-auto md:mx-0"></div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-[#7EC0FB] text-[#04214E] py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-lg leading-7 mb-4">
              Our platform is driven bu a young, multidiciplinary team of
              passionate changemakers aiming to create sustainable mobility for
              all.
            </p>
            <button className="bg-[#04214E] text-white px-6 py-2 rounded-md hover:bg-[#06306b]">
              Download the App
            </button>
          </div>
          <div className="w-[418px] h-[424px] bg-gray-300 rounded-[29px] mx-auto md:mx-0"></div>
        </div>
      </section>

      {/* Advisors & Collaborators Section */}
      <section className="bg-[#E2F0FF] text-[#04214E] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Advisors & Collaborators <span></span></h2>
          <p className="text-base mb-8">
            We're fortunate to be guided and supported by key figures from:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12 ">
            {[
              "Local Driver Unions",
              "Industry and Commerce department",
              "Traffic Control Department",
              "Raipur Munncipal Corporation",
              "Urban Development Authority",
              "Transport Innovation Council"
            ].map((name, index) => (
              <div key={index} className="flex flex-col items-center"> 
                <div className="h-32 w-74 bg-gray-300 rounded-md mb-2"></div>
                <p className="text-center font-medium">{name}</p>
                </div>
            ))}
          </div>
          <p className="text-lg font-medium text-center ">
            Together, we're co-creating a mobility ecosystem that belongs to the people - and works for the people.
          </p>
        </div>
      </section>

      {/* FAQ Sectiton */}
      {/* FAQ Section */}
<section className="bg-[#7EC0FB] text-[#04214E] py-12">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-4 text-center">FAQs</h2>

    {/* FAQ Questions */}
    {[ 
      {
        question: "Why should I use the CG Yatri app? What’s the key advantage?",
        answer:
          "CG Yatri provides an affordable, reliable, and accessible travel solution tailored for Chhattisgarh. It offers real-time updates, transparent pricing, and multimodal options."
      },
      {
        question: "How do I plan my ride from my current location to the nearest stop?",
        answer:
          "The app uses GPS to detect your location and suggests the nearest transit stop. You can also enter your destination to get route suggestions."
      },
      {
        question: "What makes our mobility solution different from Uber or Ola?",
        answer:
          "Unlike Uber or Ola, CG Yatri focuses on local connectivity, integrates public-private transport, and supports affordable travel across urban and semi-urban routes."
      },
      {
        question: "How is CG Yatri helping drivers earn better?",
        answer:
          "We provide a consistent customer base, low commission structure, and better route optimization to increase driver earnings."
      },
      {
        question: "How do I become a driver in CG Yatri?",
        answer:
          "You can register on the CG Yatri Driver app or visit our local onboarding center with ID proof, vehicle documents, and license."
      },
      {
        question: "What are our future plans in other towns and districts?",
        answer:
          "We're planning to expand across tier-2 and tier-3 towns of Chhattisgarh, ensuring last-mile connectivity even in semi-rural areas."
      },
      {
        question: "Where do I give suggestions and feedback?",
        answer:
          "You can send feedback through the app’s 'Help & Support' section or email us at feedback@cgyatri.in."
      }
    ].map((faq, i) => (
      <div key={i} className="mb-8">
        <div className="bg-[#E2F0FF] p-4 rounded-lg shadow-md group transition duration-300 hover:shadow-lg cursor-pointer">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-lg">{faq.question}</p>
            <span className="text-xl transform group-hover:rotate-180 transition-all duration-300 ease-in-out">
              &lt;
            </span>
          </div>
          <div className="max-h-0 overflow-hidden group-hover:max-h-[300px] transition-all duration-500 ease-in-out text-[#04214E] text-base mt-4">
            {faq.answer}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      <section>
        <FooterSection />
      </section>

    </div>
  );
};

export default About;
