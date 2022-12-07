import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ContentContainer, MainContainer, PageControls } from "./globalStyledComponents";
import { LanguageSwitch } from "./components/languageSwitch";
import { ThemeSwitch } from "./components/themeSwitch/themeSwitch";
import { ThemeMode } from "./constants/constants";
import { MyTheme } from "./constants/models";
import { darkTheme, lightTheme } from "./constants/themes";
import { Welcome } from "./components/welcome/welcome";
import { ContactsAndInfo } from "./components/contactsAndInfo";
import { SoftSkills } from "./components/softSkills";
import { HardSkills } from "./components/hardSkills";
import { Education } from "./components/education";
import { Projects } from "./components/projects/projects";
import { English } from "./components/english/english";
import { Footer } from "./components/footer/footer";
import "./i18n";

export function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");
  const theme: MyTheme = themeMode === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <ContentContainer>
          <PageControls>
            <ThemeSwitch setThemeMode={setThemeMode} themeMode={themeMode} />
            <LanguageSwitch />
          </PageControls>

          <Welcome />
          <ContactsAndInfo />
          <SoftSkills />
          <HardSkills />
          <Education />
          <Projects />
          <English />
          <Footer />
        </ContentContainer>
      </MainContainer>
    </ThemeProvider>
  );
}
