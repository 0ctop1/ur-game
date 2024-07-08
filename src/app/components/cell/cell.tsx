import React from 'react';
import "./cell.scss"

interface CellProps {
  row: number;
  col: number;
  active: boolean;
}

interface CellProps {
  row: number;
  col: number;
  active: boolean;
}

const Cell: React.FC<CellProps> = ({ row, col, active }) => {
  return (
    <div className={`cell row-${row} col-${col} ${active ? 'active' : 'inactive'}`}>
      {/* Cell content */}
    </div>
  );
};

export default Cell;