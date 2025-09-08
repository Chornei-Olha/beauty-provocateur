import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styles from "./Hero3.module.css";
import heroImage from "../../assets/images/background3.webp";
import arrow from "../../assets/images/arrow.svg";

const Hero3 = () => {
  const { t } = useTranslation("hero3");

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/blog");
  };
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className={styles.container}>
        <p className={styles.breadcrumbs}>
          <span>{t("breadcrumbs")}</span>
          <span>/</span>
          <span>{t("span1")}</span>
          <span>/</span>
          <span style={{ fontStyle: "italic", color: "#FFFFFF66" }}>
            {t("span2")}
          </span>
        </p>
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.text}>
          {t("text")}
          "Provocateur"
        </p>
        <div className={styles.flexArrow} onClick={handleBackClick}>
          <img src={arrow} alt="back" className={styles.arrow} />{" "}
          <button className={styles.button}>{t("button")}</button>
        </div>
      </div>
    </section>
  );
};
export default Hero3;
