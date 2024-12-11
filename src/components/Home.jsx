import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/slice";

function Home() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.myCart?.cartItems || []);

  useEffect(() => {
    myResponse();
  }, []);

  // Fetch Product Data
  const myResponse = async () => {
    try {
      const response = await axios("https://fakestoreapi.com/products");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Add to Cart
  const addToCartHandler = (items) => {
    const existingProduct = cartData.find((item) => item.id === items.id);
    if (existingProduct) {
      alert("Product Already Exists");
      return;
    }
    dispatch(addToCart(items));
    alert("Product Added to Cart");
  };

  return (
    <div className="pt-5">
      <div className="text-2xl font-Jost text-center mb-4">
        <h1>Products</h1>
      </div>
      <div className="main-product-container">
        <div className="product grid grid-cols-4 max-w-[1170px] mx-auto gap-4">
          {/* Product Data Show Heres */}
          {data?.map((item) => (
            <div
              className="content border p-4 rounded-lg shadow-md"
              key={item.id}
            >
              <div className="image mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-48 h-48 object-cover mx-auto"
                />
              </div>
              <div className="title">
                <h1 className="font-bold text-center">{item.title}</h1>
              </div>
              <p className="text-center text-lg text-gray-700">${item.price}</p>
              <div className="button mt-3 text-center">
                {/* Add to Cart Btns */}
                <button
                  onClick={() => addToCartHandler(item)}
                  className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
                >
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
