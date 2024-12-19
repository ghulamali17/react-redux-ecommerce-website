import React from 'react'
import { Link } from "react-router-dom";

function NewArrBox(props) {
  return (
    <div>
      <div className="card">
       <img src={props.img} className='rounded-3xl' alt="men fashion image" />
       <p className={props.classname}>{props.text}</p>
       <Link className='text-[#7F7F7F] mt-3 text-xl' to={'/products'}>Explore Now</Link>
      </div>
    </div>
  )
}

export default NewArrBox
