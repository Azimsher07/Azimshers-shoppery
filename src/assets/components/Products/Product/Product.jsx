import styles from "./Product.module.css";
import { ProductIcon } from "../../../icons/Icons";

export const Product = ({ tech, notify, addProductHandler }) => {
  const clickHandler = () => addProductHandler(tech);
  return (
    <div className={styles.box}>
      <img src={tech.images[0]} alt="product" />
      <h3>{tech.title}</h3>
      <div>
        <h4>
          <span>$</span>
          {tech.price}
        </h4>

        <ProductIcon notify={notify} clickHandler={clickHandler} />
      </div>
    </div>
  );
};
