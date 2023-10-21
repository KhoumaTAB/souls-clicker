import {useProvider} from "../context";
import "../style/index.scss";

const BarreDeMana = () => {
  const {mana, manaMax} = useProvider();

  const barreStyle = {
    width: `${mana}%`,
    backgroundColor: "blue",
  };

  return (
    <div className="barre-stat">
      <span>{mana}/{manaMax}</span>
      <div className="barre" style={barreStyle}>
      </div>
    </div>
  );
};

export default BarreDeMana;
