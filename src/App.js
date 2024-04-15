import { useState, createContext } from "react";
import "./App.css";
import AddMed from "./Component/AddMed";
import Header from "./Component/Header";
import Med from "./Component/Med";
import Cart from "./Component/Cart";

export const Contex = createContext();

function App() {
  const [med, setmed] = useState([]);
  const [cart, setcart] = useState({});
  const [opencart, setopencart] = useState(false);

  return (
    <Contex.Provider value={{ med, setmed, cart, setcart, setopencart }}>
      <div className="App">
        <Header />
        {opencart && <Cart />}
        <AddMed />
        <hr></hr>
        <Med />
      </div>
    </Contex.Provider>
  );
}

export default App;
