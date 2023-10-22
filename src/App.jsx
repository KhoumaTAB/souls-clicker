import {Enemy} from "./components/Enemy";
import "./App.css";
import {Perso} from "./components/Perso";
import {Inventory} from "./components/Inventory.jsx";

function App() {
  return (
    <>
      <div>
        <Enemy/>
        <Perso/>
        <Inventory/>
      </div>
    </>
  );
}

export default App;
