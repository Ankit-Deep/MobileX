import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Container } from "../../Components/index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle active link styling
  const isActive = ({ isActive }) => {
    return {
      color: isActive ? "#1e90ff" : "#000",
    };
  };

  return (
    <header className="">
      {/* <Container> */}
      <nav className="bg-[#f0f4f8] w-full p-4 flex justify-between items-center relative shadow-md">
        {/* Logo and Search Bar for Medium and Smaller Screens */}
        <div className="lg:w-fit w-full flex justify-between items-center gap-4">
          <button
            onClick={toggleMenu}
            className="text-2xl lg:hidden focus:outline-none text-gray-700"
            aria-label="Toggle Menu"
          >
            <FaBars />
          </button>

          <NavLink to="/" className="text-2xl font-bold transition-colors">
            <span className="text-3xl ">mobile</span>
            <span className="text-4xl font-extrabold text-blue-800">X</span>
          </NavLink>

          <div className="flex items-center w-full lg:hidden">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#1e90ff] flex-1"
              aria-label="Search"
            />
            <button
              className="p-2 bg-[#1e90ff] text-white rounded-r-md hover:bg-[#104a8a] transition-colors"
              aria-label="Search Button"
            >
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Desktop Menu and Search/User Options */}
        <div className=" hidden lg:flex items-center gap-8 w-fit justify-end">
          <ul className="flex gap-6 text-black">
            <li>
              <NavLink
                to="/"
                className="text-[#d4a017] hover:text-[#1e90ff] font-medium transition-colors"
                style={isActive}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalog"
                className="text-[#d4a017] hover:text-[#1e90ff] font-medium transition-colors"
                style={isActive}
              >
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collections"
                className="text-[#d4a017] hover:text-[#1e90ff] font-medium transition-colors"
                style={isActive}
              >
                Collections
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/clearance"
                className="text-[#d4a017] hover:text-[#1e90ff] font-medium transition-colors"
                style={isActive}
              >
                Clearance
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sections"
                className="text-[#d4a017] hover:text-[#1e90ff] font-medium transition-colors"
                style={isActive}
              >
                Sections
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-[#d4a017] hover:text-[#1e90ff] font-medium transition-colors"
                style={isActive}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e90ff] w-48"
              aria-label="Search"
            />
            <NavLink
              to="/wishlist"
              className="text-gray-700 hover:text-[#1e90ff] font-medium transition-colors"
              style={isActive}
            >
              Wishlist
            </NavLink>
            <NavLink
              to="/account"
              className="text-gray-700 hover:text-[#1e90ff] font-medium transition-colors"
              style={isActive}
            >
              Account
            </NavLink>
            <NavLink
              to="/cart"
              className="text-gray-700 hover:text-[#1e90ff] font-medium transition-colors"
              style={isActive}
            >
              <FaShoppingCart />
            </NavLink>
          </div>
        </div>

        {/* Mobile Aside Menu */}
        <aside
          className={`fixed top-0 left-0 h-full w-64 bg-[#f0f4f8] p-6 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 lg:hidden shadow-lg`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-2xl focus:outline-none text-gray-700"
            aria-label="Close Menu"
          >
            <FaTimes />
          </button>
          <ul className="flex flex-col gap-6 mt-12">
            <li>
              <NavLink
                to="/"
                className="text-[#d4a017] hover:text-[#1e90ff] font-medium transition-colors block"
                style={isActive}
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalog"
                className="text-[#d4a017] hover:text-[#1e90ff] font-medium transition-colors block"
                style={isActive}
                onClick={toggleMenu}
              >
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collections"
                className="text-[#d4a017] hover:text-[#1e90ff] font-medium transition-colors block"
                style={isActive}
                onClick={toggleMenu}
              >
                Collections
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/clearance"
                className="text-[#d4a017] hover:text-[#1e90ff] font-medium transition-colors block"
                style={isActive}
                onClick={toggleMenu}
              >
                Clearance
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sectionsall"
                className="text-[#d4a017] hover:text-[#1e90ff] font-medium transition-colors block"
                style={isActive}
                onClick={toggleMenu}
              >
                Sections
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className="text-[#d4a017] hover:text-[#1e90ff] font-medium transition-colors block"
                style={isActive}
                onClick={toggleMenu}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#1e90ff] flex-1"
                aria-label="Search"
              />
              <button
                className="p-2 bg-[#1e90ff] text-white rounded-r-md hover:bg-[#104a8a] transition-colors"
                aria-label="Search Button"
              >
                <FaSearch />
              </button>
            </div>
            <NavLink
              to="/wishlist"
              className="text-gray-700 hover:text-[#1e90ff] font-medium transition-colors block"
              style={isActive}
              onClick={toggleMenu}
            >
              Wishlist
            </NavLink>
            <NavLink
              to="/account"
              className="text-gray-700 hover:text-[#1e90ff] font-medium transition-colors block"
              style={isActive}
              onClick={toggleMenu}
            >
              Account
            </NavLink>
            <NavLink
              to="/cart"
              className="text-gray-700 hover:text-[#1e90ff] font-medium transition-colors block"
              style={isActive}
              onClick={toggleMenu}
            >
              <FaShoppingCart />
            </NavLink>
          </div>
        </aside>

        {/* Overlay for Mobile Menu */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
            onClick={toggleMenu}
          ></div>
        )}
      </nav>
      {/* </Container> */}
    </header>
  );
};

export default Navbar;
