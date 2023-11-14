import React from "react";
import styles from "./Header.module.css";
import heroImg from "../../images/hero-4e005342.png";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={heroImg} alt="heroImg" />
    </header>
  );
};
