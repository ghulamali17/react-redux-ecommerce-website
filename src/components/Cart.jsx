import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { removeItem, clearCart, increment, decrement } from "../Redux/slice";
import { IoAddCircle } from "react-icons/io5";
import { IoIosRemoveCircle } from "react-icons/io";

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

  return (
    <div
      className={`pt-5  ${
        isToggled ? "bg-white text-black" : "bg-gray-800 text-white"
      }  transition-all duration-300 ease-in-out`}
    >
      <div className="text-2xl font-Jost text-center">
        <h1>Cart</h1>
        {cartData.length === 0
          ? "Cart is empty"
          : `${cartData.length} ${
              cartData.length === 1 ? "Item" : "Items"
            } in cart`}
      </div>

      {cartData.length > 0 && (
        <div className="text-center mb-4">
          <button
            onClick={clearCartHandler}
            className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
          >
            Clear Cart
          </button>
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
                <td className="text-center py-4">{item.title}</td>
                <td className="text-center py-4">${item.price}</td>
                <td className="text-center py-4">
                  <div className="flex items-center justify-center space-x-2">
                    <IoAddCircle
                      onClick={() => incrementHandler(item.id)}
                      className="text-2xl cursor-pointer text-green-500 hover:text-green-600 transition"
                    />
                    <p className="text-lg font-semibold">{item.quantity}</p>
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

      <div className="total-amount w-full sm:w-[50%] border border-[#e2e9e1] p-8 mx-auto mt-6 pb-6">
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
        <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 mt-4 px-4 rounded-lg shadow-md transition-all duration-300">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
