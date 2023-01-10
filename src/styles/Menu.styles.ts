import styled from "styled-components";

const MenuContainer = styled.div`
background-color: ${({ theme }) => theme.colors.white};
min-height: calc(100vh - 168px);
min-width: 375px;
`

const Hero = styled.div`
    width: 100%;
    height: 96px;
    background-image: url("./images/bread-display.jpg");
    background-size: cover;
    background-position: center;
    
    @media only screen and (min-width: 680px) {
        height: 192px;
    }
`

const ContentContainer = styled.div`
    padding: 24px;

    & * {
        text-decoration: none;
      }
`

const Title = styled.h6`
font-family: "Lily Script One", serif;
  margin: 0;
  margin-bottom: 1.1rem;
  font-size: 2rem;

  @media only screen and (min-width: 680px) {
    font-size: 2rem;
    text-align: center;
  }
`

const TabButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom:  2rem;
  @media only screen and (min-width: 680px) {
    font-size: 1.25rem;
    justify-content: center;
  }
`

const TabButton = styled.p`
  margin: 0;
  text-transform: capitalize;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-right: 1px solid ${({ theme }) => theme.colors.main};
  font-weight: 700;
  
  &.active {
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({theme}) => theme.colors.white};
  }


  &:last-child {
    border-right: none;
  }
`

const OptionsContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
max-width: 800px;
`

const Option = styled.div`
display: flex;
flex-direction: column;
padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.main};
  
  &:last-child{
    border-bottom: none;
  }
`
const ItemName = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 1.2rem;
`

const ItemDescription = styled.p`
  margin: 0;
`

const ItemPrice = styled.p`
  margin: 0;
  margin-left: auto;
  font-weight: 700;
`
const OrderButton = styled.div`
  ${({ theme }) => theme.buttonStyles}
  padding: 1rem 0;
  font-size: 2rem;
  margin: 0 auto;
  max-width: 400px;
`

export {MenuContainer, Hero, ContentContainer, Title, TabButtonContainer, TabButton, OptionsContainer, Option, ItemName, ItemDescription, ItemPrice, OrderButton}