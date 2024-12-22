import React from "react";
import Button from "../Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Hero() {
  const isToggled = useSelector((state) => state.myCart?.toggle || false);
  const navigate = useNavigate();
  return (
    <div
      className={`md:p-12 mt-[100px] ${
        isToggled ? " text-black" : "bg-gray-800 text-white"
      } transition-all duration-300 ease-in-out`}
    >
      <section className="hero relative max-w-[1300px] mx-auto bg-[#F4F6F5] rounded-[30px] border border-black">
        {/* Stars */}
        <img
          src="./assets/star.svg"
          className="absolute top-[80%] left-[60%] xs:top-[50%] xs:left-[15%] sm:top-[75%] sm:left-[55%]"
          alt="star icon"
        />
        <img
          src="./assets/star.svg"
          className="absolute md:top-[85%] md:left-[90%] lg:top-[73%] lg:left-[93%] xs:top-[90%] xs:left-[2%] sm:top-[70%] sm:left-[85%]"
          alt="star icon"
        />
        <img
          src="./assets/star.svg"
          className="absolute top-[10%] left-[10%] xs:top-[45%] xs:left-[80%] sm:top-[12%] sm:left-[55%]"
          alt="star icon"
        />
        <img
          src="./assets/star.svg"
          className="absolute top-[15%] sm:top-[20%] sm:left-[85%] left-[93%] xs:top-[60%] xs:left-[80%]"
          alt="star icon"
        />

        {/* Hero Content */}
        <div className="hero-content grid md:grid-cols-2 xs:grid-cols-1 gap-6 md:gap-12">
          <div
            className={`hero-left-content md:px-[100px] md:py-[60px] xs:px-[18px] xs:py-[20px] ${
              isToggled ? " text-black" : " text-black"
            } transition-all duration-300 ease-in-out`}
          >
            <h1 className="font-poppins font-bold text-7xl xs:text-6xl sm:text-5xl lg:text-6xl xl:text-7xl xs:inline-block leading-tight">
              <span className="block bg-[#FFFFFF] p-3 md:p-4 rounded-sm">
                LET’S
              </span>
              <span className="block">EXPLORE</span>
              <span className="block bg-primaryColor p-3 md:p-4 rounded-sm">
                UNIQUE
              </span>
              <span className="block">CLOTHES.</span>
            </h1>
            <p className="mt-4 text-lg">
              Live for Influential and Innovative fashion!
            </p>
            <Button
              title={"SHOP NOW"}
              classname={
                "bg-black text-center p-3 text-white mt-6 hover:bg-gray-800"
              }
              click={() => navigate("/shop")}
            />
          </div>

          <div className="hero-right-content flex justify-center items-center">
            <img
              src="./assets/hero.png"
              alt="Hero Section"
              className="w-full object-contain md:h-[600px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
