import { Header } from "./assets/components/Header/Header";
import { Products } from "./assets/components/Products/Products";
import { TechsContextProvider } from "./assets/context/TechsContextProvider";
import "./App.css";

function App() {
  return (
    <>
      <TechsContextProvider>
        <Header />
        <Products />
      </TechsContextProvider>
    </>
  );
}

export default App;
