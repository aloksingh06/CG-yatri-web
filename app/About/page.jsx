import React from "react";
import FooterSection from "../Components/FooterSection";

const About = () => {
  return (
    <div className="text-[#04214E] ">
      {/* About Us Section */}
      <section className="bg-[#7EC0FB] text-[#04214E] py-12">
        <div className="w-full px-[100px]  h-[75vh]">
          <div>
            <h2 className="text-sm font-semibold mb-2">Get to know us more</h2>
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-lg leading-7 text-justify">
              CG Yatri is a driver-centric and customer-friendly mobility
              platform, developed in collaboration with the Chhattisgarh
              Government. Our vision is to contribute meaningfully to the
              state’s Integrated and Open Mobility movement by creating a
              transparent, inclusive, and technology-driven transportation
              network.
            </p>
            <br />
            <p className="text-lg leading-7 text-justify">
              We aim to build an open ecosystem where innovators in the mobility
              domain can access the tools, data, and infrastructure they need to
              bring their ideas to life. CG Yatri is not just a service — it's a
              mobility backbone that enables collaboration across public and
              private stakeholders for the greater good of the people of
              Chhattisgarh.
            </p>
            <br />
            <p className="text-lg leading-7 text-justify">
              Our mission is to empower drivers with greater earnings and
              visibility, while offering citizens a seamless travel experience.
              By bridging the gap between demand and supply, and ensuring fair
              and direct payments, CG Yatri creates a platform where both
              drivers and the public support and uplift each other — with the
              strength of community, innovation, and governance.
            </p>
          </div>
          {/* <div className="w-[418px] h-[424px] bg-gray-300 rounded-[29px] mx-auto md:mx-0"></div> */}
        </div>
      </section>

      {/* CG Yatri App Section */}
      <section className="bg-[#E2F0FF] flex justify-center items-center h-screen text-[#04214E] py-12">
        <div className=" flex justify-between px-[100px]">
          <div className="w-[50%] flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">CG Yatri App</h2>
            <p className="text-lg leading-7 mb-4">
              The CG Yatri app is designed to offer seamless, multimodal
              transport solutions to commuters — from buses and autos to cabs
              and more — all in one place. Built on a zero-commission model, it
              ensures that 100% of your payment goes directly to the driver,
              supporting better earnings and livelihoods for them and their
              families. Additionally We are also enabling ad-based revenue
              streams for drivers to earn beyond rides — another step towards
              financial empowerment  
            </p>
            <br />
            <p className="text-lg leading-7 mb-4">
              By removing middlemen and enabling direct connections, CG Yatri
              brings affordability to commuters and dignity to drivers —
              redefining how mobility works in Chhattisgarh.
            </p>
            <button className="bg-[#04214E] w-[30%] text-white px-6 py-2 rounded-md hover:bg-[#06306b]">
              Download the App
            </button>
          </div>
          <div className="w-[470px] h-[424px] bg-gray-300 rounded-[29px] mx-auto md:mx-0"></div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-[#7EC0FB] flex justify-center items-center h-screen text-[#04214E] py-12">
        <div className=" flex justify-between px-[100px]">
          <div className="w-[50%] flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-lg leading-7 mb-4">
              We're a group of passionate problem solvers, technologists, and
              changemakers committed to transforming how Chhattisgarh moves.
            </p>
            <p className="text-lg leading-7 mb-4">
              What drives us? The belief that mobility should be inclusive,
              efficient, and empowering — for commuters, drivers, and cities
              alike.
            </p>
            <button className="bg-[#04214E] w-[30%] text-white px-6 py-2 rounded-md hover:bg-[#06306b]">
              Download the App
            </button>
          </div>
          <div className="w-[470px] h-[424px] bg-gray-300 rounded-[29px] mx-auto md:mx-0"></div>
        </div>
      </section>

      {/* Advisors & Collaborators Section */}
      <section className="bg-[#E2F0FF] text-[#04214E] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Advisors & Collaborators <span></span>
          </h2>
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
              "Transport Innovation Council",
            ].map((name, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="h-32 w-74 bg-gray-300 rounded-md mb-2"></div>
                <p className="text-center font-medium">{name}</p>
              </div>
            ))}
          </div>
          <p className="text-lg font-medium text-center ">
            Together, we're co-creating a mobility ecosystem that belongs to the
            people - and works for the people.
          </p>
        </div>
      </section>

      {/* FAQ Sectiton */}
      {/* FAQ Section */}
      <section className=" text-[#04214E] py-12">
        <div className="max-w-6xl mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-4 text-center">FAQs</h2>

          {/* FAQ Questions */}
          {[
            {
              question:
                "When will the app be launched and who owns the CG Yatri app?",
              answer: "",
            },
            {
              question:
                "How is CG Yatri helpful and how is it different from other ride apps?",
              answer: "",
            },
            {
              question: "How do I book a ride through the CG YAtri app?",
              answer: "",
            },
            {
              question:
                "Can I track ublic transport like city buses in real-tiem?",
              answer: "",
            },
            {
              question: "Is CG Yatri cheaper than other platforms?",
              answer: "",
            },
            {
              question: "How is CG Yatri ensuring fare transperancy?",
              answer: "",
            },
            {
              question: "DO I have to ay extra charges apart from the fare?",
              answer: "",
            },
            {
              question: "What modes of transport are available on CG Yatri?",
              answer: "",
            },
            {
              question: "Is CG Yatri available outside Raipur?",
              answer: "",
            },
            {
              question: "How do I report a problem with a ride or driver?",
              answer: "",
            },
          ].map((faq, i) => (
            <div key={i} className="mb-8 ">
              <div className=" border-1 p-4 rounded-lg shadow-md group transition duration-300 hover:shadow-lg cursor-pointer">
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
