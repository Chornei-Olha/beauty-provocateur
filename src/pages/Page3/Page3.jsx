import React from "react";
import Hero3 from "../../components/Hero3/Hero3";
import Recommendations from "../../components/Recommendations/Recommendations";
import News from "../../components/News/News";
import styles from "./Page3.module.css";

const Page3 = () => {
  return (
    <div>
      <div className={styles.main}>
        <Hero3 />
      </div>
      <div className={styles.container}>
        <Recommendations />
        <div className={styles.news}>
          {" "}
          <News />
        </div>
      </div>
    </div>
  );
};

export default Page3;
