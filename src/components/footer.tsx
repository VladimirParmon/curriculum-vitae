import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  a:visited {
    color: var(--text);
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color};
  }

  a:link {
    color: ${(props) => props.theme.color};
  }

  a:active {
    color: ${(props) => props.theme.accent};
  }

  a:hover {
    color: ${(props) => props.theme.accent};
  }
`;

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
