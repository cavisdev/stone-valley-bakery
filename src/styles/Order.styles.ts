import styled from "styled-components";

const OrderContainer = styled.div`
background-color: ${({ theme }) => theme.colors.white};
min-height: calc(100vh - 168px);
min-width: 375px;
`

const Hero = styled.div`
    width: 100%;
    height: 96px;
    background-image: url("./images/inside-store.jpg");
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

const OptionsSection = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 0 auto;
margin-bottom: 3rem;
max-width: 800px;
`

const SectionHeader = styled.div`
display: flex;
`

const SectionTitle = styled.h6`
font-family: "Lily Script One", serif;
margin: 0;
margin-bottom: 1rem;
font-size: 1.5rem;
font-weight: 400;
text-transform: capitalize;
`

const CartButton = styled.div`
  ${({ theme }) => theme.buttonStyles};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  margin-left: auto;

  & * {
    width: 80%;
  }
`

export {OrderContainer, Hero, ContentContainer, Title, OptionsSection, SectionHeader, SectionTitle, CartButton}