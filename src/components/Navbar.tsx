import { Link } from "react-router-dom";
import {
  NavText,
  Logo,
  LogoContainer,
  NavContainer,
  NavList,
} from "../styles/Navbar.styles";
import DropMenu from "./DropMenu";
import HamburgerIcon from "./HamburgerIcon";

export default function Navbar() {

  return (
    <NavContainer>
      <NavList>
        <Link to="/">
          <NavText>home</NavText>
        </Link>
        <Link to="/menu">
          <NavText>menu</NavText>
        </Link>
        <Link to="/order">
          <NavText>order</NavText>
        </Link>
      </NavList>
      <Link to="/">
      <LogoContainer>
          <Logo src="./images/stone-valley-logo.svg" />
        </LogoContainer>
        </Link>
      <NavList>
        <Link to="/about">
          <NavText>about</NavText>
        </Link>
        <Link to="/gift-cards">
          <NavText>gift cards</NavText>
        </Link>
        <Link to="/contact">
          <NavText>contact</NavText>
        </Link>
      </NavList>
      <HamburgerIcon />
      <DropMenu />
    </NavContainer>
  );
}
