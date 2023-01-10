import { ContentContainer, GiftCardImage, GiftCardsContainer, Hero, TextContainer, Text, Title } from "../../styles/GiftCards.styles";

export default function GiftCards() {

    return (
        <GiftCardsContainer>
            <Hero />
            <ContentContainer>
                <Title>Gift Cards</Title>
                <TextContainer>
                    <Text>Stone Valley Bakery is happy to announce that we do offer gift cards for purchase in-store! 
                    These cards can be bought with no additional fees and can be re-loaded and re-used at your convenience.</Text>
                    <GiftCardImage src="./images/gift-card.png"/>
                </TextContainer>
            </ContentContainer>
        </GiftCardsContainer>
    )
}