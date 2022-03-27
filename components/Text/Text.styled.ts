import styled from "styled-components";

export interface StyledTextProps {
  fontSize?: string;
  color?: string;
  padding?: string;
  margin?: string;
  textAlign?: string;
  fontWeight?: string;
  cursor?: string;
  textDecoration?: string;
}

export const StyledText = styled.p<StyledTextProps>`
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-weight: ${(props) => props.fontWeight};
  cursor: ${(props) => props.cursor};
  text-decoration: ${(props) => props.textDecoration};
`;
