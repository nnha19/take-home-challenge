import React from "react";
import { useViewProductsHook } from "./useViewProductsHook";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

import { RotatingLines } from "react-loader-spinner";

import {
  CardsContainer,
  Wrapper,
  CardContainer,
  Rectangle,
  ViewCartBtn,
  CartItemCount,
  SelectBtn,
} from "./ViewProducts.styled";
import Text from "../../../components/Text/Text";
import Flex from "../../../components/Flex/Flex";
import Header from "../../../components/Header/Header";
import Navbar from "../../../components/Navbar/Navbar";
import CartItems from "./components/CartItems/CartItems";
import SkeletonLoading from "./components/SkeletonLoading/SkeletonLoading";
import FilterCards from "./components/FilterCards/FilterCards";

const ViewProducts = ({ data }) => {
  const {
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
    handleSearchCards,
    setDisplaySkeletons,
    handleFilterCards,
    setSearchQuery,
    searchQuery,
  } = useViewProductsHook(data);

  if (!cards) {
    return <p>Loading Cards</p>;
  }

  const renderedCars = cards.map((card) => {
    const isProductSelected = cartItems.some((i) => i.id === card.id);
    let cardName;
    if (card.name.length > 16) {
      cardName = card.name
        .split("")
        .splice(0, 13)
        .concat([".", ".", "."])
        .join("");
    } else {
      cardName = card.name;
    }

    return (
      <CardContainer>
        <img
          style={{
            width: "194px",
            height: "271px",
            position: "relative",
            zIndex: "1",
          }}
          src={card.images.small}
        />
        <Rectangle>
          <Flex padding="4rem 0 0 0" direction="column">
            <Header
              margin="1rem 0 0 0"
              fontSize="25px"
              fontWeight="700"
              textAlign="center"
            >
              {cardName}
            </Header>
            <Text margin="0 0 6.2px 0" color="#0F6DB0" textAlign="center">
              {card.rarity}
            </Text>
            <Flex justify="center">
              <Text margin="0 29.3px 0 0" fontSize="20px" color="#6A6969">
                ${card.cardmarket?.prices?.averageSellPrice}
              </Text>
              <Text fontSize="20px" color="#6A6969">
                {card.set.total} left
              </Text>
            </Flex>
            <SelectBtn
              isProductSelected={isProductSelected}
              onClick={() => handleAddToCart(card)}
              width="80%"
              margin=".5rem auto 0 auto"
            >
              {isProductSelected ? "Selected" : "Select"}
            </SelectBtn>
          </Flex>
        </Rectangle>
      </CardContainer>
    );
  });

  const queryIsApplied = !!Object.keys(searchQuery).length;

  return (
    <Wrapper>
      <Navbar />
      <FilterCards
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setDisplaySkeletons={setDisplaySkeletons}
        data={data}
        setCards={setCards}
      />
      {displaySkeletons && <SkeletonLoading />}
      {!displaySkeletons && <CardsContainer>{renderedCars}</CardsContainer>}
      <Flex
        onClick={handleFetchMoreItems}
        cursor="pointer"
        padding="0 0 2rem 0"
        justify="center"
      >
        {!isLoading && !queryIsApplied && (
          <>
            <AiOutlineSearch />
            <Text margin="0 .5rem">Show more</Text>
          </>
        )}
        {isLoading && <RotatingLines width="32" />}
      </Flex>
      <ViewCartBtn
        showCartItems={showCartItems}
        onClick={() => setShowCartItems(true)}
      >
        {cartItemsAmount > 0 && (
          <CartItemCount>{cartItemsAmount}</CartItemCount>
        )}
        <AiOutlineShoppingCart />
        View Cart
      </ViewCartBtn>
      <CartItems
        showCartItems={showCartItems}
        setShowCartItems={setShowCartItems}
        cartItems={cartItems}
        setCartItems={setCartItems}
        handleUpdateCartItemAmount={handleUpdateCartItemAmount}
        handleRemoveCartItem={handleRemoveCartItem}
      />
    </Wrapper>
  );
};

export default ViewProducts;
