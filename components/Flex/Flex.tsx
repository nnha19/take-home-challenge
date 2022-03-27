import React from "react";
import { StyledFlex } from "./Flex.styled";
import { FlexProps } from "./Flex.styled";

const Flex: React.FC<FlexProps> = (props) => {
  return <StyledFlex {...props} />;
};

export default Flex;
