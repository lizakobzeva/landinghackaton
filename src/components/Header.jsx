import React from "react";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  return (
    <div className="Header">
      <h2>{t(`header.logo`)}</h2>
      <div className="ButtonChangeLanguage">
        <button
          className={i18n.language === "ru" ? "active" : ""}
          type="submit"
          onClick={() => i18n.changeLanguage("ru")}
        >
          RU
        </button>
        <button
          className={i18n.language === "en" ? "active" : ""}
          type="submit"
          onClick={() => i18n.changeLanguage("en")}
        >
          EN
        </button>
      </div>
    </div>
  );
}
