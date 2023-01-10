import styled from "styled-components";

const AboutContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  min-height: calc(100vh - 168px);
  min-width: 375px;
`;

const Hero = styled.div`
  width: 100%;
  height: 96px;
  background-image: url("./images/outside-store.jpg");
  background-size: cover;
  background-position: center;

  @media only screen and (min-width: 680px) {
    height: 192px;
  }
`;

const ContentContainer = styled.div`
  padding: 24px;
`;

const Title = styled.h6`
  font-family: "Lily Script One", serif;
  margin: 0;
  margin-bottom: 1.1rem;
  font-size: 2rem;

  @media only screen and (min-width: 680px) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  min-width: 327px;
  max-width: 800px;
  margin: 0 auto;
`;

const ImageBorder = styled.div`
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 136px;
  height: 136px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.main};
  margin-left: 1rem;
  margin-bottom: 1rem;

  @media only screen and (min-width: 540px) {
    width: 256px;
  height: 256px;
  }
`;

const AboutImage = styled.div`
  width: 120px;
  height: 120px;
  background-image: url("./images/owners.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 50%;

  @media only screen and (min-width: 540px) {
    width: 240px;
  height: 240px;
  }
`;

export {
  AboutContainer,
  Hero,
  ContentContainer,
  Title,
  TextContainer,
  ImageBorder,
  AboutImage,
};
