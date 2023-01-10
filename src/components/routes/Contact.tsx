import { ContactContainer, ContentContainer, Hero, Line, Title } from "../../styles/Contact.styles"

export default function Contact() {

    return (
        <ContactContainer>
            <Hero />
            <ContentContainer>
                <Title>Contact</Title>
                <Line>Phone: (503) 123-4568</Line>
                <Line>Email: customerservice@stonevalley.com</Line>
                <br />
                <Line>1234 SE 82nd Street</Line>
                <Line>Portland, OR 97266</Line>
            </ContentContainer>
        </ContactContainer>
    )
}