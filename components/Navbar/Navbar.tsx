import Header from "../Header/Header";
import { Nav } from "./Navbar.styled";

const Navbar = () => {
  return (
    <Nav>
      <Header fontWeight="bold" fontSize="24px">
        TCG Marketplace
      </Header>
    </Nav>
  );
};

export default Navbar;
