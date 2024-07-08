import React from 'react';
import Dice from '../dice';
import Cell from '../cell/cell';
import './board.scss';

const Board: React.FC = () => {
  // Define the layout of the board with empty cells (0) and filled cells (1)
  const cells = [
    { id: 1, active: true, row: 0, col: 0 }, { id: 2, active: true, row: 0, col: 1 },
    { id: 3, active: true, row: 0, col: 2 }, { id: 4, active: true, row: 0, col: 3 },
    { id: 5, active: false, row: 0, col: 4 }, { id: 6, active: false, row: 0, col: 5 },
    { id: 7, active: true, row: 0, col: 6 }, { id: 8, active: true, row: 0, col: 7 },
    { id: 9, active: true, row: 1, col: 0 }, { id: 10, active: true, row: 1, col: 1 },
    { id: 11, active: true, row: 1, col: 2 }, { id: 12, active: true, row: 1, col: 3 },
    { id: 13, active: true, row: 1, col: 4 }, { id: 14, active: true, row: 1, col: 5 },
    { id: 15, active: true, row: 1, col: 6 }, { id: 16, active: true, row: 1, col: 7 },
    { id: 17, active: true, row: 2, col: 0 }, { id: 18, active: true, row: 2, col: 1 },
    { id: 19, active: true, row: 2, col: 2 }, { id: 20, active: true, row: 2, col: 3 },
    { id: 21, active: false, row: 2, col: 4 }, { id: 22, active: false, row: 2, col: 5 },
    { id: 23, active: true, row: 2, col: 6 }, { id: 24, active: true, row: 2, col: 7 },
  ];

  return (
    <div className="board">
      {cells.map(cell => (
        <Cell key={cell.id} row={cell.row} col={cell.col} active={cell.active} />
      ))}
    </div>
  );
};

export default Board;