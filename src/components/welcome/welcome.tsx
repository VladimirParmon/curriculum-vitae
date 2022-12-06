import { useContext } from "react";
import { MyTheme } from "../../constants/models";
import { ThemeContext } from "styled-components";
import {
  BreakpointWrapper,
  NameSpan,
  NameSpanContainer,
  ProfileBackgroundContainer,
  ProfileImage,
  ProfileImageContainer,
  SmallGreetingSpan,
  WelcomeContainer,
} from "./welcome.components";

export function Welcome() {
  const theme: MyTheme = useContext(ThemeContext);
  return (
    <WelcomeContainer>
      <ProfileBackgroundContainer>
        <ProfileImageContainer>
          <ProfileImage src={theme.profilePhoto} alt="The profile owner" />
        </ProfileImageContainer>
      </ProfileBackgroundContainer>
      <NameSpanContainer>
        <SmallGreetingSpan>Welcome!</SmallGreetingSpan>
        <NameSpan>Vladimir Parmon</NameSpan>
      </NameSpanContainer>
      <BreakpointWrapper>
        <ProfileImageContainer>
          <ProfileImage src={theme.profilePhoto} alt="The profile owner" />
        </ProfileImageContainer>
      </BreakpointWrapper>
    </WelcomeContainer>
  );
}
