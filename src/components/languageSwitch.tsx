import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Language } from "../constants/constants";

const Icon = styled.img<{ dimmed: boolean }>`
  transition: 0.2s;
  width: 30px;
  cursor: pointer;
  opacity: ${(props) => (props.dimmed ? "0.4" : "1")};
  filter: drop-shadow(2px 2px 2px rgba(255, 255, 255, 1))
    brightness(${(props) => (props.dimmed ? "70%" : "100%")});
`;

const Select = styled.div`
  display: flex;
  gap: 10px;
`;

export function LanguageSwitch() {
  const { i18n } = useTranslation();
  const c = i18n.language;

  const changeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
  };
  return (
    <Select>
      <Icon src="assets/flags/uk.svg" dimmed={c !== "en"} onClick={() => changeLanguage("en")} />
      <Icon src="assets/flags/ru.svg" dimmed={c !== "ru"} onClick={() => changeLanguage("ru")} />
      <Icon src="assets/flags/de.svg" dimmed={c !== "de"} onClick={() => changeLanguage("de")} />
    </Select>
  );
}
