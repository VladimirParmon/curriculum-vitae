import { Trans, useTranslation } from "react-i18next";
export function HardSkills() {
  const { t } = useTranslation();
  return (
    <section id="hardSkills">
      <h2>Technical Skills</h2>
      <hr />
      <p>
        <Trans>{t("Computer science")}</Trans>
      </p>
      <p>
        <Trans>{t("Prior work")}</Trans>
      </p>
      <span>{t("Use frequently")}:</span>
      <ul>
        <li>
          <Trans>{t("HTML")}</Trans>
        </li>
        <li>
          <Trans>{t("JavaScript")}</Trans>
        </li>
        <li>
          <Trans>{t("Apex")}</Trans>
        </li>
      </ul>
      <span>{t("Favorite frameworks")}:</span>
      <ul>
        <li>
          <Trans>{t("React")}</Trans>
        </li>
        <li>
          <Trans>{t("Angular")}</Trans>
        </li>
        <li>
          <Trans>{t("Lightning Web")}</Trans>
        </li>
      </ul>
      <p>
        <Trans>{t("Git")}</Trans>
      </p>
      <span>{t("Non-extensively")}:</span>
      <ul>
        <li>NodeJS</li>
        <li>PHP/WordPress</li>
        <li>Electron</li>
        <li>Cypress</li>
        <li>Figma</li>
        <li>Photoshop</li>
        <li>Docker</li>
      </ul>
    </section>
  );
}
