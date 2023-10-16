import React, { useState } from "react";
import { useProvider } from "../context";

const BarreDeVie = () => {
  const { health } = useProvider();

  const barreStyle = {
    width: `${health}%`,
    backgroundColor: health > 30 ? "red" : "red",
  };

  return (
    <div className="barre-de-vie">
      <div className="barre" style={barreStyle}>
        {health}%
      </div>
    </div>
  );
};

export default BarreDeVie;
