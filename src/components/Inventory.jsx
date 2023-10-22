import "../style/index.scss";
import {Items} from "./Items.jsx";
import Potion from "../assets/potion.png";
import {useProvider} from "../context/index.jsx";

export const Inventory = () => {

  const {health, healthMax, setHealth, mana, manaMax, setMana, stamina, staminaMax, setStamina} = useProvider();

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

  return (
    <div className={'inventory'}>
      {Items.map((item, index) => (
        <div key={index} onClick={() => handlePotionEffect(item)}>
          <img src={Potion} alt={"potion"}/>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  )
}