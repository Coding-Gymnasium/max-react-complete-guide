import React, { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputName, setInputName] = useState("");
  const [editButtonActive, setEditButtonActive] = useState(false);

  function handleEditClick() {
    setIsEditing(!isEditing);
    setEditButtonActive(!editButtonActive);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        ) : (
          <span className="player-name">{inputName ? inputName : name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>
        {editButtonActive ? "Save" : "Edit"}
      </button>
    </li>
  );
}
