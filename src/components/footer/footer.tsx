import { Container, FooterContainer, Icon, Links } from "./footer.components";

export function Footer() {
  return (
    <FooterContainer>
      <hr style={{ width: "100%" }} />
      <h3 style={{ textAlign: "center" }}>Additional information</h3>
      <Links>
        <a href="https://github.com/VladimirParmon">
          <Container>
            <Icon src="assets/footer/github.svg" />
            <span>Some amazing projects here</span>
          </Container>
        </a>
        <a href="www.linkedin.com/in/698717247">
          <Container>
            <Icon src="assets/footer/linkedin.svg" />
            <span>Want to send an invitation?</span>
          </Container>
        </a>
        <a href="www.linkedin.com/in/698717247">
          <Container>
            <Icon src="assets/footer/instagram.svg" />
            <span>Who doesn't want some likes, amaright</span>
          </Container>
        </a>
        <Container>
          <Icon src="assets/footer/discord.svg" />
          <span>RedbloodeD#2245</span>
        </Container>
      </Links>
      <br />
      <p>2022, December</p>
    </FooterContainer>
  );
}
