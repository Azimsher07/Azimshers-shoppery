import React from "react";
import styles from "./Navbar.module.css";
import { NavbarIcon2, NavbarIcon1 } from "./NavbarIcons";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavbarIcon1 />

      <NavbarIcon2 />
    </div>
  );
};
