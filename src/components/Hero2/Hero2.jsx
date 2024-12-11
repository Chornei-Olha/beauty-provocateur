import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Hero2.module.css";
import heroImage from "../../assets/images/background2.webp";
import blur from "../../assets/images/OverlayBlur2.svg";

const Hero = () => {
  const { t } = useTranslation("hero2");

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
      </div>
    </section>
  );
};
export default Hero;
