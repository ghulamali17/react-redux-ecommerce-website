import React from "react";
import { useSelector } from "react-redux";

function DownloadAppVideo() {
  const isToggled = useSelector((state) => state.myCart?.toggle || false);
  return (
    <div>
      <section className="text-center">
        <h1 className="text-5xl font-poppins font-bold">
          <span className={` ${isToggled ? "text-black" : "text-white"} `}>
            {" "}
            Download our
          </span>{" "}
          <a href="#" className="text-primaryColor underline hover:underline">
            App
          </a>
        </h1>
        <div className="w-[100%] h-full mx-auto mt-8">
          <video
            autoPlay
            muted
            loop
            src="./assets/download.mp4"
            className="w-full h-1/2 rounded-2xl"
          ></video>
        </div>
      </section>
    </div>
  );
}

export default DownloadAppVideo;
