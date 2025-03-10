import React from "react";
import HeroSection from "./HeroSection";
import HeroSection2 from "./HeroSection2";
import BestSellers from "./BestSellers";
import Reviews from "./Reviews";

function Home() {
  return (
    <>
      <HeroSection />
      <HeroSection2 />
      <BestSellers />
      <Reviews />
    </>
  );
}

export default Home;
