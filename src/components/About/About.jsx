import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";
import aboutUs from "../../assets/images/pic36.webp";
import aboutUsSecond from "../../assets/images/pic28.webp";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.title}>
            {t("title1")}
            <br />
            {t("title2")}
          </h2>
          <p className={styles.paragraph}>{t("paragraph1")}</p>
          <p className={styles.paragraph}>{t("paragraph2")}</p>
          <p className={styles.paragraph}>{t("paragraph3")}</p>
        </div>
        <div className={styles.imageWrapper}>
          <img src={aboutUs} alt="About Us" className={styles.image} />
        </div>
      </div>
      <div className={`${styles.content}`}>
        <div className={styles.imageWrapper}>
          <img src={aboutUsSecond} alt="Our Team" className={styles.image} />
        </div>
        <div className={styles.text}>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <h3 className={styles.statNumber}>60+</h3>
              <p className={styles.statText}>{t("statText1")}</p>
            </div>
            <div className={styles.stat}>
              <h3 className={styles.statNumber}>40</h3>
              <p className={styles.statText}>{t("statText2")}</p>
            </div>
            <div className={styles.stat}>
              <h3 className={styles.statNumber}>100+</h3>
              <p className={styles.statText}>{t("statText3")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
