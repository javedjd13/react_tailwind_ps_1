import React from "react";
import heroPng from "../assets/images/hero.png";
import { BiPlayCircle } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden">
      <div className="hero container min-h-[700px] flex relative">
        <div className="hero__content grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
          {/* Hero Text Section */}
          <div className="order-2 sm:order-1 space-y-5 lg:pr-20">
            <h1 className="text-4xl font-semibold">
              GET READY TO ENJ0Y VR{" "}
              <span
                className="bg-clip-text
                text-transparent
                bg-gradient-to-r from-primary to-secondary

              "
              >
                GAMES WITH OUR PLATFORM
              </span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              tenetur iste iusto unde numquam quia repellendus dignissimos ex
              distinctio dolore.
            </p>
            <div className="flex gap-6">
              <button className=" primary-btn">Get Started</button>
              <button className=" flex items-center gap-2">
                <BiPlayCircle className="text-3xl" /> See Demo
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div className="order-1 sm:order-2">
            <img src={heroPng} alt="Hero Logo" />
          </div>
        </div>
        {/* Animated Blog */}
        <div
          className="
        h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary
        rounded-full
        absolute top-0 left-0
        blur-3xl animated-wrapper
        "
        ></div>
      </div>
    </div>
  );
};

export default Hero;
