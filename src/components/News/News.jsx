import React from "react";
import styles from "./News.module.css";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import news1 from "../../assets/images/pic22.webp";
import news2 from "../../assets/images/pic20.webp";
import news3 from "../../assets/images/pic12.webp";
import news4 from "../../assets/images/pic17.webp";
import news5 from "../../assets/images/pic21.webp";

const News = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("news");

  const news = [
    {
      id: 1,
      title: t("title1"),
      date: "02.02.2024",
      categories: [t("categories1"), t("categories2")],
      image: news1,
    },
    {
      id: 2,
      title: t("title2"),
      date: "12.12.2023",
      categories: [t("categories3"), t("categories2")],
      image: news2,
    },
    {
      id: 3,
      title: t("title3"),
      date: "04.12.2023",
      categories: [t("categories4"), t("categories2")],
      image: news3,
    },
    {
      id: 4,
      title: t("title4"),
      date: "03.10.2023",
      categories: [t("categories5"), t("categories2")],
      image: news4,
    },
    {
      id: 5,
      title: t("title5"),
      date: "01.10.2023",
      categories: [t("categories6")],
      image: news5,
    },
  ];

  const handleDetailsClick = (id: number) => {
    if (id === 2) {
      navigate("/news");
    }
  };

  return (
    <section className={styles.news}>
      <h2 className={styles.title}>
        {t("title")}{" "}
        <span style={{ fontFamily: "Inter", fontStyle: "italic" }}>
          {t("span")}
        </span>
      </h2>
      <div className={styles.grid}>
        {news.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <div className={styles.categories}>
              {item.categories.map((cat) => (
                <span key={cat} className={styles.category}>
                  {cat}
                </span>
              ))}
            </div>
            <p className={styles.date}>{item.date}</p>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <button
              className={styles.button}
              onClick={() => handleDetailsClick(item.id)}
            >
              {t("button")}
            </button>
          </div>
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <Link to="/blog" className={styles.mainButton}>
          {t("mainButton")}
        </Link>
      </div>
    </section>
  );
};

export default News;
