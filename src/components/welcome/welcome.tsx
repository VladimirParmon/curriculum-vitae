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
  SmallDescription,
  SmallGreetingSpan,
  WelcomeContainer,
} from "./welcome.components";
import { useTranslation } from "react-i18next";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Loader } from "../loader";

export function Welcome() {
  const theme: MyTheme = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <LazyLoadComponent placeholder={Loader("relative")}>
      <WelcomeContainer>
        <ProfileBackgroundContainer>
          <ProfileImageContainer>
            <ProfileImage
              placeholder={Loader("absolute")}
              src={theme.profilePhoto}
              alt="The profile owner"
            />
          </ProfileImageContainer>
        </ProfileBackgroundContainer>
        <NameSpanContainer>
          <SmallGreetingSpan>{t("Name span accessory")}</SmallGreetingSpan>
          <NameSpan>{t("Name span")}</NameSpan>
          <SmallDescription>{t("Description")}</SmallDescription>
        </NameSpanContainer>
        <BreakpointWrapper>
          <ProfileImageContainer>
            <ProfileImage
              placeholder={Loader("absolute")}
              src={theme.profilePhoto}
              alt="The profile owner"
            />
          </ProfileImageContainer>
        </BreakpointWrapper>
      </WelcomeContainer>
    </LazyLoadComponent>
  );
}
