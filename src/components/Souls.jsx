import "../style/index.scss";
import {useProvider} from "../context/index.jsx";

export const Souls = () => {
  const {souls} = useProvider();
  return (
    <div className={'souls'}>
      <span>{souls}</span>
    </div>
  )
}