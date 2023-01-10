import {
  AboutContainer,
  AboutImage,
  ContentContainer,
  Hero,
  ImageBorder,
  TextContainer,
  Title,
} from "../../styles/About.styles";

export default function About() {
  return (
    <AboutContainer>
      <Hero />
      <ContentContainer>
        <Title>A Culture of Artisan Breads</Title>
        <TextContainer>
          <ImageBorder>
            <AboutImage />
          </ImageBorder>
          Stone Valley Bakery was established in 1973 by local Portland
          couple, Susanne and Richard Stone. The shop started out small, with
          just a few bread and pastry recipes that they had developed over the
          years.
          <br />
          <br />
          The bakery was located in a small storefront in the heart of
          Portland, and it quickly gained a reputation for
          its delicious, fresh-baked goods. As the years went by, the bakery
          became increasingly popular, and Mary and John were forced to expand
          to keep up with demand. They opened a second location in northern
          Salem and started to offer a wider range of baked goods, including
          cakes, cookies, and pastries.
          <br />
          <br />
          Despite facing some challenges and setbacks over the years, Stone
          Valley Bakery remained a beloved institution in the community, known
          for its high-quality ingredients and commitment to using traditional
          baking techniques. In the late 2000s, Susanne and Richard's children
          took over the business, and they have continued to carry on the family
          tradition of producing delicious, handmade baked goods.
          <br />
          <br />
          Today, Stone Valley Bakery is a thriving enterprise with multiple
          locations and a devoted customer base.
        </TextContainer>
      </ContentContainer>
    </AboutContainer>
  );
}
