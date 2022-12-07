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
import { useTranslation } from "react-i18next";

export function Welcome() {
  const theme: MyTheme = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <WelcomeContainer>
      <ProfileBackgroundContainer>
        <ProfileImageContainer>
          <ProfileImage src={theme.profilePhoto} alt="The profile owner" />
        </ProfileImageContainer>
      </ProfileBackgroundContainer>
      <NameSpanContainer>
        <SmallGreetingSpan>{t("Name span accessory")}</SmallGreetingSpan>
        <NameSpan>{t("Name span")}</NameSpan>
      </NameSpanContainer>
      <BreakpointWrapper>
        <ProfileImageContainer>
          <ProfileImage src={theme.profilePhoto} alt="The profile owner" />
        </ProfileImageContainer>
      </BreakpointWrapper>
    </WelcomeContainer>
  );
}
