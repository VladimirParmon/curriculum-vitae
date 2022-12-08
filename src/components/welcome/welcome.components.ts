import styled from "styled-components";
import { bp } from "../../constants/breakpoints";

export const WelcomeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  ${bp.maxWidth("xl")`
    flex-direction: column;
  `}
`;

export const NameSpanContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const SmallGreetingSpan = styled.span`
  font-family: "Amiri", serif;
  font-size: 2rem;
  ${bp.maxWidth("m")`
  font-size: 1rem;
  `}
`;

export const NameSpan = styled.span`
  font-family: "Amiri", serif;
  font-size: 2rem;
  line-height: 2rem;
  white-space: nowrap;

  ${bp.minWidth("m")`
    line-height: 3rem;
    font-size: 4rem;
  `}
  ${bp.minWidth("xl")`
    line-height: 5rem;
    font-size: 4.7rem;
  `}
`;

export const BreakpointWrapper = styled.div`
  ${bp.maxWidth("xl")`
    display: none;
  `}
`;

export const ProfileImageContainer = styled.div`
  min-width: 450px;
  min-height: 450px;
  max-width: 450px;
  max-height: 450px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: ${(props) => props.theme.profilePhotoAlign};
  filter: drop-shadow(5px 5px 10px rgba(255, 255, 255, 1));
  ${bp.minWidth("s")`
    border-radius: 50%;

  `}
  ${bp.only("s", "xl")`
    border: 5px solid rgba(204,204,204,0.4);
  `}
`;
export const ProfileBackgroundContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: url("${(props) => props.theme.bgImageWide}");
  background-size: cover;
  background-position: center;
  border-radius: 50px;
  ${bp.minWidth("xl")`
    display: none;
  `}
`;

export const ProfileImage = styled.img`
  max-width: 450px;
  width: 100%;
`;
