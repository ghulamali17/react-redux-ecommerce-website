import React from "react";
import { Link } from "react-router-dom";

function FitCard(props) {
  return (
    <div>
      <div className="card">
        <img src={props.img} alt="" />
        <p className={props.classname}>{props.text}</p>
        <Link className={props.classname} to={"/products"}>
          Explore Now
        </Link>
      </div>
    </div>
  );
}

export default FitCard;
