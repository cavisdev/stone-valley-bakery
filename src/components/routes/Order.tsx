import { useStore } from "../../store/store";
import {
  ContentContainer,
  Hero,
  OrderContainer,
  OptionsSection,
  SectionTitle,
  Title,
  SectionHeader,
  CartButton,
} from "../../styles/Order.styles";
import Cart from "../Cart";
import CartIcon from "../CartIcon";
import { data } from "./menu-resources/menuData";
import OrderItem from "./order-resources/OrderItem";

export default function Order() {
    const cartVisible = useStore((state) => state.cartVisible);
    const setCartVisible = useStore((state) => state.setCartVisible)
  const sections: Array<string> = Object.getOwnPropertyNames(data.categories);

  const optionsDisplay = sections.map((name) => {
    const options = data.categories[name].map((item) => (
        <OrderItem key={ item.name } name={item.name} price={item.price} />
    ));

    return (
        <OptionsSection key={name}>
            <SectionHeader>
                <SectionTitle>
                    {name}
                </SectionTitle>
                <CartButton onClick={() => setCartVisible(true)}>
                    <CartIcon />
                </CartButton>
            </SectionHeader>
        {options}
      </OptionsSection>
    );
  });
    
    
  return (
    <OrderContainer>
          <Hero />
      <ContentContainer>
        <Title>Order</Title>
              {!cartVisible && optionsDisplay}
              {cartVisible && <Cart />}
      </ContentContainer>
    </OrderContainer>
  );
}
