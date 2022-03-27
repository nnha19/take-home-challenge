import styled from "styled-components";
import { Button } from "../../../components/Button/Button";

export const Wrapper = styled.div`
  background-color: #e5e5e5;
`;

export const CardsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(294px, 1fr));
  gap: 73px;
  justify-items: center;
  padding: 3rem;
  min-height: 100vh;
`;
export const CardContainer = styled.div`
  text-align: center;
`;

export const Rectangle = styled.div`
  height: 204px;
  width: 294px;
  background: #ffffff;
  margin-top: -4rem;
  border-radius: 20px;
  position: relative;
`;

export const SelectBtn = styled(Button)<{ isProductSelected?: boolean }>`
  background: ${(props) => (props.isProductSelected ? "#1D1C1C" : "")};
  color: ${(props) => (props.isProductSelected ? "#FFFFFF" : "")};
`;

export const ViewCartBtn = styled.button<{
  showCartItems: boolean;
}>`
  z-index: 100;
  background-color: #298bfd;
  color: white;
  height: 35px;
  width: 102px;
  border-radius: 10px;
  border: none;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 auto;
  position: sticky;
  bottom: 1rem;
  transition: all 0.4s;
  opacity: ${(props) => (props.showCartItems ? "0" : "1 ")};
  visibility: ${(props) => (props.showCartItems ? "hidden" : "visible")};

  svg {
    font-size: 1rem;
    margin-right: 0.5rem;
  }
`;

export const CartItemCount = styled.span`
  position: absolute;
  top: -5px;
  left: 0;
  background-color: red;
  height: 15px;
  width: max-content;
  padding: 0 5px;
  border-radius: 1000px;
`;
