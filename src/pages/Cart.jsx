import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { removeItem, clearCart, increment, decrement } from "../Redux/slice";
import { IoAddCircle } from "react-icons/io5";
import { IoIosRemoveCircle } from "react-icons/io";
import Button from "../components/Button";

function Cart() {
  const cartData = useSelector((state) => state.myCart?.cartItems || []);
  const dispatch = useDispatch();

  const isToggled = useSelector((state) => state.myCart?.toggle || false);

  const deleteItemHandler = (id) => {
    dispatch(removeItem(id));
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };
  const incrementHandler = (id) => {
    dispatch(increment(id));
  };
  const decrementHandler = (id) => {
    dispatch(decrement(id));
  };

  // Total Price Calculation
  const totalPrice = cartData.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // Item Price Calculation
  const getItemPrice = (id) => {
    const item = cartData.find((item) => item.id === id);
    return item ? item.price * item.quantity : 0;
  };

  return (
    <div
      className={`mt-[100px] pb-11 min-h-screen font-poppins ${
        isToggled ? "bg-white text-black" : "bg-gray-800 text-white"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="text-2xl font-Jost text-center">
        <h1
          className={`font-bold font-poppins text-5xl mb-5 pt-5 ${
            isToggled ? "text-[#191919]" : "text-white"
          }`}
        >
          CART
        </h1>
        <h3 className="font-bold">
          {cartData.length === 0
            ? "Cart Is Empty"
            : `${cartData.length} ${
                cartData.length === 1 ? "Item" : "Items"
              } in cart`}
        </h3>
      </div>

      {cartData.length > 0 && (
        <div className="text-center mb-4">
          <Button
            click={clearCartHandler}
            title={"Clear Cart"}
            classname={
              "bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
            }
          />
        </div>
      )}

      <div className="product-list max-w-[1170px] mx-auto overflow-x-auto">
        <table className="min-w-[600px] w-full table-fixed border-collapse whitespace-nowrap">
          <thead
            className={`${
              isToggled ? "bg-white text-black" : "bg-gray-800 text-black"
            } transition-all duration-300 ease-in-out`}
          >
            <tr className="border border-x-0 border-gray-300 bg-gray-100">
              <td className="text-xs font-bold uppercase py-4 text-center w-[100px] sm:w-[120px]">
                Remove
              </td>
              <td className="text-xs font-bold uppercase py-4 text-center w-[150px] sm:w-[180px]">
                Image
              </td>
              <td className="text-xs font-bold uppercase py-4 text-center w-[250px] sm:w-[300px]">
                Product
              </td>
              <td className="text-xs font-bold uppercase py-4 text-center w-[150px] sm:w-[180px]">
                Price
              </td>
              <td className="text-xs font-bold uppercase py-4 text-center w-[150px] sm:w-[180px]">
                Quantity
              </td>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item) => (
              <tr key={item.id} className="border-t">
                {/* Remove Button */}
                <td className="text-center py-4">
                  <button
                    onClick={() => deleteItemHandler(item.id)}
                    className="flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded-lg shadow-md transition-all duration-300 ease-in-out"
                  >
                    <MdDelete className="w-5 h-5" />
                  </button>
                </td>

                {/* Product Image */}
                <td className="text-center py-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[30%] mx-auto sm:w-[20%]"
                  />
                </td>
                <td className="text-center py-4 break-words whitespace-normal">
                  {item.title}
                </td>
                <td className="text-center py-4">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>

                <td className="text-center py-4">
                  <div className="flex items-center justify-center space-x-2">
                    <IoAddCircle
                      onClick={() => incrementHandler(item.id)}
                      className="text-2xl cursor-pointer text-green-500 hover:text-green-600 transition"
                    />
                    <p className="text-lg font-semibold px-2">
                      {item.quantity}
                    </p>
                    <IoIosRemoveCircle
                      onClick={() => decrementHandler(item.id)}
                      className="text-2xl cursor-pointer text-red-500 hover:text-red-600 transition"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="total-amount w-full sm:w-[50%] border shadow-custom-shadow p-8 mx-auto ">
        <h3 className="text-xl font-semibold mb-4">Cart Totals</h3>
        <table className="border-collapse border border-gray-400 w-full text-left">
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2">
                Cart SubTotal
              </td>
              <td className="border border-gray-400 px-4 py-2 finalTotal">
                <h1 className="text-lg font-semibold">
                  Total: ${totalPrice.toFixed(2)}
                </h1>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Shipping</td>
              <td className="border border-gray-400 px-4 py-2" id="ship-fee">
                Free
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                <strong>Total</strong>
              </td>
              <td className="border border-gray-400 px-4 py-2 finalTotal">
                <strong>
                  <h1 className="text-lg font-semibold">
                    Total: ${totalPrice.toFixed(2)}
                  </h1>
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
        <Button
          title={"Proceed to Checkout"}
          classname={
            "bg-red-500 hover:bg-red-700 text-white font-semibold py-2 mt-4 px-4 rounded-lg shadow-md transition-all duration-300"
          }
        />
      </div>
    </div>
  );
}

export default Cart;
