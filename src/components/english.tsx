import { useState } from "react";
import styled from "styled-components";
import { bp } from "../constants/breakpoints";

const ImageContainer = styled.div<{ height: string }>`
  position: relative;
  display: flex;
  max-height: ${(props) => props.height};
  transition: 1s;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  ${bp.minWidth("l")`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px 10px;
    grid-template-areas:
      "small1 big"
      "small2 big";
  `}

  img {
    max-width: 100%;
  }
`;

const Image1 = styled.img`
  grid-area: big;
`;
const Image2 = styled.img`
  grid-area: small1;
`;
const Image3 = styled.img`
  grid-area: small2;
`;

const Expander = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 20px;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 1));
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    pointer-events: none;
  }
`;

export function English() {
  const [isExpanded, setIsExpanded] = useState(false);
  const flip = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <section id="english">
      <h2>English</h2>
      <hr />
      <ImageContainer height={isExpanded ? "2000px" : "400px"}>
        <Image2 className="small1" src="assets/epam-test.JPG" alt="epam-test" />
        <Image3 className="small2" src="assets/competition.jpg" alt="competition results" />
        <Image1 className="big" src="assets/performance.jpg" alt="performance" />
      </ImageContainer>
      <Expander onClick={flip}>{isExpanded ? <span>Hide</span> : <span>Show more</span>}</Expander>
    </section>
  );
}
