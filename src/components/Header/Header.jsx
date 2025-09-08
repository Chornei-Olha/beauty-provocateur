import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/images/Logo.svg";

const Header = () => {
  const { t } = useTranslation("header");

  const [isDropdownOpen, setDropdownOpen] = useState(false); // Для языкового переключателя
  const [isMenuOpen, setMenuOpen] = useState(false); // Для мобильного меню
  const [isExtraMenuActive, setExtraMenuActive] = useState(false); // Для десктопного меню

  const [currentLanguage, setCurrentLanguage] = useState(
    i18next.language === "uk" ? "УКР" : "ENG"
  );

  const changeLanguage = (lang: string) => {
    i18next.changeLanguage(lang);
    setCurrentLanguage(lang === "uk" ? "УКР" : "ENG");
    setDropdownOpen(false);
  };

  const toggleExtraMenu = () => {
    setExtraMenuActive(!isExtraMenuActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Beauty Logo" className={styles.logoImage} />
        </Link>
      </div>
      <div className={styles.container}>
        {/* Кнопка гамбургера */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Языковой переключатель */}
        <div className={styles.languageSwitcher}>
          <button
            className={styles.currentLanguage}
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            {currentLanguage} <span className={styles.arrow}>▼</span>
          </button>
          {isDropdownOpen && (
            <ul className={styles.dropdown}>
              {currentLanguage !== "УКР" && (
                <li onClick={() => changeLanguage("uk")}>УКР</li>
              )}
              {currentLanguage !== "ENG" && (
                <li onClick={() => changeLanguage("en")}>ENG</li>
              )}
            </ul>
          )}
        </div>

        {/* Навигация */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
          <a href="tel:+1234567890" className={styles.phone}>
            +1 847 87 46 333
          </a>
          <button className={styles.button}>{t("button")}</button>

          {/* Дополнительное меню для мобильных */}
          {isMenuOpen && (
            <>
              <Link to="/price" className={styles.extraMenuItem}>
                {t("price")}
              </Link>
              <Link to="/blog" className={styles.extraMenuItem}>
                {t("news")}
              </Link>
            </>
          )}
        </nav>

        {/* Дополнительное меню для десктопа */}
        <div
          className={`${styles.extraMenuBar} ${
            isExtraMenuActive ? styles.active : ""
          }`}
          onClick={toggleExtraMenu}
        >
          <button className={styles.extraMenuButton}>☰</button>
          <div className={styles.extraDropdown}>
            <Link to="/price">{t("price")}</Link>
            <Link to="/blog">{t("news")}</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
