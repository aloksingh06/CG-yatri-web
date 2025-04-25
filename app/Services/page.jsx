import React from 'react';

const ServiceCard = ({ title, description, button1, button2 }) => (
  <div className="bg-gray-200 rounded-xl shadow-md w-[521px] h-[281px] flex items-center justify-between px-4 py-6">
    {/* Left Section */}
    <div className="flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-800 max-w-[280px]">{description}</p>
      </div >
      <div className="mt-4 space-y-2 flex flex-col">
        <button className="bg-white px-4 py-1  text-sm rounded border"> {button1} </button>
        <button className="bg-white px-4 py-1 w-[50%] text-sm rounded border"> {button2} </button>
      </div>
      <p className="text-xs text-gray-600 mt-2">Explore</p>
    </div>

    {/* Right Section - Image Placeholder */}
    <div className="w-[201px] h-[218px] bg-white rounded-md shadow-inner"></div>
  </div>
);

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-200 min-h-screen">
      {/* Header */}
      <div className="bg-black text-white py-4 px-8 text-3xl  font-semibold">
        Services
      </div>

      {/* Services Section */}
      <section className="px-6 py-8 ">
        <h2 className="text-2xl font-bold mb-6">See All Services</h2>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 justify-items-center">
          <ServiceCard
            title="City Bus"
            description="Raipur’s Smart Bus Network at Your Fingertips! Track live buses, plan your journey, and pay onboard — all from your mobile."
            button1="View Raipur City Bus Schedule"
            button2="Explore"
          />
          <ServiceCard
            title="Auto Rickshaw"
            description="Affordable, Transparent Auto Rides. Book autos at government-approved per-kilometer rates. 80% of Raipur’s autos are already onboarding."
            button1="Find Nearby Autos"
            button2="Explore"
          />
          <ServiceCard
            title="Cab"
            description="Book Cabs for Solo or Group Travel. Instant cab booking with trusted local drivers."
            button1="Book Now"
            button2="Explore"
          />
          <ServiceCard
            title="Rental Services"
            description="Rent cars, bikes, or vans easily for your personal or business needs. Pay as you go!"
            button1="See Rental Options"
            button2="Explore"
          />
          <ServiceCard
            title="Freight Movers"
            description="Move Goods Seamlessly. Big or Small. Get access to 3-wheeler and 4-wheeler freight movers for every kind of logistics."
            button1="Freight Options"
            button2="Explore"
          />
          <ServiceCard
            title="Packers and Movers"
            description="Safe, Affordable Shifting Solutions. Professional services to help you move with comfort and care."
            button1="Get a Quote"
            button2="Explore"
          />
        </div>
      </section>

      {/* Additional Services Section */}
<section className="px-6 py-12 space-y-16">
  {/* EV Charging */}
  <div className="flex flex-col md:flex-row justify-between items-center  rounded-xl shadow-md p-6">
    <div className="max-w-lg space-y-3">
      <h3 className="text-3xl font-bold">EV Charging Stations</h3>
      <p className="text-md text-gray-700">
        Locate EV charging stations in Raipur, support green commute and charge on-the-go.
      </p>
      <div className="text-sm text-blue-700  underline space-x-4">
        <a href="#">Locate on map</a>
        <a href="#">Find nearest station</a>
      </div>
    </div>
    <div className="w-[521px] h-[200px] bg-white flex items-center justify-center rounded-md mt-6 md:mt-0">
      <span className="text-gray-500">Map</span>
    </div>
  </div>

  {/* Parking near you */}
  <div className="flex flex-col md:flex-row justify-between items-center  rounded-xl shadow-md p-6">
    <div className="max-w-lg space-y-3">
      <h3 className="text-3xl font-semibold">Parking near your</h3>
      <p className="text-md text-gray-700">
        Find the best nearby parking zones, underground lots, and instant availability.
      </p>
      <div className="text-sm text-blue-700 underline space-x-4">
        <a href="#">View on map</a>
        <a href="#">Reserve parking</a>
      </div>
    </div>
    <div className="w-[512px] h-[200px] bg-white flex items-center justify-center rounded-md mt-6 md:mt-0">
      <span className="text-gray-500">Map</span>
    </div>
  </div>
</section>

{/* Footer Call to Action */}
{/* <section className="bg-[#0F172A] text-white px-6 py-12">
  <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
    <h3 className="text-2xl font-semibold max-w-sm">
      Book and move, <br /> anywhere in the city
    </h3>

    <div className="w-[150px] h-[150px] bg-white rounded-md shadow-inner"></div>

    <form className="space-y-3 w-full max-w-sm">
      <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded bg-white text-black" />
      <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded bg-white text-black" />
      <textarea placeholder="Message" className="w-full px-4 py-2 rounded bg-white text-black"></textarea>
      <button type="submit" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">Send</button>
    </form>
  </div> */}

  {/* Footer Bottom */}
  {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-600 pt-6 text-sm text-gray-300">
    <div>
      <h4 className="font-semibold mb-2">Product</h4>
      <p>CG Yatri</p>
    </div>
    <div>
      <h4 className="font-semibold mb-2">About Us</h4>
      <p>Terms of Service</p>
      <p>Privacy Policy</p>
    </div>
    <div>
      <h4 className="font-semibold mb-2">Contact</h4>
      <p>Email: support@cgyatri.in</p>
      <p>Phone: +91-93409 91190</p>
    </div>
    <div>
      <h4 className="font-semibold mb-2">Registered Address</h4>
      <p>Raipur, Chhattisgarh</p>
      <p>492001</p>
    </div>
  </div> */}
{/* </section> */}

    </div>
  );
};

export default Services;
