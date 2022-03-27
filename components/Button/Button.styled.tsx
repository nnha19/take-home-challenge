import styled from "styled-components";

export interface StyledButtonType {
  backgroundColor?: string;
  color?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
}

export const StyledButton = styled.button`
  width: 100%;
  padding: 9px 52px;
  font-size: 20px;
  border-radius: 19999px;
  background-color: #fdce29;
  font-weight: 500;
  border: none;
  outline: none;
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
`;
