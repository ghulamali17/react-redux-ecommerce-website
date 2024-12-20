import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { addToCart } from "../Redux/slice";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [similarProduct, setSimilarProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();
  const params = useParams();

  //  Redux
  const cartData = useSelector((state) => state.myCart?.cartItems || []);
  const isToggled = useSelector((state) => state.myCart?.toggle || false);

  // Fetch Product Details
  const getProd = async () => {
    setLoading(true);
    try {
      const res = await axios(`https://fakestoreapi.com/products/${params.id}`);
      setProduct(res.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Similar Products
  const getSimilarProduct = async () => {
    if (!product) return;
    try {
      const res = await axios(
        `https://fakestoreapi.com/products/category/${product.category}`
      );
      setSimilarProduct(res.data);
    } catch (error) {
      console.error("Error fetching similar products:", error);
    }
  };

  // Add to Cart Handler
  const addToCartHandler = (item) => {
    if (!user) {
      alert("Login to Add Products");
      return;
    }
    const existingProduct = cartData.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingProduct) {
      alert("Product Already Exists");
      return;
    }
    dispatch(addToCart(item));
    alert("Product Added to Cart");
  };

  // Getting Current user firebase
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    getProd();
  }, [params.id]);

  useEffect(() => {
    getSimilarProduct();
  }, [product]);

  const themeClasses = isToggled
    ? "bg-white text-black"
    : "bg-gray-800 text-white";

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      className={`py-8 mt-[100px] font-poppins ${themeClasses} transition-all duration-300 ease-in-out`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={product.image}
                alt={product.title}
              />
            </div>
            <h3 className="text-lg font-bold mb-2">Similar Products:</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {similarProduct.map((item) => (
                <div key={item.id} className="border rounded-lg p-2">
                  <Link to={`/products/${item.id}`}>
                    <img
                      className="w-full h-32 object-cover"
                      src={item.image}
                      alt={item.title}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className={`md:flex-1 px-4 ${themeClasses}`}>
            <h2
              className={`text-2xl font-bold mb-2 ${
                isToggled ? "text-gray-800" : "text-gray-200"
              }`}
            >
              {product.title}
            </h2>
            <p
              className={`text-sm mb-4 ${
                isToggled ? "text-gray-700" : "text-gray-300"
              }`}
            >
              {product.description}
            </p>
            <div className="flex flex-col mb-4">
              <div className="mr-4">
                <span
                  className={`font-bold ${
                    isToggled ? "text-gray-900" : "text-gray-300"
                  }`}
                >
                  Price:
                </span>
                <span
                  className={`ml-2 ${
                    isToggled ? "text-gray-700" : "text-gray-400"
                  }`}
                >
                  ${product.price}
                </span>
              </div>
              <div className="flex flex-col">
                <div>
                  <span
                    className={`font-bold ${
                      isToggled ? "text-gray-900" : "text-gray-300"
                    }`}
                  >
                    Availability:
                  </span>
                  <span
                    className={`ml-2 ${
                      isToggled ? "text-gray-700" : "text-gray-400"
                    }`}
                  >
                    In Stock
                  </span>
                </div>
                <span
                  className={`font-bold ${
                    isToggled ? "text-gray-900" : "text-gray-300"
                  }`}
                >
                  Category: {product.category}
                </span>
              </div>

              <a
                href="#"
                className={`
                            flex w-[200px] my-5 items-center justify-center rounded-md  px-5 py-2.5 text-center text-sm 
                            font-medium  hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
                              isToggled
                                ? "bg-slate-900 text-white"
                                : "text-slate-900 bg-white"
                            }
                            `}
                onClick={() => addToCartHandler(product)}
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
