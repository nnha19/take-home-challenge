import { StyledText } from "./Text.styled";

import { StyledTextProps } from "./Text.styled";

export const Text: React.FC<StyledTextProps> = (props) => {
  return <StyledText {...props} />;
};

export default Text;
