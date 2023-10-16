import React, { useState } from "react";
import { useProvider } from "../context";

const BarreDeMana = () => {
  const { mana } = useProvider();

  const barreStyle = {
    width: `${mana}%`,
    backgroundColor: mana > 30 ? "blue" : "blue",
  };

  return (
    <div className="barre-de-mana">
      <div className="barre" style={barreStyle}>
        {mana}%
      </div>
    </div>
  );
};

export default BarreDeMana;
