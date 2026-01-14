import Logo from "./Logo";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

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

export default Header;
