import { useState } from "react";
import { useStore } from "../../../store/store";
import { OrderItemContainer, Line, ItemName, ItemPrice, QuantityButton, QuantityText, AddToCartButton } from "../../../styles/OrderItem.styles";

type Props = {
    name: string;
    price: number;
}

export default function OrderItem(props: Props) {
    const [quantity, setQuantity] = useState(0)
    const addToCart = useStore((state) => state.addToCart)

    function add() {
        setQuantity(prev => prev + 1)
    }

    function subtract() {
        if (quantity > 0) {
            setQuantity(prev => prev - 1)
        }
    }

    return (
        <OrderItemContainer>
            <Line>
                <ItemName>{props.name}</ItemName>
                <ItemPrice>{props.price}</ItemPrice>
            </Line>
            <Line className="align-right">
                <QuantityButton onClick={() => subtract()}><p>-</p></QuantityButton>
                <QuantityText>{quantity}</QuantityText>
                <QuantityButton onClick={() => add()}><p>+</p></QuantityButton>
                <AddToCartButton onClick={() => addToCart(props.name, props.price, quantity)}><p>Add to cart</p></AddToCartButton>
            </Line>
        </OrderItemContainer>
    )
}