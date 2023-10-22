import {Enemy} from "./components/Enemy";
import "./App.css";
import {Perso} from "./components/Perso";
import {Inventory} from "./components/Inventory.jsx";
import {Souls} from "./components/Souls.jsx";

function App() {
  return (
    <>
      <div>
        <Souls/>
        <Enemy/>
        <Perso/>
        <Inventory/>
      </div>
    </>
  );
}

export default App;
