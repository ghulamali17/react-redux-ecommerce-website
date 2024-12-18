import React from "react";
import NewArrBox from "./NewArrBox";

function NewArrival() {
  return (
    <div>
      <section>
        <div className="title max-w-[1300px] mx-auto mt-5 text-2xl">
          <h1 className="font-bold font-poppins mb-5">NEW ARRIVALS</h1>
          <div className="content grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-6 justify-center">
            <NewArrBox
              img="./assets/img-new1.png"
              text="Hoodies & Sweetshirt"
            />
            <NewArrBox
              img="./assets/img-new1.png"
              text="Coats & Parkas"
            />
            <NewArrBox
              img="./assets/img-new1.png"
              text="Tees & T-Shirt"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewArrival;
