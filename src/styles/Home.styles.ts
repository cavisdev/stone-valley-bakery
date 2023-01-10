import styled from "styled-components";

interface SlideProps {
    backgroundImage: string;
}

interface ButtonProps {
    selected: boolean;
}

const HomeContainer = styled.div`
  overflow: hidden;
  min-height: calc(100vh - 168px);
  min-width: 375px;
  position: relative;
`;

const SlideContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 168px);
  min-width: 360px;
`;

const Slide = styled.div<SlideProps>`
display: flex;
  flex: 0 0 100%;
  min-width: 0;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const SlideContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 248, 245, 0.65);
    width: 80%;
    max-width: 544px;
    color: ${({ theme }) => theme.colors.black};
    margin: auto;
    padding: 12px 18px;
    border-radius: 2px;

    & *:last-child {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.black};
        text-align: right;
        margin: 0;
        cursor: pointer;
        opacity: 0.8;
    }
`

const Headline = styled.h4`
    font-family: "Lily Script One", serif;
    color: ${({ theme }) => theme.colors.main};
    font-size: 2rem;
    margin: 0;
    margin-bottom: 12px;
    text-shadow: 0 0 1px rgba(255, 248, 245, 0.75);
`
const Description = styled.p`
margin: 0;
margin-bottom: 12px;
    font-weight: 700;
`

const ButtonContainer = styled.div`
display: flex;
  z-index: 5;
  position: absolute;
  bottom: 0;
  left: calc(50% - 91px);
`;

const Button = styled.div<ButtonProps>`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  opacity: ${props => props.selected ? "1" : "0.5"};
  background-color: white;
  margin: 12px;
  cursor: pointer;
`;

export { HomeContainer, SlideContainer, Slide, SlideContentContainer, Headline, Description, ButtonContainer, Button };
