import styled from "styled-components";

const CartContainer = styled.div`
  padding: 1rem;
  margin: 0 auto;
  max-width: 800px;
`;

const HeadLine = styled.div`
  display: flex;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${({theme}) => theme.colors.main};
`;

const CartTitle = styled.p`
font-family: "Lily Script One", serif;
margin: 0;
font-size: 1.5rem;
text-transform: capitalize;
font-weight: 400;
`

const CloseIcon = styled.div`
  margin-left: auto;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.25;
  }
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;

  & p {
    transform: translate(0, 2px);
  }

  & * {
    margin: 0;
  }
`

const DeleteButton = styled.div`
  ${({ theme }) => theme.buttonStyles};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height:  24px;

  & * {
    width: 80%;
  }
`

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  margin-top: 1rem;
  font-weight: 700;
  border-top: 1px solid ${({ theme }) => theme.colors.main};
  
  & * {
    margin: 0;
    transform: translate(0, 2px);
}
`

const CheckoutButton = styled.div`
${({ theme }) => theme.buttonStyles};
padding: 0 0.5rem;

& * {
    margin: 0;
    transform: translate(0, 2px);
}
`

const ThankYouPopup = styled.div`
    
`

export { CartContainer, HeadLine, CartTitle, CloseIcon, CartItem, DeleteButton, Total, CheckoutButton, ThankYouPopup };
