import { useState } from "react";
import { CartItemType } from "../../types";

export const useCartItemsHook = (cartItems: CartItemType[]) => {
  const [isPaid, setIsPaid] = useState(false);
  const totalCards = cartItems.reduce((prev, cur) => cur.pickedQty + prev, 0);
  let totalPrice = cartItems
    .map(
      (item) => Number(item.cardmarket.prices.averageSellPrice) * item.pickedQty
    )
    .reduce((prev, cur) => prev + cur, 0);

  const handlePay = () => {
    //   Make request to server
    setIsPaid(true);
  };

  return {
    isPaid,
    setIsPaid,
    totalCards,
    totalPrice,
    handlePay,
  };
};
