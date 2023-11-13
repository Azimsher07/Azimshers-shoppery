import { Header } from "./assets/components/Header/Header";
import { Products } from "./assets/components/Products/Products";
import { TechsContextProvider } from "./assets/context/TechsContextProvider";
import "./App.css";
import "./assets/Font/Font.css";
import { Toastify } from "./assets/components/Toastify/Toastify";

function App() {
  return (
    <>
      <TechsContextProvider>
        <Toastify />

        <Header />
        <Products />
      </TechsContextProvider>
    </>
  );
}

export default App;
