import React from "react";
import styles from "./Gallery.module.css";
import gallery1 from "../../assets/images/pic38.webp";
import gallery2 from "../../assets/images/pic27.webp";
import gallery3 from "../../assets/images/pic42.webp";
import gallery4 from "../../assets/images/pic09.webp";
import gallery5 from "../../assets/images/pic25.webp";

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <div className={styles.grid}>
        <div className={`${styles.item} ${styles.vertical}`}>
          <img src={gallery1} alt="Gallery Item 1" className={styles.image} />
        </div>
        <div className={`${styles.item} ${styles.topRight}`}>
          <img src={gallery2} alt="Gallery Item 2" className={styles.image} />
        </div>
        <div className={`${styles.item} ${styles.middleRight}`}>
          <img src={gallery3} alt="Gallery Item 3" className={styles.image} />
        </div>
        <div className={`${styles.item} ${styles.bottomLeft}`}>
          <img src={gallery4} alt="Gallery Item 4" className={styles.image} />
        </div>
        <div className={`${styles.item} ${styles.bottomRight}`}>
          <img src={gallery5} alt="Gallery Item 5" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
