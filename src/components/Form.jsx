import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

function Form() {
  const isToggled = useSelector((state) => state.myCart?.toggle || false);
  return (
    <div className={`${isToggled ? "text-white" : "text-black"}`}>
      <section className="form bg-primaryColor flex items-center  justify-center md:p-[70px] xs:p-6 text-center flex-col">
        <h1 className=" font-poppins font-bold md:text-6xl xs:text-2xl leading-tight">
          <span className="block">JOIN SHOPPING COMMUNITY TO</span>

          <span className="block"> GET MONTHLY PROMO</span>
        </h1>
        <p className=" text-xl mt-5">
          Type your email down below and be young wild generation
        </p>

        <div className="flex flex-col sm:flex-row w-full mt-5 max-w-md bg-white rounded-md shadow-md overflow-hidden">
          <input
            type="email"
            placeholder="Add your email here"
            className="flex-grow px-4 py-3 border-2 text-gray-700 focus:outline-none"
          />
          <Button
            classname={
              "w-full sm:w-auto px-4 py-3 border-2 bg-black text-white font-medium hover:bg-gray-800"
            }
            title={"SEND"}
          />
        </div>
      </section>
    </div>
  );
}

export default Form;
