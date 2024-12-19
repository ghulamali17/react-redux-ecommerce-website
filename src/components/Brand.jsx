import React from "react";
import { useSelector } from "react-redux";

function Brand() {
  const isToggled = useSelector((state) => state.myCart?.toggle || false);
  return (
    <div
      className={`w-full bg-primaryColor flex flex-wrap justify-around items-center gap-2 p-4 ${
        isToggled ? "text-white" : "bg-gray-800 text-white"
      } transition-all duration-300 ease-in-out`}
    >
      <img
        src="./assets/hm.png"
        alt="Hm Logo"
        className="w-full sm:w-[45%] md:w-[10%] lg:w-[18%] h-[60px] object-contain"
      />
      <img
        src="./assets/obey.png"
        alt="Obey Logo"
        className="w-full sm:w-[45%] md:w-[10%] lg:w-[18%]  h-[100px] object-contain"
      />
      <img
        src="./assets/shopify.png"
        alt="Shopify Logo"
        className="w-full sm:w-[45%] md:w-[10%] lg:w-[18%]  h-[60px] object-contain"
      />
      <img
        src="./assets/lacoste.png"
        alt="Lacoste Logo"
        className="w-full sm:w-[45%] md:w-[10%] lg:w-[18%]  h-[60px] object-contain"
      />

      <img
        src="./assets/amazon.png"
        alt="Amazon Logo"
        className="w-full sm:w-[45%] md:w-[10%] lg:w-[18%]  h-[90px] object-contain"
      />
    </div>
  );
}

export default Brand;
