import styled from "styled-components";
import { bp } from "../../constants/breakpoints";

export const ImageContainer = styled.div<{ height: string }>`
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

export const Image1 = styled.img`
  grid-area: big;
`;
export const Image2 = styled.img`
  grid-area: small1;
`;
export const Image3 = styled.img`
  grid-area: small2;
`;

export const Expander = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    pointer-events: none;
  }
`;
