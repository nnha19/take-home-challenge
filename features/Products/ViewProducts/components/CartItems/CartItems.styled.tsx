import styled from "styled-components";

interface CartItemsWrapperProps {
  showCartItems: boolean;
}

export const CartItemsWrapper = styled.div<CartItemsWrapperProps>`
  position: fixed;
  width: 416px;
  padding: 1rem 0;
  border-radius: 12px;
  bottom: 3rem;
  left: 50%;
  background: #fff;
  transform: translateX(-50%);
  opacity: ${(props) => (props.showCartItems ? "1" : 0)};
  z-index: ${(props) => (props.showCartItems ? "10" : "-1")};
`;

export const CartItemsContainer = styled.div`
  height: 613px;
  transition: all 0.4s;
  width: 416px;
`;

export const Items = styled.div`
  overflow-y: auto;
  height: 25rem;
`;

export const CartItem = styled.div`
  width: 336px;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 77px 14rem 1fr;
`;

export const RightSide = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  svg {
    font-size: 12px;
    cursor: pointer;
  }
  .removeProductBtn {
    font-size: 8px;
    margin-top: 1px;
  }
`;

export const PaymentSummary = styled.div`
  width: 209px;
  margin: 1.5rem auto;
`;

export const HideCartBtn = styled.span`
  position: absolute;
  bottom: -0.8rem;
  height: 2rem;
  width: 2rem;
  background: red;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    font-size: 9px;
    color: white;
  }
`;

export const ConfirmPaid = styled.div`
  height: 362px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .successIconContainer {
    width: 4rem;
    background-color: #5ddd48;
    height: 4rem;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
  svg {
    font-size: 2rem;
  }
  svg polyline {
    stroke: #fff;
  }
`;
