import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const Links = styled.div`
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
