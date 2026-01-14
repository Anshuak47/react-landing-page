import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

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

export default MobileNav;
