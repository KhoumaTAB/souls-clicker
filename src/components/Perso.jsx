import BarreDeVie from "./BarVie";
import BarreDeSTM from "./BarSTM";
import BarreDeMana from "./BarMana";
import "../style/index.scss";

export const Perso = () => {
  return (
    <div className={'personnage'}>
      <BarreDeVie/>
      <BarreDeSTM/>
      <BarreDeMana/>
    </div>
  )
}