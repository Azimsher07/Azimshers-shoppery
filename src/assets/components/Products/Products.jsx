import React, { useContext } from "react";
import styles from "./Products.module.css";
import TechsContext from "../../context/TechsContext";
import { Product } from "./Product/Product";
import techs from "../../data/data";

export const Products = () => {
  const ctx = useContext(TechsContext);
  return (
    <section className={styles.ProductsSection}>
      <h2>PRODUCTS</h2>
      <div className={`container ${styles.allProducts}`}>
        {techs.map((tech) => {
          return (
            <Product
              key={tech.id}
              tech={tech}
              notify={ctx.notify}
              addProductHandler={ctx.addProductHandler}
            ></Product>
          );
        })}
      </div>
    </section>
  );
};
