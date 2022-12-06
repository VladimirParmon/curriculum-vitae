import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { slides } from "../constants/slides";
import { bp, myBreakpoints } from "../constants/breakpoints";
import { AxisOptionType } from "embla-carousel/components/Axis";

const Embla = styled.div`
  position: relative;
  max-width: 90vw;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  background-color: ${(props) => props.theme.background};
`;

const EmblaContainer = styled.div`
  display: flex;
  height: 450px;
  width: 100%;
  ${bp.maxWidth("l")`
    flex-direction: column;
  `}
`;

const EmblaSlide = styled.div`
  padding: 10px;
  width: 100%;
`;

const InnerContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 800px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

  ${bp.maxWidth("l")`
    width: 100%;
  `}
  ${bp.minWidth("l")`
    height: 400px;
  `}
`;

const CarouselImage = styled.img`
  width: 100%;
  cursor: pointer;
  object-fit: cover;
  border-radius: 20px;
  ${bp.minWidth("l")`
    height: 100%;
  `}
`;

const CarouselLink = styled.a`
  height: 100%;
  width: 100%;
  &:hover {
    filter: brightness(50%);
    transition: 0.3s;

    & ~ span {
      opacity: 1;
    }
  }
`;

const TechLogos = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 100;
`;

const TechLogo = styled.img`
  width: 50px;
  height: 50px;
`;

const SliderDescription = styled.span`
  position: absolute;
  color: white;
  z-index: 101;
  opacity: 0;
  font-size: 2rem;
  pointer-events: none;

  ${bp.minWidth("l")`
    font-size: 3rem;
  `}
`;

const SliderControls = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  ${bp.maxWidth("l")`
    display: none;
  `}
`;

const Button = styled.button`
  cursor: pointer;
  transition: 0.2s;
  background-color: transparent;
  touch-action: manipulation;
  border: 0;
  height: 30px;
  padding: 0;
  color: ${(props) => props.theme.color};

  &:disabled {
    color: ${(props) => props.theme.idle};
  }

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

const DotContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover div {
    transform: scale(1.2);
  }
`;

const Dot = styled.div<{ selected: boolean }>`
  transition: 0.1s;
  width: 30px;
  height: 4px;
  border-radius: 10px;
  background-color: ${(props) => (props.selected ? props.theme.accent : props.theme.idle)};
`;

export function Projects() {
  const x = "x" as AxisOptionType;
  const y = "y" as AxisOptionType;
  const w = `(max-width: ${myBreakpoints.l}px)`;
  const options = {
    dragFree: true,
    startIndex: 1,
    axis: x,
    breakpoints: {
      [w]: { axis: y },
    },
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [howManyItems, setHowManyItems] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setHowManyItems(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="projects">
      <h2>Projects</h2>
      <hr />
      <Embla ref={emblaRef}>
        <EmblaContainer>
          {slides.map((slide) => (
            <EmblaSlide key={slide.slideName}>
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
          ))}

          <EmblaSlide>
            <InnerContainer>
              <SliderDescription>Work in progress...</SliderDescription>
              <CarouselImage
                src="assets/slider/placeholder.jpg"
                alt="Work in progress placeholder"
              />
            </InnerContainer>
          </EmblaSlide>
        </EmblaContainer>

        <SliderControls>
          <Button onClick={scrollPrev} disabled={!prevBtnEnabled}>
            ← Previous
          </Button>
          {howManyItems.map((_, i) => (
            <DotContainer onClick={() => scrollTo(i)} key={i}>
              <Dot selected={i === selectedIndex} />
            </DotContainer>
          ))}
          <Button onClick={scrollNext} disabled={!nextBtnEnabled}>
            Next →
          </Button>
        </SliderControls>
      </Embla>
    </section>
  );
}
