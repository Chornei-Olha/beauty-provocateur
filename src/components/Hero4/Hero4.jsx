import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Hero4.module.css";
import heroImage from "../../assets/images/background4.webp";
import blur from "../../assets/images/OverlayBlur4.svg";

const Hero4 = () => {
  const { t } = useTranslation("hero4");

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
          <span style={{ fontStyle: "italic", color: "#FFFFFF66" }}>
            {t("span")}
          </span>
        </p>
        <h1 className={styles.main_title}>
          <img src={blur} alt="Beauty" className={styles.Beauty} />
        </h1>
        <h2 className={styles.title}>
          {t("title")}{" "}
          <span style={{ fontFamily: "Inter", fontStyle: "italic" }}>
            Provocateur
          </span>
        </h2>
        <p className={styles.text}>
          {t("text1")}
          <br />
          {t("text2")}
          <br />
          {t("text3")}{" "}
        </p>
      </div>
    </section>
  );
};
export default Hero4;
