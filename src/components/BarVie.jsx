import {useCallback} from "react";
import {useProvider} from "../context";
import {enemyList} from "./Enemies.jsx";
import "../style/index.scss";
import {useInterval} from "../functions/useInterval.jsx";

const BarreDeVie = () => {
  const {
    health,
    healthMax,
    setHealth,
    damageEnemy,
    setLevel,
    setMobHealth,
    setDamageEnemy,
    setStamina,
    setMana
  } = useProvider();

  const barreStyle = {
    width: `${health}%`,
    backgroundColor: "red",
  };

  const damageEnemyAuto = useCallback(() => {
    if (health - damageEnemy <= 0) {
      setLevel(0);
      setMobHealth(enemyList[0].points);
      setDamageEnemy(enemyList[0].damage);
      setHealth(100);
      setStamina(100);
      setMana(100);
    } else {
      setHealth(health - damageEnemy);
    }
  }, [damageEnemy, health, setDamageEnemy, setHealth, setLevel, setMana, setMobHealth, setStamina]);

  useInterval(() => {
    damageEnemyAuto();
  }, 1000);

  return (
    <div className="barre-stat">
      <span>{health}/{healthMax}</span>
      <div className="barre" style={barreStyle}>
      </div>
    </div>
  );
};

export default BarreDeVie;
