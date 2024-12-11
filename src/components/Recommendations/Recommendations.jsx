import React from "react";
import styles from "./Recommendations.module.css";
import { useTranslation } from "react-i18next";

const Recommendations = () => {
  const { t } = useTranslation("recommendations");

  return (
    <section className={styles.main}>
      <div className={styles.nav}>
        <p className={styles.date}>02.10.2024</p>
        <div className={styles.categories}>
          <p className={styles.category}>{t("category1")}</p>
          <p className={styles.category}>{t("category2")}</p>
        </div>
      </div>
      <p className={styles.text1}>
        {t("text1")}
        <ul>
          <li>
            <span style={{ fontWeight: "bold" }}>Signature Facial (140$)</span>
            <br />
            {t("item1")}{" "}
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}> {t("link1")} (220$)</span>
            <br />
            {t("item2")}{" "}
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>Fire & Ice Facial (145$)</span>
            <br />
            {t("item3")}{" "}
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>{t("link2")} (200$)</span>
            <br />
            {t("item4")}
          </li>
        </ul>
        {t("text2")} <br />
        {t("span")}
        <ul>
          <li>
            {" "}
            {t("item5")} <br />
            {t("item6")}
          </li>
          <li>
            {" "}
            {t("item7")} <br />
            {t("item8")}{" "}
          </li>
        </ul>
      </p>
      <p className={styles.text2}>
        <span style={{ fontWeight: "bold", fontSize: "18px" }}>
          {t("text3")}{" "}
        </span>
        <br />
        {t("span1")}
        <br /> {t("span2.1")} "Provocateur" {t("span2.2")}
        <br />
        {t("span3")}
        <br />
        <span style={{ fontWeight: "bold" }}>{t("span4")}</span>
        <br />
        <ul>
          <li>{t("item9")} </li>
          <li> {t("item10")}</li>
          <li> {t("item11")}</li>
          <li> {t("item12")}</li>
        </ul>
        <span style={{ fontWeight: "bold" }}>
          {" "}
          {t("section1")} "Provocateur" {t("section2")}
        </span>
      </p>
      <span className={styles.logo}>provocateur</span>
    </section>
  );
};

export default Recommendations;
