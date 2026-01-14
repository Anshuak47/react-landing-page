import { LogoImage } from "../utils/constants";
const Logo = () => {
  return (
    <div className="company-logo md:w-20">
      <img src={`${LogoImage}`} />
    </div>
  );
};

export default Logo;
