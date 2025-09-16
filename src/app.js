import React from "react";
import { createRoot } from "react-dom/client";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  const navbar = document.getElementById("navbar");
  const toggleIcon = document.getElementsByClassName("open-menu");

  let screenWidth = window.innerWidth;

  return (
    <div className="navbar flex flex-col" id="navbar">
      {/* Desktop Menu */}
      <div className="nav-menu p-10 gap-2 flex justify-between align-middle">
        <div className="company-logo md:w-20">
          <img src="https://res.cloudinary.com/anshcr7/image/upload/v1757748199/AK_logo_ggrymm.webp" />
        </div>
        <div className="nav-menu flex align-middle">
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
        </div>
      </div>
      {/* Desktop Menu Ends */}
      {/* Responsive menu starts */}
      <div className="nav-menu-responsive md:flex md:flex-row p-5">
        <div className="toggle-icon text-white text-2xl px-5 lg:hidden my-1">
          <button className="open-menu">
            <FaBarsStaggered />
          </button>
        </div>
        <ul className="nav-items flex gap-2 flex-col absolute bg-black h-screen top-0 right-0 float-right list-none text-white px-5 py-5">
          <li className="close-icon text-2xl flex justify-end p-2.5">
            <button>
              <FaXmark />
            </button>
          </li>
          <li>
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
