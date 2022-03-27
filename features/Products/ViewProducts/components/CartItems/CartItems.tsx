import Flex from "../../../../../components/Flex/Flex";
import Header from "../../../../../components/Header/Header";
import Text from "../../../../../components/Text/Text";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { GrCheckmark } from "react-icons/gr";

import {
  CartItem,
  CartItemsContainer,
  CartItemsWrapper,
  ConfirmPaid,
  HideCartBtn,
  Items,
  PaymentSummary,
  RightSide,
} from "./CartItems.styled";
import { Button } from "../../../../../components/Button/Button";
import { CartItemType } from "../../types";
import { useCartItemsHook } from "./useCartItemsHook";

interface IProps {
  setShowCartItems: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
  handleUpdateCartItemAmount: (
    cartItem: CartItemType,
    type: "increase" | "decrease"
  ) => void;
  handleRemoveCartItem: (item: any) => void;
  showCartItems: boolean;
}

const CartItems: React.FC<IProps> = ({
  cartItems,
  setCartItems,
  setShowCartItems,
  handleUpdateCartItemAmount,
  handleRemoveCartItem,
  showCartItems,
}) => {
  const { totalCards, totalPrice, handlePay, isPaid, setIsPaid } =
    useCartItemsHook(cartItems);

  const renderCartItems = cartItems.map((cartItem) => {
    const totalPrice =
      cartItem.pickedQty * Number(cartItem.cardmarket.prices.averageSellPrice);
    return (
      <CartItem>
        <img
          style={{ height: "106px", width: "77px" }}
          src={cartItem.images.small}
        />
        <Flex padding="1rem 0 0 0" margin="0 3rem 0 1rem" direction="column">
          <Header>{cartItem.name}</Header>
          <Text margin="5px 0 0 0">
            ${cartItem.cardmarket.prices.averageSellPrice} per card
          </Text>
          <Flex margin="0 0 .5rem 0" alignItems="flex-end" height="100%">
            <Text color="#FD2929" margin="0 .3rem 0 0">
              {cartItem.set.total}
            </Text>
            <Text>cards left</Text>
          </Flex>
        </Flex>
        <RightSide>
          <Flex>
            <Text
              margin="0 0 -.5rem 0"
              color="#298BFD"
              style={{ alignSelf: "flex-end" }}
            >
              <b>{cartItem.pickedQty}</b>
            </Text>
            <Flex
              height="24px"
              alignItems="center"
              margin="0 0 0 .4rem"
              direction="column"
            >
              <IoIosArrowUp
                onClick={() => handleUpdateCartItemAmount(cartItem, "increase")}
                color="#298BFD"
              />
              {cartItem.pickedQty !== 1 ? (
                <IoIosArrowDown
                  onClick={() =>
                    handleUpdateCartItemAmount(cartItem, "decrease")
                  }
                  color="#298BFD"
                />
              ) : (
                <ImCross
                  onClick={() => handleRemoveCartItem(cartItem)}
                  className="removeProductBtn"
                  color="#FD2929"
                />
              )}
            </Flex>
          </Flex>
          <Flex direction="column">
            <Text>price</Text>
            <Text color="#298BFD">
              <b>${Math.round(totalPrice * 100) / 100}</b>
            </Text>
          </Flex>
        </RightSide>
      </CartItem>
    );
  });
  return (
    <CartItemsWrapper showCartItems={showCartItems}>
      {!isPaid ? (
        <CartItemsContainer>
          <Items>{renderCartItems}</Items>
          <Text
            onClick={() => setCartItems([])}
            textDecoration="underline"
            textAlign="center"
            cursor="pointer"
            fontSize="12px"
            color="#6A6969"
          >
            Clear all
          </Text>
          <PaymentSummary>
            <Flex justify="space-between">
              <Text fontWeight="500">Total cards</Text>
              <Text fontWeight="500" color="#FD2929">
                {totalCards}
              </Text>
            </Flex>
            <Flex margin="1rem 0 0 0" justify="space-between">
              <Text fontWeight="bold">Total price</Text>
              <Text fontWeight="bold" color="#FD2929">
                ${Math.round(totalPrice * 100) / 100}
              </Text>
            </Flex>
            <Button
              onClick={handlePay}
              color="white"
              backgroundColor="#298BFD"
              margin="1.5rem 0 0 0"
            >
              Pay now
            </Button>
          </PaymentSummary>
        </CartItemsContainer>
      ) : (
        <ConfirmPaid>
          <Flex className="successIconContainer">
            <GrCheckmark color="#fff" />
          </Flex>
          <Text fontSize="20px" fontWeight="500">
            Payment Success!
          </Text>
        </ConfirmPaid>
      )}
      <HideCartBtn
        onClick={() => {
          setShowCartItems(false);
          setTimeout(() => {
            setIsPaid(false);
          }, 500);
        }}
      >
        <ImCross />
      </HideCartBtn>
    </CartItemsWrapper>
  );
};
export default CartItems;
