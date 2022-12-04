import styled from "styled-components";
import { ThemeMode } from "../constants/constants";

interface Props {
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
  themeMode: ThemeMode;
}

const ToggleButton = styled.input`
  position: relative;
  width: 50px;
  height: 26px;
  margin: 0;
  background: ${(props) => props.theme.background};
  border: 1px solid #bbc1e1;
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::after {
    content: "";
    position: absolute;
    left: 3px;
    top: 1.5px;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.color};
    border-radius: 50%;
    transform: translateX(0);
    transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);
  }

  &:checked::after {
    transform: translateX(calc(100% + 3px));
    background-color: #fff;
  }

  &:checked {
    background-color: ${(props) => props.theme.color};
  }
`;

const SwitchIcon = styled.img`
  width: 25px;
  height: 25px;
`;

const SwitchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

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
