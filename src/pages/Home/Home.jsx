import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Specialists from "../../components/Specialists/Specialists";
import Gallery from "../../components/Gallery/Gallery";
import PopularServices from "../../components/PopularServices/PopularServices";
import News from "../../components/News/News";
import Feedback from "../../components/Feedback/Feedback";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className={styles.container}>
        <Services />
        <About />
        <Specialists />
        <Gallery />
        <PopularServices />
        <News />
        <Feedback />
      </div>
    </div>
  );
};

export default Home;
