import React from "react";
import { useSelector } from "react-redux";
import hmImg from "../../assets/hm.png"
import Shopify from "../../assets/shopify.png"
import ObeyImg from "../../assets/obey.png"
import LacosteImg from "../../assets/hm.png"
import AmazonImg from "../../assets/hm.png"

function Brand() {
  const isToggled = useSelector((state) => state.myCart?.toggle || false);
  return (
    <div
      className={`w-full bg-primaryColor flex flex-wrap justify-around items-center gap-2 p-4 ${
        isToggled ? "text-white" : "bg-gray-800 text-white"
      } transition-all duration-300 ease-in-out`}
    >
      <img
        src={hmImg}
        alt="Hm Logo"
        className="w-full sm:w-[45%] md:w-[10%] lg:w-[18%] h-[60px] object-contain"
      />
      <img
        src={ObeyImg}
        alt="Obey Logo"
        className="w-full sm:w-[45%] md:w-[10%] lg:w-[18%]  h-[100px] object-contain"
      />
      <img
        src={Shopify}
        alt="Shopify Logo"
        className="w-full sm:w-[45%] md:w-[10%] lg:w-[18%]  h-[60px] object-contain"
      />
      <img
        src={LacosteImg}
        alt="Lacoste Logo"
        className="w-full sm:w-[45%] md:w-[10%] lg:w-[18%]  h-[60px] object-contain"
      />

      <img
        src={AmazonImg}
        alt="Amazon Logo"
        className="w-full sm:w-[45%] md:w-[10%] lg:w-[18%]  h-[90px] object-contain"
      />
    </div>
  );
}

export default Brand;
