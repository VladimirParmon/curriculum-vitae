import { useState } from "react";
import { Expander, Image1, Image2, Image3, ImageContainer } from "./english.components";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Loader } from "../loader";
import { useTranslation } from "react-i18next";

export function English() {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const flip = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <LazyLoadComponent placeholder={Loader("relative")}>
      <section id="english">
        <h2>{t("English heading")}</h2>
        <hr />
        <ImageContainer height={isExpanded ? "2000px" : "400px"}>
          <Image2
            placeholder={Loader("relative")}
            className="small1"
            src="assets/epam-test.JPG"
            alt="epam-test"
          />
          <Image3
            placeholder={Loader("relative")}
            className="small2"
            src="assets/competition.jpg"
            alt="competition results"
          />
          <Image1
            placeholder={Loader("relative")}
            className="big"
            src="assets/performance.jpg"
            alt="performance"
          />
        </ImageContainer>
        <Expander onClick={flip}>
          {isExpanded ? <span>{t("Button hide")}</span> : <span>{t("Button more")}</span>}
        </Expander>
      </section>
    </LazyLoadComponent>
  );
}
