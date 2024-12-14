import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { addToCart } from "../Redux/slice";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [similarProduct, setSimilarProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const params = useParams();

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

  useEffect(() => {
    getProd();
  }, [params.id]);

  useEffect(() => {
    getSimilarProduct();
  }, [product]);
  const themeClasses = isToggled
    ? "bg-white text-black"
    : "bg-black text-white";

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      className={`py-8 ${themeClasses} transition-all duration-300 ease-in-out`}
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
              <button
                onClick={() => addToCartHandler(product)}
                className={`w-[200px] mt-4 py-2 px-4 rounded-full font-bold ${
                  isToggled
                    ? "bg-red-500 hover:bg-red-700 text-white"
                    : "bg-red-500 hover:bg-red-700 text-gray-300"
                }`}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
