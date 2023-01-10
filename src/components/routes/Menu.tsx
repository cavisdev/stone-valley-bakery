import { Link } from "react-router-dom";
import { useStore } from "../../store/store";
import {
  ContentContainer,
  Hero,
  ItemDescription,
  ItemName,
  ItemPrice,
  MenuContainer,
  Option,
  OptionsContainer,
  OrderButton,
  TabButton,
  TabButtonContainer,
  Title,
} from "../../styles/Menu.styles";
import { data } from "./menu-resources/menuData";

export default function Menu() {
  const activeMenuTab = useStore((state) => state.activeMenuTab);
  const setMenuTab = useStore((state) => state.setMenuTab);

  const buttons = Object.getOwnPropertyNames(data.categories).map((name) => {
    return (
      <TabButton
        key={name}
        onClick={() => setMenuTab(name)}
        className={activeMenuTab === name ? "active" : ""}
      >
        {name}
      </TabButton>
    );
  });

  const options = data.categories[activeMenuTab].map(
    ({ name, description, price }) => (
      <Option key={name}>
        <ItemName>{name}</ItemName>
        <ItemDescription>{description}</ItemDescription>
        <ItemPrice>{price}</ItemPrice>
      </Option>
    )
  );

  return (
    <MenuContainer>
      <Hero />
      <ContentContainer>
        <Title>Menu</Title>
        <TabButtonContainer>{buttons}</TabButtonContainer>
              <OptionsContainer>{options}</OptionsContainer>
              <Link to="/order" >
                  <OrderButton>
                      Order
                  </OrderButton>
              </Link>
          </ContentContainer>
    </MenuContainer>
  );
}
