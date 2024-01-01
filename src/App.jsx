import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import GameLog from "./components/GameLog";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const initialTurns = [{ player: "Y", square: undefined }];
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([...initialTurns.map(turn => ({...turn}))]);
  const [gameBoard, setGameBoard] = useState([
    ...initialBoard.map((row) => [...row]),
  ]);

  let winner;

  function handleOnPlayerClick(rowIndex, colIndex) {
    setGameBoard((previousBoard) => {
      const newBoard = [...previousBoard.map((rows) => [...rows])];
      newBoard[rowIndex][colIndex] = activePlayer;
      return newBoard;
    });
    handleBoxSelect(rowIndex, colIndex);
  }

  function handleBoxSelect(rowIndex, colIndex) {
    setActivePlayer((previousPlayer) => (previousPlayer === "X" ? "O" : "X"));
    setGameTurns((oldTurns) => {
      const newPlayer = oldTurns[0].player === "X" ? "O" : "X";
      const newLog = {
        player: newPlayer,
        square: { row: rowIndex, col: colIndex },
      };
      const newTurns =
        oldTurns[0].square === undefined ? [newLog] : [newLog, ...oldTurns];
      return newTurns;
    });
  }

  function handleGameRestart() {
    winner = undefined;
    gameDraw = undefined;
    setGameTurns([...initialTurns.map(turn => ({...turn}))]);
    setGameBoard([...initialBoard.map((row) => [...row])]);
    setActivePlayer('X');
  }

  for (const combination of WINNING_COMBINATIONS) {
    const first = gameBoard[combination[0].row][combination[0].column];
    const second = gameBoard[combination[1].row][combination[1].column];
    const third = gameBoard[combination[2].row][combination[2].column];

    if (first && first === second && first === third) {
      winner = first;
    }
  }
  let gameDraw;
  if (gameTurns.length === 9) {
    gameDraw = true;
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {winner || gameDraw ? <GameOver winner={winner} onRestart = {handleGameRestart}/> : undefined}
        <GameBoard board={gameBoard} onPlayerClick={handleOnPlayerClick} />
      </div>
      <GameLog turns={gameTurns} />
    </main>
  );
}

export default App;
