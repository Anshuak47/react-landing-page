import { FaBarsStaggered } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero flex flex-row bg-white p-20 gap-20">
      <div className="hero-title flex flex-col w-[68%]">
        <p className="subtitle flex gap-2 items-center text-sm font-bold bg-[#FFFF00] w-fit px-4 py-2 mb-5">
          <span className="">
            <FaStar />
          </span>
          Premium AI training program
        </p>
        <div className="main-heading font-bold text-6xl uppercase leading-tight text-white mb-10">
          Master
          <div className="flex gap-2">
            <span className="px-2 py-0 bg-[#00FF41] transform -rotate-4 w-fit text-black">
              Joules Ai
            </span>
            for SAP
          </div>
        </div>

        <div className="hero-subtitle text-[1.115rem] border-l-2 border-[#00FF41] px-5 py-5 text-white my-2.5">
          Transform your career with hands-on AI Agent training. Learn to build,
          deploy, and optimize intelligent sstem that revolutionalize business
          processes.
        </div>

        <div className="feature-1 text-base uppercase  px-5 py-5 text-white my-2.5 flex flex-row gap-2 flex-wrap items-center">
          <div className="bg-[#00FF41] text-black p-2">
            <FaCheck />
          </div>
          Expert-led Live Sessions
        </div>

        <div className="feature-1 text-base uppercase  px-5 py-5 text-white my-2.5 flex flex-row gap-2 flex-wrap items-center">
          <div className="bg-[#00FF41] text-black p-2">
            <FaCheck />
          </div>
          Hands-on SAP integration projects
        </div>
        <div className="feature-1 text-base uppercase  px-5 py-5 text-white my-2.5 flex flex-row gap-2 flex-wrap items-center">
          <div className="bg-[#FFFF00] text-black p-2">
            <FaCheck />
          </div>
          Industry Recognised certifications
        </div>
        {/* CTA Buttons */}
        <div className="cta-buttons flex gap-5 flex-row my-5">
          <button className="text-black font-bold uppercase py-2 px-10 bg-[#00FF41] text-[14px]">
            Start your journey
          </button>

          <button className="text-black font-bold uppercase py-2 px-10 bg-[#FFFF00] text-[14px]">
            Learn more
          </button>
        </div>
        {/* CTA buttons ends */}

        {/* Stats */}
        <div className="stats flex flex-row gap-2 my-10 w-full">
          <div className="trained-students flex gap-0.5 flex-col border-2 border-[#00FF41] px-5 py-5 text-center uppercase w-full bg-[#bdbdbd62]">
            <div className="stat-number font-bold text-[#FFFF00] text-2xl">
              500+
            </div>
            <div className="stat-text text-white text-sm font-bold">
              Students Trained
            </div>
          </div>
          <div className="success-rate flex gap-0.5 flex-col border-2 border-[#00FF41] px-5 py-5 text-center uppercase w-full bg-[#bdbdbd62]">
            <div className="stat-number font-bold text-[#FFFF00] text-2xl">
              95%
            </div>
            <div className="stat-text text-white text-sm font-bold">
              Success Rate
            </div>
          </div>
          <div className="support flex gap-0.5 flex-col border-2 border-[#FFFF00] px-5 py-5 text-center uppercase w-full bg-[#bdbdbd62]">
            <div className="stat-number font-bold text-[#FFFF00] text-2xl">
              24x7
            </div>
            <div className="stat-text text-white text-sm font-bold">
              Support
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image w-1/2">
        <div className="feature-wrapper border-2 p-10 border-[#00FF41]">
          <div className="image-wrapper">
            <div className="banner-title border-black border-2 p-5 bg-[#00FF41]">
              <p className="text-black text-3xl font-bold uppercase">
                AI Agent Development
              </p>
              <span className="uppercase text-[14px] font-bold">
                Build intelligent automation systems
              </span>
            </div>
            {/* Banner subfeatures */}
            <div className="banner-features">
              <div className="feature-1 flex gap-2 items-center text-base uppercase  px-5 py-5 text-white my-2.5 font-bold border-l-2 border-l-[#00FF41]">
                <div className="bg-[#00FF41] text-black p-2">
                  <FaRobot />
                </div>
                Machine Learning Integration
              </div>
              <div className="feature-1 flex gap-2 items-center text-base uppercase  px-5 py-5 text-white my-2.5 font-bold border-l-2 border-l-[#00FF41]">
                <div className="bg-[#00FF41] text-black p-2">
                  <FaGears />
                </div>
                SAP System Integration
              </div>
              <div className="feature-1 flex gap-2 items-center text-base uppercase  px-5 py-5 text-white my-2.5 font-bold border-l-2 border-l-[#FFFF00]">
                <div className="bg-[#FFFF00] text-black p-2">
                  <FaChartLine />
                </div>
                Business Process Automation
              </div>
            </div>
            {/* Stats start */}
            <div className="banner-stats border-1 border-black p-5 bg-[#FFFF00] flex flex-row gap-10 justify-around">
              <div className="stat-1 flex flex-col text-center">
                <div className="stat-number font-bold text-black text-2xl">
                  12
                </div>
                <div className="stat-text text-sm font-bold uppercase">
                  Weeks Training
                </div>
              </div>

              <div className="stat-1 flex flex-col text-center">
                <div className="stat-number font-bold text-black text-2xl">
                  5
                </div>
                <div className="stat-text text-sm font-bold uppercase">
                  live Projects
                </div>
              </div>
            </div>
            {/* Stats end */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
