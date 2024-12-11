import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";
import blur from "../../assets/images/OverlayBlur.svg";

const Hero = () => {
  const { t } = useTranslation("hero");

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.main_title}>
          <img src={blur} alt="Beauty" className={styles.Beauty} />
        </h1>
        <h2 className={styles.title}>
          {t("title1")} <br />
          {t("title2")}{" "}
        </h2>
        <p className={styles.text}>
          {t("text1")} <br />
          {t("text2")}{" "}
        </p>
        <button className={styles.button}>{t("button")}</button>
      </div>
    </section>
  );
};
export default Hero;
