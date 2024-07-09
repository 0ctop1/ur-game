"use client";

import React, { useState } from "react";
import Dice from "../dice/dice";
import Cell from "../cell/cell";
import "./board.scss";

interface Piece {
  id: number;
  player: number;
  position: number | null; // null if the piece is not on the board
}

// Initialize pieces with some placed on the board for testing
const initialPieces: Piece[] = [
  { id: 1, player: 1, position: 0 },
  { id: 2, player: 1, position: 1 },
  { id: 3, player: 2, position: 8 },
  { id: 4, player: 2, position: 9 },
];

const Board: React.FC = () => {
  const [pieces, setPieces] = useState<Piece[]>(initialPieces);
  const [currentPlayer, setCurrentPlayer] = useState<number>(1);
  const [diceResults, setDiceResults] = useState<number[]>([0, 0, 0, 0]);

  const handleRollDice = () => {
    const rolls = [];
    for (let i = 0; i < 4; i++) {
      const roll = Math.floor(Math.random() * 6) + 1;
      rolls.push(roll <= 2 ? 1 : 0);
    }
    console.log("Dice rolls:", rolls);
    setDiceResults(rolls);
  };

  const movePiece = (pieceId: number) => {
    const totalRoll = diceResults.reduce((sum, roll) => sum + roll, 0);
    console.log(`Attempting to move piece ${pieceId} by ${totalRoll} steps`);

    setPieces((prevPieces) => {
      const updatedPieces = prevPieces.map((piece) => {
        if (piece.id === pieceId) {
          const newPosition =
            piece.position === null
              ? totalRoll - 1
              : piece.position + totalRoll;
          console.log(`New position of piece ${pieceId}: ${newPosition}`);
          return { ...piece, position: newPosition };
        }
        return piece;
      });
      console.log("Updated pieces state:", updatedPieces);
      return updatedPieces;
    });

    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    setDiceResults([0, 0, 0, 0]);
  };

  const cells = [
    { id: 1, active: true, row: 0, col: 0 },
    { id: 2, active: true, row: 0, col: 1 },
    { id: 3, active: true, row: 0, col: 2 },
    { id: 4, active: true, row: 0, col: 3 },
    { id: 5, active: false, row: 0, col: 4 },
    { id: 6, active: false, row: 0, col: 5 },
    { id: 7, active: true, row: 0, col: 6 },
    { id: 8, active: true, row: 0, col: 7 },
    { id: 9, active: true, row: 1, col: 0 },
    { id: 10, active: true, row: 1, col: 1 },
    { id: 11, active: true, row: 1, col: 2 },
    { id: 12, active: true, row: 1, col: 3 },
    { id: 13, active: true, row: 1, col: 4 },
    { id: 14, active: true, row: 1, col: 5 },
    { id: 15, active: true, row: 1, col: 6 },
    { id: 16, active: true, row: 1, col: 7 },
    { id: 17, active: true, row: 2, col: 0 },
    { id: 18, active: true, row: 2, col: 1 },
    { id: 19, active: true, row: 2, col: 2 },
    { id: 20, active: true, row: 2, col: 3 },
    { id: 21, active: false, row: 2, col: 4 },
    { id: 22, active: false, row: 2, col: 5 },
    { id: 23, active: true, row: 2, col: 6 },
    { id: 24, active: true, row: 2, col: 7 },
  ];

  return (
    <div className="container">
      <div className="board">
        {cells.map((cell) => {
          const piece = pieces.find((p) => p.position === cell.id - 1);
          return (
            <Cell
              key={cell.id}
              row={cell.row}
              col={cell.col}
              active={cell.active}
              piece={piece ? piece.player : undefined}
              onClick={() =>
                piece && piece.player === currentPlayer
                  ? movePiece(piece.id)
                  : console.log(
                      `Cell at row ${cell.row}, col ${cell.col} clicked but no piece to move or wrong player`
                    )
              }
            />
          );
        })}
      </div>
      <div className="dice">
        <Dice onRoll={handleRollDice} results={diceResults} />
      </div>
    </div>
  );
};

export default Board;
