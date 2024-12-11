import React from "react";
import Hero2 from "../../components/Hero2/Hero2";
import News from "../../components/News/News";
import Feedback from "../../components/Feedback/Feedback";
import styles from "./LastNews.module.css";

const LastNews = () => {
  return (
    <div>
      <Hero2 />
      <div className={styles.container}>
        <div className={styles.news}>
          {" "}
          <News />
        </div>
        <Feedback />
      </div>
    </div>
  );
};

export default LastNews;
