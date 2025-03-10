import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomerReviewSlider = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "Absolutely fantastic product! Exceeded my expectations in every way. The quality is outstanding and customer service was top-notch.",
      avatar: "/api/placeholder/32/32",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      comment:
        "Very satisfied with my purchase. The product works as advertised and has made my daily routine much easier.",
      avatar: "/api/placeholder/32/32",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 5,
      comment:
        "I've tried many similar products but this one is by far the best. Worth every penny and I've already recommended it to all my friends.",
      avatar: "/api/placeholder/32/32",
    },
    {
      id: 4,
      name: "David Kim",
      rating: 4,
      comment:
        "Great value for money. The product is durable and well-designed. Only minor issue was the shipping took longer than expected.",
      avatar: "/api/placeholder/32/32",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      rating: 5,
      comment:
        "Exceptional quality and performance. This has completely transformed my workflow and I couldn't be happier with the results.",
      avatar: "/api/placeholder/32/32",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Generate star rating display
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span
          key={i}
          className={`text-lg ${
            i < rating ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ));
  };

  return (
    <div className="w-11/12 md:w-full max-w-2xl mx-auto py-20 ">
      <div className="bg-[#1B1D28] shadow-lg rounded-lg py-10 px-10 mb-4 ">
        <div className="flex items-center mb-4">
          <div>
            <h3 className="font-bold text-lg text-white">
              {reviews[currentIndex].name}
            </h3>
            <div className="flex">
              {renderStars(reviews[currentIndex].rating)}
            </div>
          </div>
        </div>
        <p className="text-gray-100 italic pb-2">
          "{reviews[currentIndex].comment}"
        </p>
        <div className="text-sm text-gray-300 font-medium mt-2">
          Review {currentIndex + 1} of {reviews.length}
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={handlePrevious}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <ChevronLeft size={20} />
          <span className="ml-1">Previous</span>
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center "
        >
          <span className="mr-1">Next</span>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CustomerReviewSlider;
