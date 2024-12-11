import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { removeItem, clearCart, increment, decrement } from "../Redux/slice";
import { IoAddCircle } from "react-icons/io5";
import { IoIosRemoveCircle } from "react-icons/io";

function Cart() {
  const cartData = useSelector((state) => state.myCart?.cartItems || []);
  const dispatch = useDispatch();

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
    <div className="pt-5">
      <div className="text-2xl font-Jost text-center mb-4">
        <h1>Cart</h1>
        <h1>Total {totalPrice && totalPrice.toFixed(2)}</h1>
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

      <div className="product-list grid grid-cols-2 gap-4 max-w-[1170px] mx-auto">
        {cartData.map((items) => (
          <div
            className="product border p-4 rounded-lg shadow-md"
            key={items.id}
          >
            <img
              src={items.image}
              alt={items.title}
              className="w-48 h-48 object-cover mx-auto mb-3"
            />
            <h1 className="font-bold text-lg text-center">{items.title}</h1>

            <div className="flex items-center gap-4">
              <IoAddCircle
                onClick={() => incrementHandler(items.id)}
                className="text-2xl cursor-pointer text-green-500 hover:text-green-600 transition"
              />
              <p className="text-center text-gray-700 text-lg font-semibold">
                ${items.price}
              </p>
              <IoIosRemoveCircle
                onClick={() => decrementHandler(items.id)}
                className="text-2xl cursor-pointer text-red-500 hover:text-red-600 transition"
              />

              <p>Quantity: {items.quantity}</p>
            </div>

            <button
              onClick={() => deleteItemHandler(items.id)}
              className="flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded-lg shadow-md transition-all duration-300 ease-in-out"
            >
              <MdDelete className="w-5 h-5" />
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
