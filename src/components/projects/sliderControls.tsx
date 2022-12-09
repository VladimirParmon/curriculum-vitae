import { useTranslation } from "react-i18next";
import { Button, Dot, DotContainer, SliderControls } from "./projects.components";

interface Props {
  scrollPrev: () => void;
  scrollNext: () => void;
  prevBtnEnabled: boolean;
  selectedIndex: number;
  nextBtnEnabled: boolean;
  howManyItems: number[];
  scrollTo: (index: number) => void | undefined;
}

export function Controls({
  scrollPrev,
  scrollNext,
  scrollTo,
  prevBtnEnabled,
  selectedIndex,
  nextBtnEnabled,
  howManyItems,
}: Props) {
  const { t } = useTranslation();
  return (
    <SliderControls>
      <Button onClick={scrollPrev} disabled={!prevBtnEnabled}>
        ← {t("Prev slide")}
      </Button>
      {howManyItems.map((_, i) => (
        <DotContainer onClick={() => scrollTo(i)} key={i}>
          <Dot selected={i === selectedIndex} />
        </DotContainer>
      ))}
      <Button onClick={scrollNext} disabled={!nextBtnEnabled}>
        {t("Next slide")} →
      </Button>
    </SliderControls>
  );
}
