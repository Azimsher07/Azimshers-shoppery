import React, { useReducer, useState } from "react";
import TechsContext from "./TechsContext";
import { toast } from "react-toastify";

const initialTechsValues = {
  totalPrice: 0,
  items: [],
};

const reducerTechs = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const newItems = [...state.items];
      const findItem = newItems.find((item) => item.id === action.payload.id);

      findItem
        ? (findItem.count += 1)
        : newItems.unshift({
            ...action.payload,
            count: 1,
          });

      const totalPrice = newItems.reduce(
        (acc, el) => acc + el.price * el.count,
        0
      );

      return {
        ...state,
        items: newItems,
        totalPrice: totalPrice,
      };
    }

    case "DEL": {
      const newItems = [...state.items].filter(
        (item) => item.id !== action.payload.id
      );
      console.log(newItems);
      // const totalPrice = newItems.reduce(
      //   (acc, el) => acc + el.price * el.count,
      //   0
      // );
      // return {
      //   ...state,
      //   items: newItems,
      //   totalPrice: totalPrice,
      // };
    }

    // If the item is not found, return the current state
    // return state;
    // }

    // case "DEL": {
    //   // if (action.payload.count == 1) {
    //   const newItems = [...state.items].filter(
    //     (item) => item.id !== action.payload.id
    //   );
    //   // } else {
    //   //   const newItems = [...state.items];
    //   //   newItems.unshift({ count: action.payload.count - 1 });
    //   // }

    //   // const findItem = newItems.find((item) => item.id === action.payload.id);
    //   // findItem && (findItem.count -= 1);

    //   const totalPrice = newItems.reduce(
    //     (acc, el) => acc + el.price * el.count,
    //     0
    //   );
    //   return {
    //     ...state,
    //     items: newItems,
    //     totalPrice: totalPrice,
    //   };
    // }
  }
};

export const TechsContextProvider = (props) => {
  const [allTechs, dispatch] = useReducer(reducerTechs, initialTechsValues);
  const [activePage, setActivePage] = useState(true);

  const toggleActivePage = () => setActivePage(!activePage);

  const addProductHandler = (tech) => dispatch({ type: "ADD", payload: tech });
  const decProductHandler = (tech) => dispatch({ type: "DEC", payload: tech });

  const notify = (type) =>
    toast.success(`Product ${type}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <>
      <TechsContext.Provider
        value={{
          allTechs,
          notify,
          addProductHandler,
          decProductHandler,
          toggleActivePage,
          activePage,
        }}
      >
        {props.children}
      </TechsContext.Provider>
    </>
  );
};

// const changeToastify = (type) =>
//   dispatch(type ? { type: "TOAST_ADD" } : { type: "TOAST_REM" });

// case "TOAST_ADD":
//   toast.success(`Product added`, {
//     position: "top-center",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "light",
//   });
//   break;
// case "TOAST_REM":
//   toast.success(`Product removed`, {
//     position: "top-center",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "light",
// });
