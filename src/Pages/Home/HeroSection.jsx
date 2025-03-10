import React from "react";

function HeroSection() {
  return (
    <section
      className="py-10 md:py-28  bg-[#191B28] text-white flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-5 w-full"
      aria-label="Hero section showcasing best laptops and great deals"
    >
      {/* Left Section (Text and CTA) */}
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center  gap-4 px-4 md:px-6">
        <h3 className="text-md md:text-lg font-bold text-[#3B5AD7] uppercase tracking-wide">
          Creating a Feature Now!
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight">
          <span>Best </span> 
          <span>Laptops!</span>
        </h1>
        <p className="text-md md:text-base font-medium text-center max-w-xs md:max-w-md">
          Our extensive collection of premium laptops!
        </p>
        <button
          className="text-white text-sm md:text-sm bg-[#495BD7] px-8 py-3 md:px-10 md:py-4 rounded-md font-bold hover:bg-[#3B5AD7] transition-colors mt-2"
          aria-label="Shop Now"
        >
          SHOP NOW
        </button>
      </div>

      {/* Middle Section (Image) */}
      <div className="w-full md:w-[40%] flex items-center justify-center">
        <img
          src="assets/dell_laptop-removebg-preview.png"
          alt="Premium Dell laptop featured in our collection"
          className="w-full  "
        />
      </div>

      {/* Right Section (Deal Information) */}
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center gap-4 px-4 md:px-6">
        <h2 className="text-xl md:text-2xl font-semibold text-center">
          Great Deals Every Weekend!
        </h2>
        <hr className="border-t-2 border-[#495BD7] w-12 md:w-[50px] my-2" />
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          From $699
        </h3>
      </div>
    </section>
  );
}

export default HeroSection;
