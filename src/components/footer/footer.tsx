import { useTranslation } from "react-i18next";
import { Container, FooterContainer, Icon, Links } from "./footer.components";

export function Footer() {
  const { t } = useTranslation();
  return (
    <FooterContainer>
      <hr style={{ width: "100%" }} />
      <h3 style={{ textAlign: "center" }}>{t("Footer heading")}</h3>
      <Links>
        <a href="https://github.com/VladimirParmon" target="__blank">
          <Container>
            <Icon src="assets/footer/github.svg" />
            <span>{t("Footer Github")}</span>
          </Container>
        </a>
        <a href="https://www.linkedin.com/in/698717247" target="__blank">
          <Container>
            <Icon src="assets/footer/linkedin.svg" />
            <span>{t("Footer LinkedIn")}</span>
          </Container>
        </a>
        <a href="https://www.instagram.com/_vladimir_parmon/" target="__blank">
          <Container>
            <Icon src="assets/footer/instagram.svg" />
            <span>{t("Footer Instagram")}</span>
          </Container>
        </a>
        <Container>
          <Icon src="assets/footer/discord.svg" />
          <span>RedbloodeD#2245</span>
        </Container>
      </Links>
      <br />
      <p>{t("Footer date")}</p>
    </FooterContainer>
  );
}
