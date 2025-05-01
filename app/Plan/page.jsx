"use client";

import React, { useState, useRef, useEffect } from "react";
import { User, Wrench } from "lucide-react"; // Icons for Driver and Service Provider

const faqData = {
  drivers: [
    {
      question: "What is the biggest benefit of joining CG Yatri",
      answer:
        "With CG Yatri, you earn 100% of the fare and can also earn extra through advertisements placed on your vehicle - more rides + extra income = better earnings for you and your family. No middlemen or commission, Daily earnings go directly to your account, Transparent fares fixed by the government, Support from Government & Driver's Union",
    },
    {
      question: "Is there any commission charged by CG Yatri?",
      answer:
        "No commission at all. Drivers pay a small daily service fee only on the days they are active on the app.",
    },
    {
      question: "How can I join CG Yatri as a driver?",
      answer:
        "You can sign up easily through the CG Yatri Driver App or visit our help center/kiosk (Drivers union made and managed). Upload your documents and start taking rides once verified.",
    },
    {
      question: "What is the daily service fee model?",
      answer:
        "You only pay a low daily fee (capped at a fixed amount) on the days you use the platform - earn as much as you want with no extra cuts.",
    },
    {
      question: "Do I need a smartphone to use CG Yatri?",
      answer:
        "Yes, having a smartphone helps you receive bookings and use the driver app. We'll also help you if you face any issues with using the app.",
    },
    {
      question: "Can I work with CG Yatri and other platforms too?",
      answer:
        "Yes! CG Yatri is an open platform - you're free to take rides from other apps as well. Your vehicle, your choice",
    },
  ],
  providers: [
    {
      question: "I run a rental/packer/mover service - how do I list my business?",
      answer:
        "You can list your service easily on CG Yatri by signing up through our app or website. Fill in your business details and our team will reach out to you.",
    },
    {
      question: "What are the charges for listing services on CG Yatri?",
      answer:
        "There's no commission. Just a small daily or per-booking service fee - only when you get a booking. No hidden costs, full control over your earnings.",
    },
    {
      question: "How do I manage bookings through the platform?",
      answer:
        "You'll get a simple dashboard where you can: View and accept bookings, Set availability and service areas, Communicate with customers, Track payments and performance.",
    },
    {
      question: "How can I become a service provider for CG Yatri?",
      answer:
        "To become a service provider, sign up on the CG Yatri platform as a partner. Provide your business details, including services offered, pricing, and contact information. After verification, your services will be listed on the app.",
    },
    {
      question: "What types of services can I offer as a provider?",
      answer:
        "As a provider, you can offer services like vehicle maintenance, cleaning, repairs, roadside assistance, fuel stations, and insurance.",
    },
    {
      question: "How do I manage my service listings?",
      answer:
        "You can manage your service listings through the provider portal on CG Yatri. Update your services, pricing, and availability there.",
    },
    {
      question: "What are the benefits of being a CG Yatri provider?",
      answer:
        "You gain access to a large customer base, increased visibility, seamless booking and payment integration, and analytics to track service performance.",
    },
    {
      question: "What payment methods are available for service providers?",
      answer:
        "Payments to service providers are made via bank transfers and digital wallets. Providers can check transaction history in the provider portal.",
    },
  ],
};

const FAQPage = () => {
  const [activeTab, setActiveTab] = useState("drivers");
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(null);
  const faqSectionRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filterFAQs = (faqList) =>
    faqList.filter((faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    );

  useEffect(() => {
    // Scroll to FAQ section on tab change
    if (faqSectionRef.current) {
      faqSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeTab]);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-12 min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#9cd6ff] rounded-3xl p-6 mt-16 sm:p-10 lg:p-16 flex flex-col md:flex-row items-center justify-between shadow-lg">
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-black">
            CG Yatri Driver & Rider Plan
          </h1>
          <p className="text-gray-800 text-base">
            To ensure CG Yatri remains a reliable, zero-commission mobility
            platform, we’ve introduced affordable plans for both drivers and
            riders.
          </p>
          <div className="space-y-1">
            <p className="text-green-600 font-medium">✅ Zero Commission</p>
            <p className="text-green-600 font-medium">
              ✅ Pay only if you take a ride
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <div className="bg-white w-[90%] sm:w-[80%] h-[220px] sm:h-[280px] md:h-[320px] rounded-3xl shadow-md overflow-hidden flex items-center justify-center">
            <img
              src="/images/plan_hero_section.jpg"
              alt="Plan Hero Section"
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div ref={faqSectionRef}>
        <div className="text-center my-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-md mt-2 text-gray-500">
            Find answers to the most common queries.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-6">
          {[
            { key: "drivers", label: "Drivers", icon: <User className="w-5 h-5 mr-2" /> },
            {
              key: "providers",
              label: "Service Providers",
              icon: <Wrench className="w-5 h-5 mr-2" />,
            },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                setOpenIndex(null);
              }}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition ${
                activeTab === tab.key
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setOpenIndex(null);
            }}
            className="p-2 sm:p-3 w-[90%] sm:w-2/3 md:w-1/2 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* FAQ List */}
        <div className="space-y-6 max-w-6xl mx-auto">
          {filterFAQs(faqData[activeTab]).length === 0 ? (
            <p className="text-center text-gray-500">No results found.</p>
          ) : (
            filterFAQs(faqData[activeTab]).map((faq, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <div
                  onClick={() => toggleFAQ(index)}
                  className="cursor-pointer p-4 flex justify-between items-center hover:bg-blue-50"
                >
                  <h4
                    className={`text-base sm:text-lg font-medium ${
                      openIndex === index ? "text-blue-600" : "text-gray-800"
                    }`}
                  >
                    {faq.question}
                  </h4>
                  <span
                    className={`text-xl transition-transform duration-300 ${
                      openIndex === index
                        ? "rotate-180 text-blue-600"
                        : "text-gray-500"
                    }`}
                  >
                    &#9660;
                  </span>
                </div>
                {openIndex === index && (
                  <div className="bg-blue-50 p-4 text-sm sm:text-base text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
