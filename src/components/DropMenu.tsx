import { Link } from "react-router-dom";
import { useStore } from "../store/store";
import { DropMenuContainer, ListItem } from "../styles/DropMenu.styles";

export default function DropMenu(){
    const dropdownOpen = useStore((state) => state.dropdownOpen)

  return (
    <DropMenuContainer visible={dropdownOpen}>
          <Link to="/"><ListItem>home</ListItem></Link>
          <Link to="/menu"><ListItem>menu</ListItem></Link>
          <Link to="/order"><ListItem>order</ListItem></Link>
          <Link to="/about"><ListItem>about</ListItem></Link>
          <Link to="/gift-cards"><ListItem>gift cards</ListItem></Link>
          <Link to="/contact"><ListItem>contact</ListItem></Link>
    </DropMenuContainer>
  );
}
