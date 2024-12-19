import React from "react";
import NewArrBox from "./NewArrBox";
import { useSelector } from "react-redux";

function NewArrival() {
  const isToggled = useSelector((state) => state.myCart?.toggle || false);
  return (
    <div>
    <section
      className={` ${isToggled ? "text-white" : "bg-gray-800 text-white"} transition-all duration-300 ease-in-out`}
    >
      <div
        className={`title max-w-[1300px] mx-auto text-2xl md:p-0 xs:p-1 ${isToggled ? "text-white" : "bg-gray-800 text-white"} transition-all duration-300 ease-in-out`}
      >
        <h1 className={`font-bold font-poppins text-5xl mb-5 pt-5 ${isToggled ? "text-[#191919]" : "text-white"}`} >NEW ARRIVALS</h1>
        <div className="content grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 mt-10 gap-6 justify-center">
          <NewArrBox
            classname={`text-xl font-poppins mt-3 ${isToggled ? "text-[#191919]" : "text-white"}`}
            img="./assets/m1.png"
            text="Hoodies & Sweatshirts"
          />
          <NewArrBox
            classname={`text-xl font-poppins mt-3 ${isToggled ? "text-[#191919]" : "text-white"}`}
            img="./assets/m1.png"
            text="Coats & Parkas"
          />
          <NewArrBox
            classname={`text-xl font-poppins mt-3 ${isToggled ? "text-[#191919]" : "text-white"}`}
            img="./assets/m1.png"
            text="Tees & T-Shirts"
          />
        </div>
      </div>
    </section>
  </div>
  
  );
}

export default NewArrival;
