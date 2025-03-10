// Camera & Photography section
import React from "react";
import { NavLink } from "react-router-dom";

function Cameras() {
  const products = [
    {
      name : "Product Name",
      price : "$250.00",
      image : "../../../public/assets/2_smartphones-removebg-preview.png"
    },
    
    {
      name : "Product Name",
      price : "$250.00",
      image : "../../../public/assets/2_smartphones-removebg-preview.png"
    },
    {
      name : "Product Name",
      price : "$250.00",
      image : "../../../public/assets/2_smartphones-removebg-preview.png"
    },
    {
      name : "Product Name",
      price : "$250.00",
      image : "../../../public/assets/2_smartphones-removebg-preview.png"
    },
    {
      name : "Product Name",
      price : "$250.00",
      image : "../../../public/assets/2_smartphones-removebg-preview.png"
    },
    {
      name : "Product Name",
      price : "$250.00",
      image : "../../../public/assets/2_smartphones-removebg-preview.png"
    },
    {
      name : "Product Name",
      price : "$250.00",
      image : "../../../public/assets/2_smartphones-removebg-preview.png"
    },
    {
      name : "Product Name",
      price : "$250.00",
      image : "../../../public/assets/2_smartphones-removebg-preview.png"
    },

  ]

  return (
    <>
      <section className="w-full md:w-[90%] mx-auto  text-center my-10">
        <div className="w-full bg-[#F3F4FE] py-10">
          <h1 className="text-4xl font-bold text-[#495AD6] ">
            Cameras & Photography
          </h1>
        </div>

        <div className="w-full py-5 ">
          {/* Products details (sort by, items, format) */}
          <div className="flex justify-between px-10 py-5">
            <div className="flex gap-2">
              <h3 className="text-base font-semibold ">Sort By : </h3>
              <select name="" id="">
                <option value="Featured"> Featured</option>
                <option value="Newest">Newest</option>
                <option value="Most Rated">Most Rated</option>
              </select>
            </div>

            <div>No. of items</div>

            <div>Format of showing products</div>
          </div>

          {/* List of all the products */}
          <div className="flex flex-wrap justify-between gap-5 w-full px-10 ">
            {products.map((product, index) => (
              <NavLink
                key={index}
                className="w-[30%] hover:shadow-lg px-10 py-5 rounded-md cursor-pointer"
              >
                <img src={product.image} alt="" className="w-full" />

                <div>
                  <h2 className="text-xl font-bold ">{product.name}</h2>
                  <h3 className="text-xl text-[#4D5ED9] font-semibold  ">{product.price}</h3>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Cameras;
