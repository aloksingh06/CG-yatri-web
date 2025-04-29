"use client";

import React, { useState } from "react";

const categories = [
  { id: "sedan", name: "Sedan" },
  { id: "suv", name: "SUV" },
  { id: "hatchback", name: "Hatchback" },
  { id: "muv", name: "MUV" },
  { id: "luxury", name: "Luxury" },
];

const carsData = {
  sedan: [
    { name: "Honda City", company: "Honda", price: "₹18/km", image: "/cars/honda-city.jpg" },
    { name: "Hyundai Verna", company: "Hyundai", price: "₹17/km", image: "/cars/hyundai-verna.jpg" },
    { name: "Skoda Slavia", company: "Skoda", price: "₹19/km", image: "/cars/skoda-slavia.jpg" },
    { name: "Volkswagen Virtus", company: "Volkswagen", price: "₹20/km", image: "/cars/volkswagen-virtus.jpg" },
    { name: "Toyota Yaris", company: "Toyota", price: "₹19/km", image: "/cars/toyota-yaris.jpg" },
    { name: "Renault Talisman", company: "Renault", price: "₹21/km", image: "/cars/renault-talisman.jpg" },
    { name: "Suzuki Ciaz", company: "Maruti Suzuki", price: "₹17/km", image: "/cars/maruti-ciaz.jpg" },
    { name: "MG 5", company: "MG", price: "₹20/km", image: "/cars/mg-5.jpg" },
    { name: "Ford Aspire", company: "Ford", price: "₹16/km", image: "/cars/ford-aspire.jpg" },
    { name: "Tata Tigor", company: "Tata", price: "₹15/km", image: "/cars/tata-tigor.jpg" },
    { name: "Honda Amaze", company: "Honda", price: "₹17/km", image: "/cars/honda-amaze.jpg" }, // New car
    { name: "Maruti Dzire", company: "Maruti Suzuki", price: "₹16/km", image: "/cars/maruti-dzire.jpg" }, // New car
  ],
  suv: [
    { name: "Toyota Fortuner", company: "Toyota", price: "₹30/km", image: "/cars/toyota-fortuner.jpg" },
    { name: "Mahindra Scorpio-N", company: "Mahindra", price: "₹28/km", image: "/cars/scorpio-n.jpg" },
    { name: "Hyundai Creta", company: "Hyundai", price: "₹22/km", image: "/cars/hyundai-creta.jpg" },
    { name: "MG Hector", company: "MG", price: "₹26/km", image: "/cars/mg-hector.jpg" },
    { name: "Tata Harrier", company: "Tata", price: "₹27/km", image: "/cars/tata-harrier.jpg" },
    { name: "Renault Duster", company: "Renault", price: "₹24/km", image: "/cars/renault-duster.jpg" },
    { name: "Ford Endeavour", company: "Ford", price: "₹32/km", image: "/cars/ford-endeavour.jpg" },
    { name: "Volkswagen Tiguan", company: "Volkswagen", price: "₹29/km", image: "/cars/vw-tiguan.jpg" },
    { name: "Range Rover Velar", company: "Land Rover", price: "₹50/km", image: "/cars/range-rover-velar.jpg" },
    { name: "Mahindra XUV700", company: "Mahindra", price: "₹26/km", image: "/cars/xuv700.jpg" },
    { name: "Kia Seltos", company: "Kia", price: "₹28/km", image: "/cars/kia-seltos.jpg" }, // New car
    { name: "Jeep Compass", company: "Jeep", price: "₹35/km", image: "/cars/jeep-compass.jpg" }, // New car
  ],
  hatchback: [
    { name: "Maruti Baleno", company: "Maruti Suzuki", price: "₹14/km", image: "/cars/maruti-baleno.jpg" },
    { name: "Hyundai i20", company: "Hyundai", price: "₹15/km", image: "/cars/hyundai-i20.jpg" },
    { name: "Tata Altroz", company: "Tata", price: "₹14/km", image: "/cars/tata-altroz.jpg" },
    { name: "Renault Kwid", company: "Renault", price: "₹13/km", image: "/cars/renault-kwid.jpg" },
    { name: "Ford Figo", company: "Ford", price: "₹14/km", image: "/cars/ford-figo.jpg" },
    { name: "Volkswagen Polo", company: "Volkswagen", price: "₹15/km", image: "/cars/vw-polo.jpg" },
    { name: "Suzuki Swift", company: "Maruti Suzuki", price: "₹14/km", image: "/cars/maruti-swift.jpg" },
    { name: "Hyundai Grand i10", company: "Hyundai", price: "₹13/km", image: "/cars/hyundai-grand-i10.jpg" },
    { name: "Tata Tiago", company: "Tata", price: "₹13/km", image: "/cars/tata-tiago.jpg" },
    { name: "MG3", company: "MG", price: "₹15/km", image: "/cars/mg3.jpg" },
    { name: "Maruti Ignis", company: "Maruti Suzuki", price: "₹14/km", image: "/cars/maruti-ignis.jpg" }, // New car
    { name: "Hyundai Santro", company: "Hyundai", price: "₹12/km", image: "/cars/hyundai-santro.jpg" }, // New car
  ],
  muv: [
    { name: "Toyota Innova Crysta", company: "Toyota", price: "₹25/km", image: "/cars/innova-crysta.jpg" },
    { name: "Maruti Ertiga", company: "Maruti Suzuki", price: "₹20/km", image: "/cars/maruti-ertiga.jpg" },
    { name: "Kia Carens", company: "Kia", price: "₹21/km", image: "/cars/kia-carens.jpg" },
    { name: "Mahindra Marazzo", company: "Mahindra", price: "₹22/km", image: "/cars/marazzo.jpg" },
    { name: "Renault Triber", company: "Renault", price: "₹18/km", image: "/cars/renault-triber.jpg" },
    { name: "Tata Sumo Gold", company: "Tata", price: "₹19/km", image: "/cars/tata-sumo.jpg" },
    { name: "MG G10", company: "MG", price: "₹23/km", image: "/cars/mg-g10.jpg" },
    { name: "Maruti XL6", company: "Maruti Suzuki", price: "₹22/km", image: "/cars/maruti-xl6.jpg" },
    { name: "Toyota Vellfire", company: "Toyota", price: "₹45/km", image: "/cars/toyota-vellfire.jpg" },
    { name: "Ford Tourneo", company: "Ford", price: "₹24/km", image: "/cars/ford-tourneo.jpg" },
    { name: "Mahindra Xylo", company: "Mahindra", price: "₹26/km", image: "/cars/mahindra-xylo.jpg" }, // New car
    { name: "Maruti Wagon R", company: "Maruti Suzuki", price: "₹20/km", image: "/cars/maruti-wagonr.jpg" }, // New car
  ],
  luxury: [
    { name: "BMW 5 Series", company: "BMW", price: "₹80/km", image: "/cars/bmw-5series.jpg" },
    { name: "Mercedes E-Class", company: "Mercedes-Benz", price: "₹90/km", image: "/cars/mercedes-eclass.jpg" },
    { name: "Range Rover Evoque", company: "Land Rover", price: "₹100/km", image: "/cars/range-rover.jpg" },
    { name: "Porsche Cayenne", company: "Porsche", price: "₹120/km", image: "/cars/porsche-cayenne.jpg" },
    { name: "BMW X5", company: "BMW", price: "₹95/km", image: "/cars/bmw-x5.jpg" },
    { name: "Mercedes GLE", company: "Mercedes-Benz", price: "₹110/km", image: "/cars/mercedes-gle.jpg" },
    { name: "Audi A8", company: "Audi", price: "₹105/km", image: "/cars/audi-a8.jpg" },
    { name: "Land Rover Defender", company: "Land Rover", price: "₹130/km", image: "/cars/landrover-defender.jpg" },
    { name: "Porsche Panamera", company: "Porsche", price: "₹150/km", image: "/cars/porsche-panamera.jpg" },
    { name: "BMW 7 Series", company: "BMW", price: "₹140/km", image: "/cars/bmw-7series.jpg" },
    { name: "Audi Q7", company: "Audi", price: "₹135/km", image: "/cars/audi-q7.jpg" }, // New car
    { name: "Jaguar F-Pace", company: "Jaguar", price: "₹125/km", image: "/cars/jaguar-fpace.jpg" }, // New car
  ],
};

const PremiumCabs = () => {
  const [selectedCategory, setSelectedCategory] = useState("sedan");

  const handleCategoryChange = (id) => {
    setSelectedCategory(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec] py-10 px-4 sm:px-10 md:px-20">
      {/* Top Heading */}
      <div className="text-center mt-10 mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-3 animate-fade-in">
          Find Your Perfect Premium Ride
        </h1>
        <p className="text-lg text-gray-600">Choose a category and explore the available cars for your journey in Chhattisgarh.</p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-10 sticky top-0  z-10 py-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`px-6 py-3 rounded-full text-lg font-semibold shadow-md transition-transform duration-300 ${
              selectedCategory === cat.id ? "bg-blue-600 text-white scale-105" : "bg-white text-gray-800 hover:bg-blue-100"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Cars List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 animate-slide-up">
        {carsData[selectedCategory].map((car, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{car.name}</h3>
            <p className="text-gray-500 mb-4">{car.company}</p>
            <p className="text-lg font-bold text-blue-600">{car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumCabs;
