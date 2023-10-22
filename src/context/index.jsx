import {createContext, useContext, useState} from "react";

export const NewContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({children}) => {
  const [level, setLevel] = useState(0);

  //Enemy
  const [mobHealth, setMobHealth] = useState(0);
  const [damageEnemy, setDamageEnemy] = useState(0);

  //Personnage
  const [damageAuto, setDamageAuto] = useState(1);
  const [damagePerClick, setDamagePerClick] = useState(1);
  const [souls, setSouls] = useState(0)

  //Personnage - Vie
  const [health, setHealth] = useState(100);
  const [healthMax, setHealthMax] = useState(100);
  const [regenHealth, setRegenHealth] = useState(10);

  //Personnage - Stamina
  const [stamina, setStamina] = useState(100);
  const [staminaMax, setStaminaMax] = useState(100);
  const [regenStamina, setRegenStamina] = useState(10);

  // Personnage - Mana
  const [mana, setMana] = useState(100);
  const [manaMax, setManaMax] = useState(100);
  const [regenMana, setRegenMana] = useState(5);

  return (
    <NewContext.Provider
      value={{
        level,
        setLevel,
        mobHealth,
        setMobHealth,
        damageEnemy,
        setDamageEnemy,
        damageAuto,
        setDamageAuto,
        damagePerClick,
        setDamagePerClick,
        health,
        setHealth,
        stamina,
        setStamina,
        mana,
        setMana,
        healthMax,
        setHealthMax,
        staminaMax,
        setStaminaMax,
        manaMax,
        setManaMax,
        regenHealth,
        setRegenHealth,
        regenStamina,
        setRegenStamina,
        regenMana,
        setRegenMana, souls, setSouls
      }}
    >
      {children}
    </NewContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProvider = () => useContext(NewContext);
