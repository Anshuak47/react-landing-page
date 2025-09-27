import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const openMobileMenu = (event) => {
  const navbar = document.getElementById("navbar");
  const toggleIcon = document.getElementsByClassName("open-menu");

  let screenWidth = window.innerWidth;
  const slideInMenu = document.getElementsByClassName(".nav-items");
};

const Logo = () => {
  return (
    <div className="company-logo md:w-20">
      <img src="https://res.cloudinary.com/anshcr7/image/upload/v1757748199/AK_logo_ggrymm.webp" />
    </div>
  );
};

const Navbar = () => {
  return (
    <ul className="nav-items list-none flex justify-center items-center text-white">
      <li className="menu-item nav-link">About Training</li>
      <li className="menu-item nav-link">Pricing</li>
      <li className="menu-item nav-link">FAQ</li>
      <li className="menu-item nav-link">About Us</li>
      <li className="menu-item enroll-button">
        <button className="enroll-button uppercase bg-[#FFFF00] py-2.5 px-5 text-black font-bold">
          Enroll Now
        </button>
      </li>
    </ul>
  );
};

const MobileNav = () => {
  const [isOpen, setIsOPen] = useState(false);
  const toggleNavbar = () => {
    setIsOPen(!isOpen);
  };
  return (
    <div className="toggle-icon text-white text-2xl px-5 lg:hidden my-1">
      <button className="open-menu" onClick={toggleNavbar}>
        <FaBarsStaggered />
      </button>
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-black text-white px-5 py-5 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="nav-items flex gap-2 flex-col absolute bg-black h-screen top-0 right-0 float-right duration-300 list-none text-white px-5 py-5">
          <li className="menu-item">
            <div className="company-logo w-10">
              <img src="https://res.cloudinary.com/anshcr7/image/upload/v1757748199/AK_logo_ggrymm.webp" />
            </div>
          </li>
          <li className="menu-item">About Training</li>
          <li className="menu-item">Pricing</li>
          <li className="menu-item">FAQ</li>
          <li className="menu-item">About Us</li>
          <li className="menu-item">
            <button className="enroll-button text-black font-bold uppercase bg-[#FFFF00] px-5 py-2.5 my-5">
              Enroll Now
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="navbar flex flex-col" id="navbar">
      {/* Desktop Menu */}
      <div className="nav-menu p-10 gap-2 flex justify-between align-middle">
        <Logo />
        <div className="nav-menu flex align-middle">
          <Navbar />
        </div>
      </div>
      {/* Desktop Menu Ends */}
      {/* Responsive menu starts */}
      <div className="nav-menu-responsive md:flex md:flex-row p-5">
        <MobileNav />
      </div>
      {/* Responsive menu ends */}
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <div className="header bg-[#111111] border-b-2 border-[#0b7325]">
        <Header />
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);
