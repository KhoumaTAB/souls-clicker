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
  const [health, setHealth] = useState(100);
  const [healthMax, setHealthMax] = useState(100);
  const [stamina, setStamina] = useState(100);
  const [staminaMax, setStaminaMax] = useState(100);
  const [mana, setMana] = useState(100);
  const [manaMax, setManaMax] = useState(100);

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
        setManaMax
      }}
    >
      {children}
    </NewContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProvider = () => useContext(NewContext);
