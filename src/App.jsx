import { Header } from "./assets/components/Header/Header";
import { Products } from "./assets/components/Products/Products";
import "./App.css";
import "./assets/Font/Font.css";
import { Toastify } from "./assets/components/Toastify/Toastify";
import { useContext } from "react";
import TechsContext from "./assets/context/TechsContext";
import { Cart } from "./assets/components/Cart/Cart";
import { ProductInfo } from "./assets/components/ProductInfo/ProductInfo";
import { Navbar } from "./assets/components/Navbar/Navbar";

function App() {
  const ctx = useContext(TechsContext);
  // console.log(ctx);

  return (
    <>
      <Toastify />
      <Navbar />
      <main>
        {ctx.activePage && (
          <>
            <Header />
            <Products />
          </>
        )}
        {!ctx.activePage && <Cart />}
        {/* {ctx.activePage === "info" && <ProductInfo />} */}
      </main>
    </>
  );
}

export default App;
