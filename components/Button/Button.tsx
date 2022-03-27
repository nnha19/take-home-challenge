import React from "react";
import { StyledButton, StyledButtonType } from "./Button.styled";

export const Button: React.FC<StyledButtonType> = (props) => {
  return <StyledButton {...props} />;
};
