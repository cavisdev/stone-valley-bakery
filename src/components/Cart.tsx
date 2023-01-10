import { useState } from "react";
import { useStore } from "../store/store";
import {
  CartContainer,
  CartItem,
  CartTitle,
  CheckoutButton,
  CloseIcon,
  DeleteButton,
  HeadLine,
  ThankYouPopup,
  Total,
} from "../styles/Cart.styles";
import TrashIcon from "./TrashIcon";

export default function Cart() {
  const [thank, setThank] = useState(false);
  const cart = useStore((state) => state.cart);
  const setCartVisible = useStore((state) => state.setCartVisible);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const clearCart = useStore((state) => state.clearCart);

  const cartDisplay = cart.map((item) => (
    <CartItem key={item.name}>
      <DeleteButton onClick={() => removeFromCart(item.name)}>
        <TrashIcon />
      </DeleteButton>
      <p>{item.name}</p>
      <p>x{item.quantity}</p>
      <p>${item.quantity * item.price}</p>
    </CartItem>
  ));

  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((partialSum, a) => partialSum + a, 0);

  function Thank() {
    setThank(true);
    setTimeout(() => setThank(false), 5000);
  }

  return (
    <CartContainer>
      <HeadLine>
        <CartTitle>Cart</CartTitle>
        <CloseIcon onClick={() => setCartVisible(false)}>X</CloseIcon>
      </HeadLine>
      {cartDisplay}
      <Total>
        <CheckoutButton
          onClick={() => {
            if (cart.length > 0) {
              clearCart();
              Thank();
            }
          }}
        >
          <p>Checkout</p>
        </CheckoutButton>
        <p>Total: ${total}</p>
      </Total>
      {thank && <ThankYouPopup>Thank you for your purchase!</ThankYouPopup>}
    </CartContainer>
  );
}
