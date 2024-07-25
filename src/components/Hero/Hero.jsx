import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nisadi Mithara</h1>
        <p className={styles.description}>
        I am an undergraduate student pursuing a BSc.(Hons) in Information Technology. I am also a full-stack web developer, 
        skilled in both front-end and back-end technologies.
        </p>
        <a href="mailto:nisadimithara01@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
