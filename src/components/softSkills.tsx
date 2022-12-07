import { useTranslation } from "react-i18next";

export function SoftSkills() {
  const { t } = useTranslation();
  return (
    <section id="softSkills">
      <h2>{t("Heading")}</h2>
      <hr />
      <ol>
        {t("")}
        <li>{t("Team player")}</li>
        <li>{t("Multitasking")}</li>
        <li>{t("Rational")}</li>
        <li>{t("Mental stamina")}</li>
        <li>{t("Health")}</li>
        <li>{t("Military")}</li>
        <li>{t("Experience")}</li>
        <li>{t("Eloquence")}</li>
        <li>{t("Motivation")}</li>
        <li>{t("Academic performance")}</li>
      </ol>
    </section>
  );
}
