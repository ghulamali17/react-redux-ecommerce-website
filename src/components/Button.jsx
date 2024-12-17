import React from "react";

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
