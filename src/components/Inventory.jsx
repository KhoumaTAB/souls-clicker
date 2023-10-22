import "../style/index.scss";
import {Items} from "./Items.jsx";
import Potion from "../assets/potion.png";
import Cadenas from "../assets/cadenas-verrouille.png";
import {useProvider} from "../context/index.jsx";

export const Inventory = () => {

  const {
    health,
    healthMax,
    setHealth,
    mana,
    manaMax,
    setMana,
    stamina,
    staminaMax,
    setStamina,
    souls,
    setSouls,
    itemsUnlocked,
    setItemsUnlocked
  } = useProvider();

  const handlePotionEffect = (item) => {
    console.log("mana: ", mana)
    switch (item.effectType) {
      case "health":
        health + item.effectPoint < healthMax ? setHealth(health + item.effectPoint) : setHealth(healthMax)
        break;
      case "stamina":
        stamina + item.effectPoint < manaMax ? setStamina(stamina + item.effectPoint) : setStamina(staminaMax)
        break;
      case "mana":
        mana + item.effectPoint < staminaMax ? setMana(mana + item.effectPoint) : setMana(manaMax)
        break;
    }
  }

  const handleEffectOrBuy = (item) => {
    if (!itemsUnlocked.includes(item.name)) {
      if (souls >= item.price) {
        const newItems = itemsUnlocked;
        newItems.push(item.name);
        setItemsUnlocked(newItems);
        setSouls(souls - item.price)
      }
    } else {
      handlePotionEffect(item)
    }
  }

  return (
    <div className={'inventory'}>
      {Items.map((item, index) => (
        <div key={index} onClick={() => handleEffectOrBuy(item)}>
          <img src={Potion} alt={"potion"}/>
          {!itemsUnlocked.includes(item.name) && <img src={Cadenas} alt={"cadenas"}/>}
          <span>{item.name}</span>
          <span>{item.price}</span>
        </div>
      ))}
    </div>
  )
}