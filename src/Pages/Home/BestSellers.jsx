import React, { useRef, useState } from "react";

function BestSellers() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Boost Up Special Edition",
      price: "$260.00",
      image: "/assets/speaker.webp",
      alt: "High-quality speaker from the Boost Up Special Edition",
    },
    {
      id: 2,
      name: "Boost Up Special Edition",
      price: "$260.00",
      image: "/assets/headphones.jpg",
      alt: "Premium headphones from the Boost Up Special Edition",
    },
    {
      id: 3,
      name: "Boost Up Special Edition",
      price: "$260.00",
      image: "/assets/speaker.webp",
      alt: "High-quality speaker from the Boost Up Special Edition",
    },
    {
      id: 4,
      name: "Boost Up Special Edition",
      price: "$260.00",
      image: "/assets/headphones.jpg",
      alt: "Premium headphones from the Boost Up Special Edition",
    },
    {
      id: 5,
      name: "Boost Up Special Edition",
      price: "$260.00",
      image: "/assets/speaker.webp",
      alt: "High-quality speaker from the Boost Up Special Edition",
    },
    {
      id: 6,
      name: "Boost Up Special Edition",
      price: "$260.00",
      image: "/assets/headphones.jpg",
      alt: "Premium headphones from the Boost Up Special Edition",
    },
    {
      id: 7,
      name: "Boost Up Special Edition",
      price: "$260.00",
      image: "/assets/speaker.webp",
      alt: "High-quality speaker from the Boost Up Special Edition",
    },
  ];

  const itemsPerPage = 5;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * index;
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalPages - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <section
        className="flex flex-col items-center gap-5 py-6 md:py-10 px-4 md:px-6"
        aria-label="Section featuring best-selling products"
      >
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#495BD8] text-center">
          Shop Best Sellers
        </h2>

        <div className="w-full overflow-x-hidden scrollbar-hide scroll-smooth">
          <div
            ref={scrollRef}
            className="flex gap-10 w-full overflow-x-auto sm:overflow-x-hidden scrollbar-hide scroll-smooth"
            style={{ scrollBehavior: "smooth" }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="w-4/5 md:w-2/5 min-w-[200px] md:min-w-[250px] flex flex-col items-center justify-center p-2 md:p-4 rounded-lg transition-shadow gap-10"
              >
                <div className="w-full h-48 md:h-56 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col items-center mt-2">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center">
                    {product.name}
                  </h3>
                  <p className="text-lg md:text-2xl font-semibold text-[#495BD8] text-center">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentIndex === 0
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-[#495BD8] hover:bg-[#3947b3]"
            } text-white`}
            aria-label="Previous page"
          >
            ←
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-[#495BD8]" : "bg-gray-400"
                }`}
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to page ${index + 1}`}
              ></button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex === totalPages - 1}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentIndex === totalPages - 1
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-[#495BD8] hover:bg-[#3947b3]"
            } text-white`}
            aria-label="Next page"
          >
            →
          </button>
        </div>
      </section>

      {/* Headphones & smartwatch section */}
      <section>
        <div className="flex md:flex-row flex-col gap-5 w-full pt-5">
          {/* Top & left div */}
          <div className="md:w-6/12 py-5 md:py-10 flex flex-row items-center w-full justify-between bg-[#F1F5FE]">
            <div className="w-5/12 flex flex-col gap-6 py-10 px-5">
              <h3 className="text-[#475BD6] text-sm md:text-lg font-bold">
                GREAT HEADPHONES
              </h3>
              <h2 className="text-3xl text-slate-800  flex flex-col md:text-5xl lg:text-6xl font-bold">
                <span>Find your </span>
                <span>sound!</span>
              </h2>

              <button
                className="bg-[#495BD8] text-white my-3 text-xs  font-bold px-6 md:px-10 py-2 md:py-3 rounded-lg hover:bg-[#3B5AD7] transition-colors w-fit"
                aria-label="Shop Now for tablets"
              >
                SHOP NOW
              </button>
            </div>

            <div className="w-6/12">
              <img
                src="/assets/headphones-removebg-preview.png"
                alt=""
                className="bg-[#F1F5FE] w-[90%] "
              />
            </div>
          </div>

          {/* Botton & right div */}
          <div className="md:w-6/12 py-5 md:py-10 flex flex-row items-center w-full justify-between bg-[#485BD9] ">
            <div className="flex flex-col gap-6 py-10 px-5">
              <h3 className="text-white text-sm md:text-lg font-bold">
                BEST SMARTWATCH 2020
              </h3>
              <h2 className="text-3xl text-white  flex flex-col md:text-5xl lg:text-6xl font-bold">
                <span>Smartwatch </span>
                <span>for you!</span>
              </h2>

              <button
                className="bg-white text-black my-3 text-xs  font-bold px-6 md:px-10 py-2 md:py-3 rounded-lg transition-colors w-fit"
                aria-label="Shop Now for tablets"
              >
                SHOP NOW
              </button>
            </div>

            <div className="w-6/12">
              <img
                src="/assets/smartwatch-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BestSellers;
