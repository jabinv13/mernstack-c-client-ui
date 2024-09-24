"use client";
import React from "react";
import CartItems from "./cartItems/cartItems";
import { useAppSelector } from "@/lib/store/hooks";

const CartPage = () => {
  const cart = useAppSelector((state) => state.cart.cartItems);

  console.log(cart);
  return (
    <section>
      <div className="container mx-auto py-6">
        <h1 className="text-lg font-bold">Shopping cart</h1>
        <div className="bg-white rounded-lg p-6 mt-6">
          <CartItems />
        </div>
      </div>
    </section>
  );
};

export default CartPage;
