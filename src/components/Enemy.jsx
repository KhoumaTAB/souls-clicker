import {useEffect, useCallback} from "react";
import {useProvider} from "../context";
import {enemyList} from "./Enemies";

export const Enemy = () => {
  const {
    level,
    setLevel,
    mobHealth,
    setMobHealth,
    damageAuto,
    damagePerClick, setDamageEnemy
  } = useProvider();

  const decreasePoint = useCallback((damage = damageAuto) => {
    if (mobHealth - damage > 0) {
      setMobHealth(mobHealth - damage);
    } else {
      if (level === enemyList.length - 1) {
        setLevel(0);
        setMobHealth(enemyList[0].points);
        setDamageEnemy(enemyList[0].damage);
      } else {
        setLevel(level + 1);
        setMobHealth(enemyList[level + 1].points);
        setDamageEnemy(enemyList[level + 1].damage);
      }
    }
  }, [damageAuto, level, setLevel, setMobHealth, mobHealth, setDamageEnemy]);

  useEffect(() => {
    const autoInterval = setInterval(decreasePoint, 1000);

    return () => {
      clearInterval(autoInterval);
    };
  }, [decreasePoint]);

  useEffect(() => {
    setMobHealth(enemyList[level]["points"]);
    setDamageEnemy(enemyList[level]["damage"])
  }, [level, setDamageEnemy, setMobHealth]);

  return (
    <div>
      <h1>{enemyList[level].Nom}</h1>
      <h2>
        HP: {mobHealth} / {enemyList[level].points}
      </h2>
      <img
        src={enemyList[level].imgSrc}
        onClick={() => decreasePoint(damagePerClick)}
        style={{cursor: "pointer"}}
      />
    </div>
  );
}
