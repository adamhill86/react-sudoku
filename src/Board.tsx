import React, { useState } from 'react';

const Board: React.FC = () => {
  const [board, setBoardState] = useState<number[][]>(Array(9).fill(Array(9).fill(0)));

  // TODO: Add input validation, constrain to 0-9
  const updateBoardState = (value: number, row: number, col: number) => {
    return setBoardState(
      board.map((rows, rowIndex) =>
        rows.map((column, colIndex) => (rowIndex === row && colIndex === col ? value : column))
      )
    );
  };

  return (
    <table>
      <tbody>
        {board.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((col, colIndex) => (
              <td key={colIndex}>
                <input
                  type="number"
                  min="0"
                  max="9"
                  value={col}
                  onChange={event => updateBoardState(+event.target.value, rowIndex, colIndex)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Board;
