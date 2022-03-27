import axios from "axios";
import { useEffect, useState } from "react";
import { CardType, CartItemType, SearchQueryType } from "./types";
import toast from "react-hot-toast";

export const useViewProductsHook = (data: any) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [showCartItems, setShowCartItems] = useState(false);
  const [cards, setCards] = useState<CardType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [displaySkeletons, setDisplaySkeletons] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const [searchQuery, setSearchQuery] = useState<SearchQueryType>({});

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

  const handleSearchCards = async (query: string) => {
    if (Object.keys(searchQuery).length < 1) return;
    setDisplaySkeletons(true);
    try {
      const resp = await axios(`https://api.pokemontcg.io/v2/cards${query}`);
      setCards(resp.data.data);
      setDisplaySkeletons(false);
    } catch (err) {
      setDisplaySkeletons(false);
    }
  };

  useEffect(() => {
    let query = `?q=`;
    //   Wait for 600 milisec before calling the api to see if user continues typing

    setDisplaySkeletons(true);
    if (searchQuery?.name !== "") {
      if (timer) {
        clearTimeout(timer);
      }
      const clearTimer = setTimeout(() => {
        for (let key in searchQuery) {
          if (key === "name") {
            query = `${query} ${key}:${searchQuery[key]}*`;
          } else {
            query = `${query} ${key}:${
              searchQuery[key as keyof SearchQueryType]
            }`;
          }
        }
        handleSearchCards(query);
      }, 2000);
      setTimer(clearTimer);
    } else {
      if (timer) clearTimeout(timer);
      setDisplaySkeletons(false);
      setCards(data.data.data);
    }
  }, [searchQuery.name]);

  useEffect(() => {
    let query = `?q=`;
    for (let key in searchQuery) {
      if (searchQuery[key as keyof SearchQueryType].length > 0) {
        if (key === "name") {
          query = `${query} ${key}:${searchQuery[key]}*`;
        } else {
          query = `${query} ${key}:${
            searchQuery[key as keyof SearchQueryType]
          }`;
        }
      }
    }
    handleSearchCards(query);
  }, [searchQuery.rarity, searchQuery.types]);

  const cartItemsAmount = cartItems.reduce(
    (prev, cur) => cur.pickedQty + prev,
    0
  );

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
    handleFilterCards,
    searchQuery,
    setSearchQuery,
  };
};
