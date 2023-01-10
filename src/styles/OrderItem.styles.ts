import styled from "styled-components";

const OrderItemContainer = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${({theme}) => theme.colors.main};
`
const Line = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    &.align-right {
        justify-content: flex-end;
    }
`

const ItemName = styled.p`
    margin: 0;
    font-size: 1rem;
    font-weight: 700;
`

const ItemPrice = styled.p`
    margin: 0;
    margin-left: auto;
`

const QuantityButton = styled.div`
${({ theme }) => theme.buttonStyles};
font-size: 1.25rem;
width: 24px;
height: 24px;

& * {
    margin: 0;
    transform: translate(0, -2px);
}
`

const QuantityText = styled.div`
text-align: center;
width: 24px;
height: 24px;
`

const AddToCartButton = styled.div`
${({ theme }) => theme.buttonStyles};
margin-left: 1rem;
padding: 0 0.5rem;

& * {
    margin: 0;
    transform: translate(0, 2px);
}
`

export {OrderItemContainer, Line, ItemName, ItemPrice, QuantityButton, QuantityText, AddToCartButton}