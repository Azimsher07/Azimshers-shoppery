import React, { useContext } from "react";
import styles from "./Products.module.css";
import TechsContext from "../../context/TechsContext";
import { Product } from "./Product/Product";

export const Products = () => {
  const ctx = useContext(TechsContext);
  return (
    <section className={styles.ProductsSection}>
      <h2>PRODUCTS</h2>
      <div className={`container ${styles.allProducts}`}>
        {ctx.allTechs.products.map((tech) => {
          return <Product key={tech.id} tech={tech} notify={ctx.notify}></Product>;
        })}
      </div>
    </section>
  );
};
