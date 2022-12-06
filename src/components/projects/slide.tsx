import {
  CarouselImage,
  CarouselLink,
  EmblaSlide,
  InnerContainer,
  SliderDescription,
  TechLogo,
  TechLogos,
} from "./projects.components";
import { Slide } from "../../constants/models";

interface Props {
  slide: Slide;
}

export function SingleSlide({ slide }: Props) {
  return (
    <EmblaSlide>
      <InnerContainer>
        <TechLogos>
          {slide.techLogos.map((logo, i) => (
            <TechLogo src={logo} alt="Symbol of tech used" key={i} />
          ))}
        </TechLogos>
        <CarouselLink href={slide.link} target="_blank">
          <CarouselImage src={slide.imageSrc} alt={slide.slideName} />
        </CarouselLink>
        <SliderDescription>{slide.slideName}</SliderDescription>
      </InnerContainer>
    </EmblaSlide>
  );
}
