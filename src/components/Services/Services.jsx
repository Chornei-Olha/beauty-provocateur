import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Services.module.css";
import service1 from "../../assets/images/pic33.webp";
import service2 from "../../assets/images/pic41.webp";
import service3 from "../../assets/images/pic32.webp";
import service4 from "../../assets/images/pic31.webp";
import service5 from "../../assets/images/pic39.webp";
import service6 from "../../assets/images/pic10.webp";
import service7 from "../../assets/images/pic30.webp";
import service8 from "../../assets/images/pic29.webp";
import service9 from "../../assets/images/pic11.webp";

const Services = () => {
  const { t } = useTranslation("services");

  const services = [
    {
      id: 1,
      title: t("title1"),
      description: t("description1"),
      image: service1,
    },
    {
      id: 2,
      title: t("title2"),
      description: t("description2"),
      image: service2,
    },
    {
      id: 3,
      title: t("title3"),
      description: t("description3"),
      image: service3,
    },
    {
      id: 4,
      title: t("title4"),
      description: t("description4"),
      image: service4,
    },
    {
      id: 5,
      title: t("title5"),
      description: t("description5"),
      image: service5,
    },
    {
      id: 6,
      title: t("title6"),
      description: t("description6"),
      image: service6,
    },
    {
      id: 7,
      title: t("title7"),
      description: t("description7"),
      image: service7,
    },
    {
      id: 8,
      title: t("title8"),
      description: t("description8"),
      image: service8,
    },
    {
      id: 9,
      title: t("title9"),
      description: t("description9"),
      image: service9,
    },
  ];

  return (
    <section className={styles.services}>
      <h2 className={styles.title}>
        {t("title")}{" "}
        <span style={{ fontFamily: "Inter", fontStyle: "italic" }}>
          Provocateur
        </span>
      </h2>
      <p className={styles.text}>{t("text")}</p>
      <div className={styles.grid}>
        {services.map((service) => (
          <div key={service.id} className={styles.card}>
            <img
              src={service.image}
              alt={service.title}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>{t("button")}</button>
      </div>
    </section>
  );
};

export default Services;
