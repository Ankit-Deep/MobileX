import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function HeroSection2() {
  return (
    <>
      <section
        className=" flex flex-col md:flex-row items-center justify-center w-full bg-gray-100"
        aria-label="Hero section featuring Mac Desktops, big sale on smartphones, and computers"
      >
        {/* Left Section (Mac Desktops) */}
        <div className="w-full md:w-1/3 flex flex-col items-center gap-4 px-2 md:px-4 py-4">
          <div
            className="border w-full flex flex-col gap-2 
        text-center "
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-gray-800 font-bold">
              Mac Desktops
            </h2>
            <h4 className="text-sm md:text-lg text-gray-600 font-semibold">
              Quality products!
            </h4>
            <button
              className="w-10 h-10 md:w-12 md:h-12 bg-[#495BD8] rounded-md text-white font-semibold hover:bg-[#3B5AD7] transition-colors flex items-center justify-center"
              aria-label="Learn more about Mac Desktops"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

          <div className="w-full flex items-center justify-center">
            <img
              src="/assets/mac img.png"
              alt="High-quality Mac Desktop featured in our collection"
              className="w-full h-auto max-w-xs md:max-w-sm object-contain"
            />
          </div>
        </div>

        {/* Middle Section (Big Sale) */}
        <div className="w-full md:w-1/3 bg-[#495BD8] flex flex-col items-center gap-2 text-white py-4 md:py-6 px-2 md:px-4">
          <h3 className="text-lg md:text-2xl font-bold">Up to 30%</h3>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            BIG SALE
          </h1>
          <h3 className="text-sm md:text-lg font-semibold">
            Get new smartphone!
          </h3>
          <div className="bg-[#FE3056] px-4 py-2 md:px-6 md:py-3 rounded-md">
            <button className="text-sm md:text-base font-medium">
              FREE SHIPPING
            </button>
          </div>
          <div className="w-full flex items-center justify-center">
            <img
              src="/assets/2_smartphones-removebg-preview.png"
              alt="Smartphones available in our big sale"
              className="w-full h-auto max-w-xs md:max-w-sm object-contain"
            />
          </div>
        </div>

        {/* Right Section (Computers) */}
        <div className="w-full md:w-1/3 flex flex-col items-center gap-4 px-2 md:px-4 py-4 md:py-6">
          <div className="w-full flex flex-col gap-2 text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-gray-800 font-bold">
              Computers
            </h2>
            <h4 className="text-sm md:text-lg text-gray-600 font-semibold">
              Limited time offer!
            </h4>
            <button
              className="w-10 h-10 md:w-12 md:h-12 bg-[#495BD8] rounded-md text-white font-semibold hover:bg-[#3B5AD7] transition-colors flex items-center justify-center"
              aria-label="Learn more about Computers"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="w-full flex items-center justify-center">
            <img
              src="/assets/cpu img.jpg"
              alt="Featured computer CPU in our limited time offer"
              className="w-full h-auto max-w-xs md:max-w-sm object-contain"
            />
          </div>
        </div>
      </section>

      {/* Tablets section */}
      <section
        className="bg-[#1A1235] w-full flex flex-col md:flex-row items-center gap-5 justify-center  md:pb-0 pb-20"
        aria-label="Section featuring all new trend tablets"
      >
        {/* Tab Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-4 md:px-6">
          <img
            src="public/assets/tab.png"
            alt="High-quality image of the latest trend tablet"
            className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg object-contain"
          />
        </div>

        {/* Tab Info */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-5 px-4 md:px-6  text-white">
          <div className="flex flex-col gap-6">
            <h3 className="text-[#475BD6] text-sm md:text-lg font-bold">
              ALL NEW TREND TABLETS
            </h3>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              Top rated tablets!
            </h2>
            <p className="text-sm md:text-base font-medium">
              Doing it all, all new ways.
            </p>
            <button
              className="bg-[#495BD8] text-xs md:text-sm font-semibold px-6 md:px-10 py-2 md:py-3 rounded-md hover:bg-[#3B5AD7] transition-colors w-fit"
              aria-label="Shop Now for tablets"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </section>


    </>
  );
}

export default HeroSection2;
