import { useState } from "react";


export default function GameBoard({board, onPlayerClick}) {
  // const [gameBoard, setGameBoard] = useState(initialBoard);

  // function handleOnPlayerClick(rowIndex, colIndex) {
  //   setGameBoard((previousBoard) => {
  //     const newBoard = [...previousBoard.map((rows) => [...rows])];
  //     newBoard[rowIndex][colIndex] = activePlayer;
  //     return newBoard;
  //   });
  //   onSelect(rowIndex, colIndex);
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onPlayerClick(rowIndex, colIndex)} disabled={board[rowIndex][colIndex]}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
