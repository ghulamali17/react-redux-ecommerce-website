import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/slice";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.myCart?.cartItems || []);
  const isToggled = useSelector((state) => state.myCart?.toggle || false);

  useEffect(() => {
    myResponse();
  }, []);

  // Fetch Product Data
  const myResponse = async () => {
    try {
      const response = await axios("https://fakestoreapi.com/products");
      setData(response.data);
      setLoading(false);
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
    <>
      {loading !== false ? (
        <Loading />
      ) : (
        <div
          className={`pt-5 ${
            isToggled ? "bg-white text-black" : "bg-gray-800 text-white"
          } transition-all duration-300 ease-in-out`}
        >
          {/* Title Section */}
          <div className="text-2xl font-Jost text-center mb-4">
            <h1>Products</h1>
          </div>

          {/* Product Container */}
          <div className="main-product-container">
            <div className="product grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 max-w-[1170px] md:p-14 sm:p-8 xs:p-5 mx-auto gap-4">
              {/* Render Product Cards */}
              {data?.map((item) => (
                <div
                  className="content border p-4 rounded-lg shadow-md"
                  key={item.id}
                >
                  {/* Product Image */}
                  <div className="image mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover mx-auto"
                    />
                  </div>

                  {/* Product Title */}
                  <div className="title">
                    <h1 className="font-bold text-center">
                      {item.title
                        ? `${item.title.substring(0, 20)}...`
                        : "Default Title"}
                    </h1>
                  </div>

                  {/* Product Price */}
                  <p className="text-center text-lg">${item.price}</p>

                  {/* Add to Cart Button */}
                  <div className="button mt-3 text-center">
                    
                    <Button click={() => addToCartHandler(item)} title={'Add to cart'} classname={`w-[200px] mt-4 py-2 px-4 rounded-full font-bold 
            ${
              isToggled
                ? "bg-red-500 hover:bg-red-700 text-white"
                : "bg-red-500 hover:bg-red-700 text-gray-300"
            }`} 
                    />

                    <button onClick={() => navigate(`/products/${item.id}`)}>
                      More Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;



{/* <button
                      onClick={() => addToCartHandler(item)}
                      className={`w-[200px] mt-4 py-2 px-4 rounded-full font-bold 
            ${
              isToggled
                ? "bg-red-500 hover:bg-red-700 text-white"
                : "bg-red-500 hover:bg-red-700 text-gray-300"
            }`}
                    >
                      Add to Cart
                    </button> */}