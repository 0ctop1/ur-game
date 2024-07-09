"use client";

import React from "react";
import "./piece.scss";

interface PieceProps {
  player: number; // 1 for player 1, 2 for player 2
}

const Piece: React.FC<PieceProps> = ({ player }) => {
  return (
    <div className={`piece player-${player}`}>{player === 1 ? "P1" : "P2"}</div>
  );
};

export default Piece;
