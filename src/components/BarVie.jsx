import {useCallback, useEffect} from "react";
import {useProvider} from "../context";
import {enemyList} from "./Enemies.jsx";
import "../style/index.scss";

const BarreDeVie = () => {
  const {health, healthMax, setHealth, damageEnemy, setLevel, setMobHealth, setDamageEnemy} = useProvider();

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
    } else {
      setHealth(health - damageEnemy);
    }
  }, [damageEnemy, health, setDamageEnemy, setHealth, setLevel, setMobHealth]);

  useEffect(() => {
    const autoInterval = setInterval(damageEnemyAuto, 1000);

    return () => {
      clearInterval(autoInterval);
    };
  }, [damageEnemyAuto]);

  return (
    <div className="barre-stat">
      <span>{health}/{healthMax} PV</span>
      <div className="barre" style={barreStyle}>
      </div>
    </div>
  );
};

export default BarreDeVie;
