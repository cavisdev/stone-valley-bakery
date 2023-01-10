import { FooterContainer, PexelsLink, Text } from "../styles/Footer.styles";

export default function Footer() {
  return (
    <FooterContainer>
      <Text>
        © 2023 cavisdev | All photos provided by{" "}
        <PexelsLink href="https://www.pexels.com/" target="_blank">
          Pexels
        </PexelsLink>
      </Text>
    </FooterContainer>
  );
}
