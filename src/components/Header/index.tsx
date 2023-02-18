import LogoImg from "../../assets/logo.svg";

import { HeaderTag, Logo, Nav } from "./styles";

const Header = () => {
  return (
    <HeaderTag>
      <Logo src={LogoImg} alt="Fylo logo"></Logo>
      <Nav>
        <ul>
          <li>Features</li>
          <li>Team</li>
          <li>Sign In</li>
        </ul>
      </Nav>
    </HeaderTag>
  );
};

export default Header;
