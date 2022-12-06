import { ThemeMode } from "../../constants/constants";
import { SwitchContainer, SwitchIcon, ToggleButton } from "./themeSwitch.components";

interface Props {
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
  themeMode: ThemeMode;
}

export function ThemeSwitch({ setThemeMode, themeMode }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextMode = e.target.checked ? "dark" : "light";
    setThemeMode(nextMode);
  };
  return (
    <SwitchContainer>
      <ToggleButton type="checkbox" id="modeSwitch" onChange={handleChange} />
      {themeMode === "light" ? (
        <SwitchIcon src="assets/day.png" alt="lightMode" id="lightIcon" />
      ) : (
        <SwitchIcon src="assets/night.png" alt="darkMode" id="darkIcon" />
      )}
    </SwitchContainer>
  );
}
