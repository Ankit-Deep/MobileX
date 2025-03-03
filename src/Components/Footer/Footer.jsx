import React from "react";
import { Container } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-blue-200 ">
        <Container>
          {/* Upper div for email etc */}
          <div className="flex sm:flex-row flex-col gap-2 py-5">
            {/* left & top div */}    
            <div className="sm:w-5/12">
              <h2 className="text-2xl font-semibold">
                Get our latest news and special sales
              </h2>
              <p className="py-2 sm:text-lg text-base font-medium text-gray-500">
                You may unsubscribe at any moment. For that purpose, please find
                our contact info in our legal notice.{" "}
              </p>
            </div>

            {/* right & bottom div */}
            <div className=" sm:w-7/12 content-center ">
              <div className="sm:w-[85%] w-full float-right self-center h-10 flex justify-end gap-4">
                <label htmlFor="" className=" h-full w-full ">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="border outline-none w-full  px-2 rounded-md h-full"
                  />
                </label>
                <button className="px-5 h-full  bg-blue-600 rounded-md text-white">
                  Get
                </button>
              </div>
            </div>
          </div>
        </Container>

        {/* Lower div for actual footer */}
        <div className="bg-slate-900 text-white">
          <Container>
            <div className="flex flex-col gap-5 ">
              {/* Upper div */}
              <div className="md:items-start flex sm:flex-row flex-col justify-around  gap-5">
                <div className="items-center flex flex-col">
                  <h3 className="text-lg font-bold py-4">YOUR ACCOUNT</h3>
                  <p className="text-gray-400 font-medium">Personal Info</p>
                  <p className="text-gray-400 font-medium">Orders</p>
                  <p className="text-gray-400 font-medium">Credit Slips</p>
                  <p className="text-gray-400 font-medium">Address</p>
                </div>
                <div className="items-center flex flex-col">
                  <h3 className="text-lg font-bold py-4">CUSTOMER SERVICE</h3>
                  <p className="text-gray-400 font-medium">Monday to Friday</p>
                  <p className="text-gray-400 font-medium">
                    10am - 6:30pm (NewYork time){" "}
                  </p>
                  <p className="text-gray-400 font-medium">
                    +(001) 23 45 67 89
                  </p>
                  <p className="text-gray-400 font-medium">shopify@zemez.io</p>
                </div>
                <div className="items-center flex flex-col">
                  <h3 className="text-lg font-bold py-4">OUR GUARANTEES</h3>
                  <p className="text-gray-400 font-medium">
                    Shipping in 3 days
                  </p>
                  <p className="text-gray-400 font-medium">
                    Free returns within 14 days
                  </p>
                  <p className="text-gray-400 font-medium">Secure payments</p>
                </div>
                <div className="items-center flex flex-col">
                  <h3 className="text-lg font-bold py-4">OUR COMPANY</h3>
                  <p className="text-gray-400 font-medium">Delivery</p>
                  <p className="text-gray-400 font-medium">Legal Notice</p>
                  <p className="text-gray-400 font-medium">About Us</p>
                  <p className="text-gray-400 font-medium">Contact Us</p>
                  <p className="text-gray-400 font-medium">
                    Terms & Conditions of use
                  </p>
                </div>
              </div>

              {/* Lower div */}
              <div className=" pt-5 flex justify-between">
                <div className="text-sm text-slate-400 font-medium">
                  &#169; 2025 Powered by Shopify
                </div>

                {/* <div>Credit cards etc images</div> */}

                <div className="flex w-[30%] sm:w-[10%] justify-between  items-center float-right">
                  <NavLink to={"https://www.facebook.com/"} target="_blank">
                    <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                  </NavLink>

                  <NavLink to={"https://x.com/"} target="_blank">
                    <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
                  </NavLink>

                  <NavLink to={"https://www.instagram.com/"} target="_blank">
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                  </NavLink>

                  <NavLink to={"https://www.youtube.com/"} target="_blank">
                    <FontAwesomeIcon icon="fa-brands fa-youtube" />
                  </NavLink>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Footer;
