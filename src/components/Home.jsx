import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

function Home() {
  const [data, setData] = useState([]);
  let dispatch=useDispatch()
  useEffect(() => {
    myResponse();
  }, []);
  const myResponse = async () => {
    try {
      const response = await axios("https://fakestoreapi.com/products");
      setData(response.data);
      console.log(response.data);
    } catch (error) {}
  };
  let addToCartHandler=(id)=>{
    dispatch(id)
   console.log('item', id)
  }
  return (
    <div className="pt-5">
      <div className="text-2xl font-Jost text-center mb-4">
        <h1>Products</h1>
      </div>
      <div className="main-product-container">
        <div className="product grid grid-cols-4 max-w-[1170px] mx-auto">
          {data?.map((item) => {
            return (
              // Ensure to return the JSX here
              <div className="content" key={item.id}>
                <div className="image mb-3">
                <img src={item.image} alt={item.title} className="w-48 h-48 object-cover" />
                </div>
                <br />
                <div className="title">
                  <h1 className="font-bold">{item.title}</h1>
                </div>
                <br />
                <p>{item.price}</p>
               <div className="button mb-3">
               <button onClick={()=>addToCartHandler(item.id)} className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h18l-1.25 10.25a2 2 0 01-1.98 1.75H7.23a2 2 0 01-1.98-1.75L3 3z"
                    />
                  </svg>
                  Add to Cart
                </button>
               </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
