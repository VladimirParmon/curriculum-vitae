import styled from "styled-components";
import { bp } from "../../constants/breakpoints";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Embla = styled.div`
  position: relative;
  max-width: 90vw;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  background-color: ${(props) => props.theme.background};
`;

export const EmblaContainer = styled.div`
  display: flex;
  height: 450px;
  width: 100%;
  ${bp.maxWidth("l")`
    flex-direction: column;
  `}
`;

export const EmblaSlide = styled.div`
  padding: 10px;
  width: 100%;
`;

export const InnerContainer = styled.div`
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

export const CarouselImage = styled(LazyLoadImage)`
  width: 100%;
  cursor: pointer;
  height: 150px;
  object-fit: cover;
  border-radius: 20px;
  ${bp.minWidth("xs")`
    height: 225px;
  `}
  ${bp.minWidth("s")`
    height: 300px;
  `}
  ${bp.minWidth("m")`
    height: 350px;
  `}
  ${bp.minWidth("l")`
    height: 100%;
  `}
`;

export const CarouselLink = styled.a`
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

//################### Decorations ####################

export const TechLogos = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 100;
`;

export const TechLogo = styled.img`
  width: 50px;
  height: 50px;
`;

export const SliderDescription = styled.span`
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

//################### Controls #####################

export const SliderControls = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  ${bp.maxWidth("l")`
    display: none;
  `}
`;

export const Button = styled.button`
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

export const DotContainer = styled.div`
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

export const Dot = styled.div<{ selected: boolean }>`
  transition: 0.1s;
  width: 30px;
  height: 4px;
  border-radius: 10px;
  background-color: ${(props) => (props.selected ? props.theme.accent : props.theme.idle)};
`;
