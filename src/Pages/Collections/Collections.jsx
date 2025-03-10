import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function Collections() {

  const navigate = useNavigate();

  const collections = [
    {
      name: "Accessories",
      image: "assets/dell laptop.jpg",
      path: "/collections/accessories",
    },
    {
      name: "Bestseller's",
      image: "/assets/dell laptop.jpg",
      path: "/collections/bestsellers",
    },
    {
      name: "Cameras & Photography",
      image: "/assets/dell laptop.jpg",
      path: "/collections/cameras-photography",
    },
    {
      name: "Coming Soon",
      image: "/assets/dell laptop.jpg",
      path: "/collections/coming-soon",
    },
    {
      name: "Computing",
      image: "/assets/dell laptop.jpg",
      path: "/collections/computing",
    },
    {
      name: "New",
      image: "/assets/dell laptop.jpg",
      path: "/collections/new",
    },
    {
      name: "Sale",
      image: "/assets/dell laptop.jpg",
      path: "/collections/sale",
    },
    {
      name: "TV & Video",
      image: "/assets/dell laptop.jpg",
      path: "/collections/tv-video",
    },
    {
      name: "Mobile",
      image: "/assets/dell laptop.jpg",
      path: "/collections/mobile",
    },
    {
      name: "Laptops & Computers",
      image: "/assets/dell laptop.jpg",
      path: "/collections/laptops-computers",
    },
  ];

  return (
    <>
      <section className="w-full flex flex-col gap-2 md:pt-0 pt-0 md:p-10 p-5 ">
        <div className="w-full py-10 text-center">
          <h1 className="text-4xl font-semibold">Collections</h1>
        </div>

        <div className=" w-full ">
          <div className="w-full flex flex-wrap gap-5 items-center justify-center text-center ">
            {collections.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="md:max-w-[30%] rounded-md  border flex items-center flex-wrap justify-center backdrop-blur-md relative cursor-pointer"
                // onClick={() => navigate(item.path)}
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full z-0 rounded-md"
                />

                <h2 className="z-10  absolute lg:text-4xl text-2xl text-white font-bold">
                  {item.name}
                </h2>
              </NavLink>
            ))}
          </div>
        </div>

        {/* <Outlet/> */}
      </section>
    </>
  );
}

export default Collections;
