import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  HomeContainer,
  SlideContainer,
    Slide,
  SlideContentContainer,
  ButtonContainer,
  Button,
  Headline,
  Description,
} from "../../styles/Home.styles";
import { data } from "./home-resources/slideData";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const slides = data.slides;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnInteraction: false, delay: 6000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  const slideObjects = slides.map((item) => (
      <Slide key={item.id} backgroundImage={item.backgroundImage}>
          <SlideContentContainer>
              <Headline>{item.head}</Headline>
          <Description>{item.description}</Description>
              <Link to={item.location}>{item.navText}</Link>
          </SlideContentContainer>
    </Slide>
  ));

  const buttonObjects = scrollSnaps.map((_, index) => (
    <Button
      key={index}
      selected={index === selectedIndex}
      onClick={() => scrollTo(index)}
    />
  ));

  return (
    <HomeContainer ref={emblaRef}>
      <SlideContainer>{slideObjects}</SlideContainer>
      <ButtonContainer>{buttonObjects}</ButtonContainer>
    </HomeContainer>
  );
}
