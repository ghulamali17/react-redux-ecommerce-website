import React from "react";
import { useSelector } from "react-redux";

function Button(props) {
  return (
    <div>
      <button
        onClick={props.click}
        className={props.classname}
      >
        {props.title}
      </button>
    </div>
  );
}

export default Button;
