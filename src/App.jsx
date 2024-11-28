import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

// 단순 헬퍼 함수
const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
  // GameBoard component에서 playerSymbol이 될 예정
};

function App() {
  // 현재 gameTurns가 가진 정보
  // [
  //  {row col index, 현재플레이어},
  //   + ...지난 턴2,
  //   + ...지난 턴1
  // ]

  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");
  // react에서는 최소한의 상태만을 사용하고,
  // => 최대한 많은 값을 파생 및 연산하도록 하는 것이 좋다.

  const activePlayer = deriveActivePlayer(gameTurns);

  const handleSelectSquare = (rowIndex, colIndex) => {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer,
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Hwiwon"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Heeeun"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
