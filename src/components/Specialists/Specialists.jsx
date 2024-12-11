import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import person1 from "../../assets/images/person1.webp";
import person2 from "../../assets/images/person2.webp";
import person3 from "../../assets/images/person3.webp";
import person4 from "../../assets/images/person4.webp";
import person5 from "../../assets/images/person5.webp";
import person6 from "../../assets/images/person6.webp";
import person7 from "../../assets/images/person7.webp";
import person8 from "../../assets/images/pic10.webp";

import styles from "./Specialists.module.css";

const Specialists = () => {
  const { t } = useTranslation("specialists");

  const [category, setCategory] = useState("ALL");

  const categories = [
    "ALL",
    t("categories1"),
    t("categories2"),
    t("categories3"),
    t("categories4"),
    t("categories5"),
    t("categories6"),
  ];
  const specialists = [
    {
      id: 1,
      name: t("name1"),
      specialty: t("specialty1"),
      image: person1,
    },
    {
      id: 2,
      name: t("name2"),
      specialty: t("specialty2"),
      image: person2,
    },
    {
      id: 3,
      name: t("name3"),
      specialty: t("specialty3"),
      image: person3,
    },
    {
      id: 4,
      name: t("name4"),
      specialty: t("specialty4"),
      image: person4,
    },
    {
      id: 5,
      name: t("name5"),
      specialty: t("specialty5"),
      image: person5,
    },
    {
      id: 6,
      name: t("name6"),
      specialty: t("specialty6"),
      image: person6,
    },
    {
      id: 7,
      name: t("name7"),
      specialty: t("specialty7"),
      image: person7,
    },
    {
      id: 8,
      name: t("name8"),
      specialty: t("specialty8"),
      image: person8,
    },
  ];

  const filteredSpecialists =
    category === "ALL"
      ? specialists
      : specialists.filter((specialist) => specialist.specialty === category);

  return (
    <section className={styles.specialists}>
      <h2 className={styles.title}>
        {t("title")}{" "}
        <span style={{ fontFamily: "Inter", fontStyle: "italic" }}>
          AESCULAP
        </span>
      </h2>
      <div className={styles.categories}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.categoryButton} ${
              category === cat ? styles.active : ""
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {filteredSpecialists.map((specialist) => (
          <div key={specialist.id} className={styles.card}>
            <img
              src={specialist.image}
              alt={specialist.name}
              className={styles.image}
            />
            <h3 className={styles.name}>{specialist.name}</h3>
            <p className={styles.specialty}>{specialist.specialty}</p>
          </div>
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>{t("button")}</button>
      </div>
    </section>
  );
};

export default Specialists;
