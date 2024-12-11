import React from "react";
import Hero4 from "../../components/Hero4/Hero4";
import News from "../../components/News/News";
import Feedback from "../../components/Feedback/Feedback";
import CustomTable from "../../components/CustomTable/CustomTable";
import styles from "./Price.module.css";

const Price = () => {
  return (
    <div>
      <Hero4 />

      <div className={styles.container}>
        <CustomTable />
        <News />
        <Feedback />
      </div>
    </div>
  );
};

export default Price;
