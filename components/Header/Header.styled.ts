import styled from "styled-components";

export interface StyledHeaderProps {
  fontSize?: string;
  margin?: string;
  padding?: string;
  fontWeight?: string;
  textAlign?: string;
}

export const StyledHeader = styled.h2`
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.fontSize || "1.2rem"};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;
