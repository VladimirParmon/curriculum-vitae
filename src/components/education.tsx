import { useTranslation } from "react-i18next";

export function Education() {
  const { t } = useTranslation();
  return (
    <section id="education">
      <h2>{t("Education heading")}</h2>
      <hr />
      <ul>
        <li>{t("Graduated a techschool")}</li>
        <li>{t("Graduated an Uni")}</li>
      </ul>
    </section>
  );
}
