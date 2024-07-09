"use client";

import React from "react";
import "./dice.scss";

interface DiceProps {
  onRoll: () => void;
  results: number[];
}

const Dice: React.FC<DiceProps> = ({ onRoll, results }) => {
  return (
    <div className="dice-container">
      <button onClick={onRoll}>Roll Dice</button>
      <div className="dice-results">
        {results.map((result, index) => (
          <div key={index} className="die">
            {result}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dice;
