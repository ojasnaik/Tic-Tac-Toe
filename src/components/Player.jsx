import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {

    const [name, setName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditing(){
        setIsEditing(editing=>!editing);
    }

    function handlePlayerName(event){
        setName(event.target.value);
    }

    let playerName = (<span className="player-name">{name}</span>);
    if(isEditing){
        playerName = (<input type="text" required value={name} onChange={handlePlayerName} className="player-name"></input>);
    }

  return (
    <li className={isActive?'active':undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing?"Save":"Edit"}</button>
    </li>
  );
}
