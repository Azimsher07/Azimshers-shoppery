import React from "react";
import TechsContext from "./TechsContext";


export const TechsContextProvider = ({ children }) => {
  return (
    <>
      <TechsContext.Provider>{children}</TechsContext.Provider>
    </>
  );
};
