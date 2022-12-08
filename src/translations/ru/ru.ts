import { contacts } from "./contacts";
import { hardSkills } from "./hardSkills";
import { softSkills } from "./softSkills";
import { welcome } from "./welcome";

export const RU = {
  ...welcome,
  ...contacts,
  ...softSkills,
  ...hardSkills,
};
