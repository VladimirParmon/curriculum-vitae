import { useState } from "react";
import { Expander, Image1, Image2, Image3, ImageContainer } from "./english.components";

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
