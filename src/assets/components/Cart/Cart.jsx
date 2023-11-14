import { useContext } from "react";
import styles from "./Cart.module.css";
import TechsContext from "../../context/TechsContext";
import { TrashIcon } from "../../icons/Icons";

export const Cart = () => {
  const ctx = useContext(TechsContext);

  // console.log(ctx.allTechs.items);

  return (
    <section className={styles.cart}>
      <h2>SHOPPING CART</h2>

      {ctx.allTechs?.items.length > 0 ? (
        <>
          <div className={styles.chosenTechs}>
            {ctx.allTechs?.items.map((item) => {
              return (
                <div key={item.id} className={styles.item}>
                  <div className={styles.leftSide}>
                    <div>
                      <img src={item.thumbnail} alt="item" />

                      <div className={styles.calc}>
                        <button onClick={() => {}}>-</button>
                        <p>{item.count}</p>
                        <button onClick={() => ctx.addProductHandler(item)}>
                          +
                        </button>
                      </div>
                    </div>
                    <p>
                      {item.brand} {item.title}
                    </p>
                  </div>
                  <div className={styles.rightSide}>
                    <div>
                      <h2>
                        <span>$</span> {item.price}
                      </h2>
                      <div
                        onClick={() => {
                          console.log("clicked");
                          ctx.decProductHandler(item);
                        }}
                      >
                        <TrashIcon />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <h3>
            Total Price <span>$</span>
            {ctx.allTechs?.totalPrice}
            {/* {console.log(ctx.allTechs.totalprice)} */}
          </h3>
        </>
      ) : (
        <p className={styles.h1}>There is nothing here</p>
      )}
    </section>
  );
};
