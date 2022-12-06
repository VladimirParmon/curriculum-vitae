import {
  CarouselImage,
  EmblaSlide,
  InnerContainer,
  SliderDescription,
} from "./projects.components";

export function PlaceholderSlide() {
  return (
    <EmblaSlide>
      <InnerContainer>
        <SliderDescription>Work in progress...</SliderDescription>
        <CarouselImage src="assets/slider/placeholder.jpg" alt="Work in progress placeholder" />
      </InnerContainer>
    </EmblaSlide>
  );
}
