import React, { useReducer } from "react";
import TechsContext from "./TechsContext";
import techs from "../data/data";
import { toast } from "react-toastify";

const initialTechsValues = {
  totalPrice: 0,
  products: [...techs],
  activePage: "main",
};

const reducerTechs = () => {};

export const TechsContextProvider = (props) => {
  const [allTechs, dispatch] = useReducer(reducerTechs, initialTechsValues);

  const notify = () =>
    toast.success("Product added", {
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
      <TechsContext.Provider value={{ allTechs, notify }}>
        {props.children}
      </TechsContext.Provider>
    </>
  );
};
