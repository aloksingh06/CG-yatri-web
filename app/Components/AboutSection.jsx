import Image from "next/image";
import React from "react";
import { AboutData } from "../data";
const AboutSection = () => {


  return (
    <div className="py-16 px-16 sm:px-6 md:px-26">
      <div>
        <h1 className="text-4xl font-semibold">About Us</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 mt-10">
        {AboutData.map((item) => (
            <div className="w-94 flex items-center flex-col" key={item.id}>
            <Image
              src=
               {item.image}
              
              width={100}
              height={100}
              alt="team"
              className="w-94 h-64"
            />
            <p className="text-gray-800 text-base md:text-lg mt-4 text-center"> 
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
