import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";
import Instagram from "../../assets/images/instagram.svg";
import Facebook from "../../assets/images/facebook.svg";
import Youtube from "../../assets/images/youtube.svg";

const Footer = () => {
  const { t } = useTranslation("footer");
  const navigate = useNavigate();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {" "}
        <div className={styles.top}>
          <p className={styles.title}>Beauty</p>
          <p className={styles.agreement}>
            <a
              href="https://docs.google.com/document/d/1AUsbxed9XP_8C32l4e7wcVevNFmrXMzK/edit?usp=sharing&ouid=112394040486772772295&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
            >
              {t("blank")}
            </a>
          </p>
        </div>
        <div className={styles.bottom}>
          {" "}
          <div className={styles.left}>
            <p className={styles.subscribe}>{t("subscribe")}</p>
            <button className={styles.button}>{t("button")}</button>
            <div className={styles.socials}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img
                  src={Instagram}
                  alt="Instagram"
                  className={styles.vector}
                />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src={Facebook} alt="Facebook" className={styles.vector} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <img src={Youtube} alt="Youtube" className={styles.vector} />
              </a>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.list}>
              <div className={styles.links}>
                <button onClick={() => navigate("/price")}>{t("menu1")}</button>
                <p>{t("menu2")}</p>
                <p>{t("menu3")}</p>
                <p>{t("menu5")}</p>
              </div>
              <div className={styles.links}>
                <p className={styles.hideOnMobile}>{t("menu4")}</p>
                <p className={styles.hideOnMobile}>{t("menu6")}</p>
                <p className={styles.hideOnMobile}>{t("menu7")}</p>
                <p className={styles.hideOnMobile}>{t("menu8")}</p>
              </div>
              <div className={styles.links}>
                <p className={styles.hideOnMobile}>{t("menu9")}</p>
                <p className={styles.hideOnMobile}>{t("menu10")}</p>
                <p className={styles.hideOnMobile}>{t("menu11")}</p>
              </div>
            </div>
            <div className={styles.contactInfo}>
              <p>beautyprovocateur@gmail.com</p>
              <p>+1 847 87 46 333</p>
              <p className={styles.hideOnMobile}>
                820 E Nerge Rd
                <br />
                Roselle, IL 60172 <br /> United States
              </p>
            </div>
          </div>
        </div>
        <div className={styles.bottomRight}>
          <button className={styles.contactButton}>
            {t("contactButton1")}
            <br />
            {t("contactButton2")}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
