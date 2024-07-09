"use client";

import React from "react";
import Piece from "../piece/piece";
import "./cell.scss";

interface CellProps {
  row: number;
  col: number;
  active: boolean;
  piece?: number; // 1 for player 1, 2 for player 2, undefined for no piece
  onClick?: () => void;
}

const Cell: React.FC<CellProps> = ({ row, col, active, piece, onClick }) => {
  return (
    <div
      className={`cell row-${row} col-${col} ${active ? "active" : "inactive"}`}
      onClick={() => {
        console.log(`Cell clicked at row ${row}, col ${col}`);
        if (onClick) {
          onClick();
        }
      }}
    >
      {piece !== undefined && <Piece player={piece} />}
    </div>
  );
};

export default Cell;
