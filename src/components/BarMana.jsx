import {useProvider} from "../context";
import "../style/index.scss";
import {useInterval} from "../functions/useInterval.jsx";

const BarreDeMana = () => {
  const {mana, manaMax, regenMana, setMana} = useProvider();

  const barreStyle = {
    width: `${mana}%`,
    backgroundColor: "blue",
  };

  const handleRegenMana = () => {
    if (mana + regenMana >= manaMax) {
      setMana(manaMax);
    } else {
      setMana(mana + regenMana);
    }
  }

  useInterval(() => {
    handleRegenMana();
  }, 10000)

  return (
    <div className="barre-stat">
      <span>
        {mana}/{manaMax}
      </span>
      <div className="barre" style={barreStyle}></div>
    </div>
  );
};

export default BarreDeMana;
