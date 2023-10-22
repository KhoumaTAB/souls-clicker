import {useProvider} from "../context";
import "../style/index.scss";
import {useInterval} from "../functions/useInterval.jsx";

const BarreDeSTM = () => {
  const {stamina, setStamina, staminaMax, regenStamina} = useProvider();

  const barreStyle = {
    width: `${stamina}%`,
    backgroundColor: "green",
  };

  const handleRegenStamina = () => {
    if (stamina + regenStamina >= staminaMax) {
      setStamina(staminaMax);
    } else {
      setStamina(stamina + regenStamina);
    }
  }

  useInterval(() => {
    handleRegenStamina();
  }, 10000);

  return (
    <div className="barre-stat">
      <span>{stamina}/{staminaMax}</span>
      <div className="barre" style={barreStyle}>
      </div>
    </div>
  );
};

export default BarreDeSTM;
