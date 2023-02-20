import LogoImg from "../../assets/logo.svg";

import { HeaderTag, Logo, Nav } from "./styles";

const Header = () => {
  return (
    <HeaderTag>
      <Logo src={LogoImg} alt="Fylo logo"></Logo>
      <Nav>
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </Nav>
    </HeaderTag>
  );
};

export default Header;
