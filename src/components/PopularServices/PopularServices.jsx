import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

import styles from "./PopularServices.module.css";
import service1 from "../../assets/images/pic26.webp";
import service2 from "../../assets/images/pic16.webp";
import service3 from "../../assets/images/pic24.webp";
import service4 from "../../assets/images/pic23.webp";

const PopularServices = () => {
  const sliderRef = useRef(null);
  const { t } = useTranslation("popularServices");

  const services = [
    { id: 1, title: t("title1"), image: service1 },
    { id: 2, title: t("title2"), image: service2 },
    { id: 3, title: t("title3"), image: service3 },
    { id: 4, title: t("title4"), image: service4 },
    { id: 5, title: t("title5"), image: service1 },
    { id: 6, title: t("title6"), image: service2 },
  ];

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 360 + 24; // ширина картинки + gap
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.popularServices}>
      <h2 className={styles.title}>
        {t("title")}{" "}
        <span style={{ fontFamily: "Inter", fontStyle: "italic" }}>
          {t("span")}
        </span>
      </h2>
      <div className={styles.sliderWrapper}>
        <div className={styles.slider} ref={sliderRef}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <img
                src={service.image}
                alt={service.title}
                className={styles.image}
              />
              <button className={styles.button}>{t("button")}</button>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <button className={styles.control} onClick={() => scrollSlider("left")}>
          ◀
        </button>
        <button
          className={styles.control}
          onClick={() => scrollSlider("right")}
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default PopularServices;
