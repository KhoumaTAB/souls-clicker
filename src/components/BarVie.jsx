import {useCallback, useEffect} from "react";
import {useProvider} from "../context";
import {enemyList} from "./Enemies.jsx";

const BarreDeVie = () => {
  const {health, setHealth, damageEnemy, setLevel, setMobHealth, setDamageEnemy} = useProvider();

  const barreStyle = {
    width: `${health}%`,
    backgroundColor: health > 30 ? "red" : "red",
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
    <div className="barre-de-vie">
      <div className="barre" style={barreStyle}>
        {health}%
      </div>
      <div className="barre" style={barreStyle}>
        {health}%
      </div>
    </div>
  );
};

export default BarreDeVie;
