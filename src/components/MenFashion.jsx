import React from "react";
import MenFashionCard from "./MenFashionCard";
import { useSelector } from "react-redux";

function NewArrival() {
  const isToggled = useSelector((state) => state.myCart?.toggle || false);
  return (
    <div>
      <section
        className={`pt-[50px] ${
          isToggled ? "text-white" : "bg-gray-800 text-white"
        } transition-all duration-300 ease-in-out`}
      >
        <div
          className={`title max-w-[1300px] mx-auto text-2xl md:p-0 xs:p-1 relative ${
            isToggled ? "text-white" : "bg-gray-800 text-white"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="relative z-0">
            <img
              src="./assets/design.svg"
              className="absolute top-[70%] left-[15%] z-0"
              alt="design"
            />
            <h1
              className={`font-bold font-poppins text-5xl mb-5 pt-5 ${
                isToggled ? "text-[#191919]" : "text-white"
              } z-20 relative`}
            >
              MEN'S FASHION
            </h1>
          </div>

          <div className="content grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 mt-10 gap-6 justify-center">
            <MenFashionCard
              classname={`text-xl font-poppins mt-3 ${
                isToggled ? "text-[#191919]" : "text-white"
              }`}
              img="./assets/fashion1.png"
              text="Casual Classics"
            />
            <MenFashionCard
              classname={`text-xl font-poppins  mt-3 ${
                isToggled ? "text-[#191919]" : "text-white"
              }`}
              img="./assets/fashion2.png"
              text="Smart Formals"
            />
            <MenFashionCard
              classname={`text-xl font-poppins  mt-3 ${
                isToggled ? "text-[#191919]" : "text-white"
              }`}
              img="./assets/fashion3.png"
              text="Contemporary Wear"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewArrival;
