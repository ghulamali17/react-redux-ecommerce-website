// Shop.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import Card from "../components/Card";

function Shop() {
  // Getting Current User Firebase
  const auth = getAuth();
  const user = auth.currentUser;

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

  // Add to Cart Handler
  const addToCartHandler = (items) => {
    if (!user) {
      alert("Login to Add Products");
      return;
    }
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
          className={`pt-5 font-poppins ${
            isToggled ? "bg-white text-black" : "bg-gray-800 text-white"
          } transition-all duration-300 ease-in-out`}
        >
          {/* Title Section */}
          <div className="text-2xl font-Jost text-center mb-4">
            <div className="relative">
              <img
                src="./assets/design.svg"
                className="absolute top-[60%] left-[47%] z-0"
                alt="design"
              />
              <h1
                className={`font-bold font-poppins text-5xl mb-5 pt-5 ${
                  isToggled ? "text-[#191919]" : "text-white"
                } z-10 relative`}
              >
               SHOP NOW
              </h1>
            </div>
          </div>

          {/* Product Container */}
          <div className="main-product-container">
            <div className="product grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 max-w-[1170px] md:p-14 sm:p-8 xs:p-5 mx-auto gap-4">
              {/* Show Product Cards Section */}
              {data?.map((item) => (
                <div className="content" key={item.id}>
                  <Card
                    img={item.image}
                    title={
                      item.title
                        ? `${item.title.substring(0, 15)}...`
                        : "Default Title"
                    }
                    price={`$${item.price}`}
                    onAddToCart={addToCartHandler}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Shop;
