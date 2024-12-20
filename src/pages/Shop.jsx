import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/slice";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";

function Shop() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.myCart?.cartItems || []);
  const isToggled = useSelector((state) => state.myCart?.toggle || false);

  useEffect(() => {
    getData();
  }, []);

  // Getting Current User
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Fetch Product Data
  const getData = async () => {
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
          className={`mt-[100px] font-poppins ${
            isToggled ? "bg-white text-black" : "bg-gray-800 text-white"
          } transition-all duration-300 ease-in-out`}
        >
          {/* Title Section */}
          <div className="text-2xl font-Jost text-center mb-4">
            <div className="relative z-0">
              <img
                src="./assets/design.svg"
                className="absolute top-[60%] left-[47%] z-0"
                alt="design"
              />
              <h1
                className={`font-bold font-poppins text-5xl mb-5 pt-5 ${
                  isToggled ? "text-[#191919]" : "text-white"
                } z-20 relative`}
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
                  <div>
                    <div className="relative md:m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                      <a
                        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                        href="#"
                      >
                        <img
                          className="object-cover"
                          src={item.image}
                          alt={item.title}
                        />
                        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                          39% OFF
                        </span>
                      </a>
                      <div className="mt-4 px-5 pb-5">
                        <a href="#">
                          <h5 className="text-xl tracking-tight text-slate-900">
                            {`${item.title.substring(0, 15)}....`}
                          </h5>
                        </a>
                        <div className="mt-2 mb-5 flex items-center justify-between">
                          <p>
                            <span className="text-3xl font-bold text-slate-900">
                              {`$${item.price}`}
                            </span>
                            <span className="text-sm text-slate-900 line-through">
                              $999
                            </span>
                          </p>
                          <div className="flex items-center">
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-yellow-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-yellow-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-yellow-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-yellow-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-yellow-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                              5.0
                            </span>
                          </div>
                        </div>

                        <Link
                          to="#"
                          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                          onClick={() => addToCartHandler(item)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          Add to cart
                        </Link>

                        <Link
                          to={`/products/${item.id}`}
                          className="block mt-2 text-black text-center  hover:underline"
                        >
                          See More
                        </Link>
                      </div>
                    </div>
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

export default Shop;
