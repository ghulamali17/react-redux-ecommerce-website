import React from "react";
import { Link } from "react-router-dom";

function FitCard(props) {
  return (
    <div>
      <div className="card">
        <img src={props.img} alt={props.altText} />
        <p className={props.textClass}>{props.text}</p>
        <Link className={props.expTextClass} to={"/products"}>
          {props.expText}
        </Link>
      </div>
    </div>
  );
}

export default FitCard;