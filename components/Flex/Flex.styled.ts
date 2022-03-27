import styled from "styled-components";

// This component can be used as a container

export interface FlexProps {
  direction?: string;
  margin?: string;
  padding?: string;
  justify?: string;
  height?: string;
  alignItems?: string;
  cursor?: string;
  width?: string;
}

export const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  justify-content: ${(props) => props.justify};
  height: ${(props) => props.height};
  align-items: ${(props) => props.alignItems};
  cursor: ${(props) => props.cursor};
  width: ${(props) => props.width};
`;
