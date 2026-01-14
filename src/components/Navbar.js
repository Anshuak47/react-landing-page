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

export default Navbar;
