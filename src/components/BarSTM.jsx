import {useProvider} from "../context";
import "../style/index.scss";

const BarreDeSTM = () => {
  const {stamina, staminaMax} = useProvider();

  const barreStyle = {
    width: `${stamina}%`,
    backgroundColor: "green",
  };

  return (
    <div className="barre-stat">
      <span>{stamina}/{staminaMax}</span>
      <div className="barre" style={barreStyle}>
      </div>
    </div>
  );
};

export default BarreDeSTM;
