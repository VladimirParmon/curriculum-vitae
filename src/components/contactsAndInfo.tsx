import { useTranslation } from "react-i18next";

export function ContactsAndInfo() {
  const { t } = useTranslation();
  return (
    <section id="contacts">
      <h2>{t("Heading")}</h2>
      <hr />
      <ul>
        <li>
          <b>{t("Phone")}</b>: +375 25 535 15 22
        </li>
        <li>
          <b>E-mail</b>: vladimirredblooded@gmail.com
        </li>
        <li>
          <b>Telegram</b>: @red1blooded
        </li>
        <li>
          <b>{t("Purpose")}</b>: {t("Purpose+")}
        </li>
        <li>
          <b>{t("Previous occupation")}</b>: {t("Previous occupation+")}
        </li>
        <li>
          <b>{t("As for now")}</b>: {t("As for now+")}
        </li>
        <li>
          <b>{t("Languages")}</b>: {t("Languages+")}
        </li>
      </ul>
    </section>
  );
}
