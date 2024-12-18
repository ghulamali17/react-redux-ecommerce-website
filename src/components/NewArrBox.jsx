import React from 'react'
import { Link } from "react-router-dom";

function NewArrBox(props) {
  return (
    <div>
      <div className="card">
       <img src={props.img} alt="" />
       <p className='text-xl font-poppins mt-3 text-[#191919]'>{props.text}</p>
       <Link className='text-[#7F7F7F] mt-3 text-xl' to={'/products'}>Explore Now</Link>
      </div>
    </div>
  )
}

export default NewArrBox
