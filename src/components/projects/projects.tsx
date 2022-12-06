import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { slides } from "../../constants/slides";
import { Embla, EmblaContainer } from "./projects.components";
import { PlaceholderSlide } from "./placeholderSlide";
import { SingleSlide } from "./slide";
import { Controls } from "./sliderControls";
import { options } from "./config";

export function Projects() {
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

  const controls = {
    scrollPrev,
    scrollNext,
    scrollTo,
    prevBtnEnabled,
    selectedIndex,
    nextBtnEnabled,
    howManyItems,
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <hr />
      <Embla ref={emblaRef}>
        <EmblaContainer>
          {slides.map((slide) => (
            <SingleSlide slide={slide} key={slide.slideName} />
          ))}
          <PlaceholderSlide />
        </EmblaContainer>

        <Controls {...controls} />
      </Embla>
    </section>
  );
}
