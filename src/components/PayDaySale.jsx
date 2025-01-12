import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import "./PayDaySale.css";
import { useNavigate } from "react-router-dom";
import manImg from "../../assets/man-img.png"
function PayDaySale() {
  const isToggled = useSelector((state) => state.myCart?.toggle || false);
  const navigate=useNavigate();
  return (
    <div
      className={` pt-[100px] ${
        isToggled ? "text-black" : "bg-gray-800 text-black"
      } transition-all duration-300 ease-in-out`}
    >
     <section className="bg-primaryColor font-poppins w-full">
     <div className="grid payday lg:grid-cols-2 xs:grid-cols-1 xs:flex-col-reverse">

    {/* Image Section */}
    <div className="left-content">
      <img
        src={manImg}
        alt="Promo Man Image"
        className="md:h-[550px] w-full object-contain"
      />
    </div>

    {/* Text Content Section */}
    <div className="right-content md:mt-0 xs:mt-3 md:px-[50px] md:py-[60px] xs:px-[18px] xs:py-[20px]">
      <h1 className="font-poppins font-bold text-7xl xs:text-6xl leading-tight">
        <span className="= bg-white p-3 md:p-4 rounded-sm inline-block">
          PAYDAY
        </span>
        <span className="block p-3 md:p-4 rounded-sm">SALE NOW</span>
      </h1>

      <p className="font-medium" style={{ lineHeight: "52.3px" }}>
        <span className="block text-2xl">Spend minimal $100 get 30% off</span>
        <span className="block text-2xl">voucher code for your next purchase</span>
      </p>
      <h3 className="mt-4 font-bold text-2xl">1 Jan - 15 Jan 2025</h3>
      <p className="text-2xl">*Terms & Conditions apply</p>
      <Button
        title="SHOP NOW"
        classname="bg-black text-center p-3 text-white mt-6 hover:bg-gray-800"
        click={() => navigate("/shop")}
      />
    </div>
  </div>
</section>

    </div>
  );
}

export default PayDaySale;
