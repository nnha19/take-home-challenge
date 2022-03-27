import { StyledHeader } from "./Header.styled";

import { StyledHeaderProps } from "./Header.styled";

const Header: React.FC<StyledHeaderProps> = (props) => {
  return <StyledHeader {...props} />;
};

export default Header;
