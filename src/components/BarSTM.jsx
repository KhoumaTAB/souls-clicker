import React, { useState } from "react";
import { useProvider } from "../context";

const BarreDeSTM = () => {
  const { stamina } = useProvider();

  const barreStyle = {
    width: `${stamina}%`,
    backgroundColor: stamina > 30 ? "green" : "red",
  };

  return (
    <div className="barre-de-stamina">
      <div className="barre" style={barreStyle}>
        {stamina}%
      </div>
    </div>
  );
};

export default BarreDeSTM;
