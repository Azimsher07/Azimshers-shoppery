import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import { NavbarIcon2, NavbarIcon1 } from "./NavbarIcons";
import TechsContext from "../../context/TechsContext";

export const Navbar = () => {
  const ctx = useContext(TechsContext);
  return (
    <div className={styles.navbar}>
      <NavbarIcon1  />

      <NavbarIcon2  />
    </div>
  );
};
