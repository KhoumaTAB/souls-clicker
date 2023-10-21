import { useEffect, useCallback } from "react";
import { useProvider } from "../context";
import { enemyList } from "./Enemies";

export const Enemy = () => {
  const {
    level,
    setLevel,
    mobHealth,
    setMobHealth,
    damageAuto,
    damagePerClick,
  } = useProvider();

  const decreasePoint = useCallback((damage = damageAuto) => {
    if (mobHealth > 1) {
      setMobHealth(mobHealth - damage);
    } else {
      if(level === enemyList.length - 1){
        setLevel(0);
        setMobHealth(enemyList[0].points);
      } else {
        setLevel(level + 1);
        setMobHealth(enemyList[level + 1].points);
      }
    }
  }, [damageAuto, level, setLevel, setMobHealth, mobHealth]);

  useEffect(() => {
    const autoInterval = setInterval(decreasePoint, 1000);

    return () => {
      clearInterval(autoInterval);
    };
  }, [decreasePoint]);

  useEffect(() => {
    setMobHealth(enemyList[level]["points"]);
  }, [level, setMobHealth]);

  return (
    <div>
      <h1>{enemyList[level].Nom}</h1>
      <h2>
        HP: {mobHealth} / {enemyList[level].points}
      </h2>
      <img
        src={enemyList[level].imgSrc}
        onClick={() => decreasePoint(damagePerClick)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
