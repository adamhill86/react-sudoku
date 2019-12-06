import React, { useState } from 'react';
import clone from './util/deepCopy';

const Board: React.FC = () => {
  const [board, setBoardState] = useState<number[][]>(Array(9).fill(Array(9).fill(0)));

  const updateBoardState = (value: number, row: number, col: number) => {
    if (value < 0 || value > 9) {
      value = 0;
    }

    const newBoard = clone(board);
    newBoard[row][col] = value;
    setBoardState(newBoard);
  };

  return (
    <table>
      <tbody>
        {board.map((row, rowIndex) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={rowIndex}>
            {row.map((col, colIndex) => (
              // eslint-disable-next-line react/no-array-index-key
              <td key={colIndex}>
                <input
                  type='number'
                  min='0'
                  max='9'
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
