import Image from "next/image";
import React from "react";
import { AboutData } from "../data";

const AboutSection = () => {
  return (
    <div className="py-16 px-6 sm:px-10 md:px-16">
      {/* Heading */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-center sm:text-left">
          About Us
        </h1>
      </div>

      {/* About Cards */}
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-20 mt-10 bg-[#a5d8ff] rounded-3xl p-6 sm:p-10 md:p-16">
        {AboutData.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-[300px] md:w-[320px] flex flex-col items-center text-center"
          >
            <Image
              src={item.image}
              width={350}
              height={250}
              alt="team"
              className="rounded-xl shadow-md object-cover w-full h-[200px] sm:h-[230px]"
            />
            <p className="text-gray-800 text-sm sm:text-base mt-4 px-2 sm:px-0 shadow-md rounded-lg p-4">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
