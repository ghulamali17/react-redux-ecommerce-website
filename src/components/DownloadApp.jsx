import React from "react";
import { Link } from "react-router-dom";
// import "./DownloadApp.css";
import { useSelector } from "react-redux";
import DownloadAppVideo from "./DonwloadAppVideo";

function DownloadApp() {
  const isToggled = useSelector((state) => state.myCart?.toggle || false);
  return (
    <div
      className={` pt-[100px]  ${
        isToggled ? "text-white" : "bg-gray-800 text-white"
      } transition-all duration-300 ease-in-out`}
    >
      <section className="max-w-[1483px] mx-auto grid md:grid-cols-2 xs:grid-cols-1 gap-6 md:gap-12 md:p-24 xs:p-8 items-center">
        {/* Left Section */}
        <div className="left-text">
          <h1
            className={`capitalize font-poppins font-bold md:text-4xl xs:text-4xl leading-tight ${
              isToggled ? "text-[#191919]" : "text-white"
            }`}
          >
            <span className="block">Download App &</span>
            <span>Get the Voucher</span>
          </h1>
          <div className="text-[#7C7C7C] mt-10">
            <p>
              <span className="block">
                Get 30% off for first transaction using
              </span>
              <span className="block">Rondovision mobile app for now.</span>
            </p>
            <div className="download flex gap-3 mt-10">
              <Link to={"#"}>
                <img src="./assets/app-store.png" alt="App Store" />
              </Link>
              <Link to={"#"}>
                <img src="./assets/play-store.png" alt="Play Store" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-img">
          {/* Mobile Image */}
          <DownloadAppVideo />
        </div>
      </section>
    </div>
  );
}

export default DownloadApp;
