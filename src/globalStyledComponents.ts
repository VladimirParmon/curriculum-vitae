import styled from "styled-components";
import { bp } from "./constants/breakpoints";

export const MainContainer = styled.div`
  background-image: url("${(props) => props.theme.bgImage}");
  background-size: contain;
  position: relative;
  font-size: 1.5rem;
  line-height: 2.8rem;
  padding-top: 10px;
  ${bp.maxWidth("m")`
    font-size: 1rem;
    line-height: 1.8rem;
  `}
`;

export const ContentContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.background};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme.color};
  ${bp.minWidth("m")`
    padding: 10px 60px 20px 60px;
  `}
`;

export const PageControls = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
