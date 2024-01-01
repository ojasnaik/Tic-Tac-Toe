export default function GameLog({ turns }) {
  return turns[0].square ? (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected at {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  ) : undefined;
}
