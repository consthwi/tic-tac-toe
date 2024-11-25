import React, { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    // setIsEditing(!isEditing); // => true변경 예약
    // setIsEditing(!isEditing); // => true변경 예약
    // react에서 상태(state)를 변경할 때 해당 상태의 이전 값을 변경하는 경우,
    // 상태 업데이트 함수로 값을 내보내야 한다. // 미래 수행하기 때문에 ms단위의 차이가 존재
    setIsEditing((editing) => !editing);
    // 상태 업데이트 함수를 사용하면 상태변경된 값이 항상 최신인 것을 보장
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  // 삼항연산자를 사용하지 않을 경우
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input type="text" value={playerName} onChange={handleChange} required />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
