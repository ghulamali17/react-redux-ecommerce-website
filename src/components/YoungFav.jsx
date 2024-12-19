import React from "react";
import YoungFavBox from "./YoungFavBox";
import { useSelector } from "react-redux";

function YoungFav() {
  const isToggled = useSelector((state) => state.myCart?.toggle || false);
  return (
    <div>
      <section
        className={`  ${
          isToggled ? "text-white" : "bg-gray-800 text-white"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="title max-w-[1300px] mx-auto mt-5 text-2xl md:p-0 xs:p-1">
          <h1 className="font-bold font-poppins text-5xl mb-5">NEW ARRIVALS</h1>
          <div className="content grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 mt-10 gap-6 justify-center">
            <YoungFavBox
              // classname={"text-xl font-poppins mt-3 "}
              classname={`text-xl font-poppins mt-3 ${isToggled ? "text-[#7F7F7F]" : "text-white"}`}
              img="./assets/young1.png"
              text="Hoodies & Sweetshirt"
            />
            <YoungFavBox
              classname={`text-xl font-poppins mt-3  ${isToggled ? "text-[#7F7F7F]" : "text-white"}`}
              // classname={" mt-3 text-xl"}
              img="./assets/young2.png"
              text="Coats & Parkas"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default YoungFav;