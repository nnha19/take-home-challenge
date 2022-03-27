import axios from "axios";
import { useEffect, useState } from "react";
import { CardType, CartItemType } from "./types";
import toast from "react-hot-toast";

export const useViewProductsHook = (data: any) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [showCartItems, setShowCartItems] = useState(false);
  const [cards, setCards] = useState<CardType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [displaySkeletons, setDisplaySkeletons] = useState(false);

  // If search or filter is applied, this will be true and the show more btn will be hidden.
  const [filteredResult, setFilteredResult] = useState(false);
  const [searchQuery, setSearchQuery] = useState({
    name: "amp",
    rarity: "common",
    types: "colorless",
  });

  console.log(
    `?q=name:${searchQuery.name} types:${searchQuery.types} rarity:${searchQuery.rarity}`
  );

  const handleFetchMoreItems = async () => {
    try {
      setIsLoading(true);
      const resp = await axios(
        `https://api.pokemontcg.io/v2/cards?pageSize=250?`
      );
      const moreCards = resp.data.data.slice(cards.length, cards.length + 12);
      setCards([...cards, ...moreCards]);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  const handleAddToCart = (card: CardType) => {
    const alreadyExist = cartItems.find((c) => c.id === card.id);
    if (alreadyExist) {
      toast.error("This item is already in the cart!");
      return;
    }
    setCartItems([...cartItems, { ...card, pickedQty: 1 }]);
    toast.success("Successfully added to cart!");
  };

  const handleUpdateCartItemAmount = (
    cartItem: CartItemType,
    type: "decrease" | "increase"
  ) => {
    const clonedCartItems = [...cartItems];
    const foundItem = clonedCartItems.find((item) => item.id === cartItem.id);
    const itemIndex = clonedCartItems.findIndex((i) => i.id === cartItem.id);
    if (!foundItem) return;
    if (type === "increase") {
      if (cartItem.set.total === cartItem.pickedQty) return;
      foundItem.pickedQty += 1;
    } else {
      foundItem.pickedQty -= 1;
    }
    clonedCartItems[itemIndex] = foundItem;
    setCartItems(clonedCartItems);
  };

  const handleRemoveCartItem = (cartItem: CartItemType) => {
    setCartItems(cartItems.filter((item) => item.id !== cartItem.id));
  };

  useEffect(() => {
    setCards(data?.data?.data);
  }, [data]);

  const cartItemsAmount = cartItems.reduce(
    (prev, cur) => cur.pickedQty + prev,
    0
  );

  const handleSearchCards = async (query: string) => {
    setDisplaySkeletons(true);
    try {
      const resp = await axios(
        `https://api.pokemontcg.io/v2/cards?q=name:${query}*`
      );
      setCards(resp.data.data);
      setDisplaySkeletons(false);
    } catch (err) {
      setDisplaySkeletons(false);
    }
  };

  const handleFilterCards = (selectedOption: string, type: string) => {};

  return {
    setShowCartItems,
    showCartItems,
    handleFetchMoreItems,
    cards,
    setCards,
    isLoading,
    handleAddToCart,
    cartItems,
    setCartItems,
    handleUpdateCartItemAmount,
    handleRemoveCartItem,
    cartItemsAmount,
    displaySkeletons,
    setDisplaySkeletons,
    handleSearchCards,
    filteredResult,
    setFilteredResult,
    handleFilterCards,
    setSearchQuery,
  };
};
