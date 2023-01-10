import styled from "styled-components";

const GiftCardsContainer = styled.div`
background-color: ${({ theme }) => theme.colors.white};
min-height: calc(100vh - 168px);
min-width: 375px;
`

const Hero = styled.div`
    width: 100%;
    height: 96px;
    background-image: url("./images/bread-basket.jpg");
    background-size: cover;
    background-position: center;
    
    @media only screen and (min-width: 680px) {
        height: 192px;
    }
`

const ContentContainer = styled.div`
    padding: 24px;
`

const Title = styled.h6`
  font-family: "Lily Script One", serif;
  margin: 0;
  margin-bottom: 1.1rem;
  font-size: 2rem;

  @media only screen and (min-width: 680px) {
    font-size: 2.5rem;
    text-align: center;
  }
`
const TextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
  min-width: 327px;
  max-width: 580px;
  margin: 0 auto;
`;

const Text = styled.div`
  
`

const GiftCardImage = styled.img`
width: 100%;
max-width: 522px;
`

export {GiftCardsContainer, Hero, ContentContainer, Title, TextContainer, Text, GiftCardImage}