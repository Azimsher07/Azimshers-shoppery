import React from "react";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Header.module.css";
import heroImg from "../../images/hero-4e005342.png";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <img src={heroImg} alt="heroImg" />
    </header>
  );
};
