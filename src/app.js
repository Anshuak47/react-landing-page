import React from "react";
import { createRoot } from "react-dom/client";

const Header = () => {
  return (
    <div className="navbar flex flex-row justify-between p-10 gap-2 align-middle mx-20 ">
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
      {/* <div className="nav-mobile md:flex md:flex-row lg:hidden">
        <ul className="nav-items list-none ">
          <li>About Training</li>
          <li>Pricing</li>
          <li>FAQ</li>
          <li>About Us</li>
          <li>
            <button className="enroll-button uppercase bg-[#015d21] px-5 py-2.5">
              Enroll Now
            </button>
          </li>
        </ul>
      </div> */}
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
