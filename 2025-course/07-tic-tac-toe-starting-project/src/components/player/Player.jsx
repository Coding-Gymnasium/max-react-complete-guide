import React, { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState("");

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  let nameField = (
    <span className="player-name">{playerName ? playerName : name}</span>
  );

  if (isEditing) {
    nameField = (
      <input
        type="text"
        required
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
    );
  }

  return (
    <li>
      <span className="player">
        {nameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
