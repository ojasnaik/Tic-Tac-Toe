export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winner && `${winner} won`}</p>
      <p>{!winner && "Game Draw"}</p>
      <p>
        <button onClick={onRestart}>restart game</button>
      </p>
    </div>
  );
}
