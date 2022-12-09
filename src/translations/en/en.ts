import { contacts } from "./contacts";
import { education } from "./education";
import { english } from "./english";
import { footer } from "./footer";
import { hardSkills } from "./hardSkills";
import { projects } from "./projects";
import { softSkills } from "./softSkills";
import { welcome } from "./welcome";

export const EN = {
  ...welcome,
  ...contacts,
  ...softSkills,
  ...hardSkills,
  ...education,
  ...projects,
  ...english,
  ...footer,
};
