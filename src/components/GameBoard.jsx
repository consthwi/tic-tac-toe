// 객체나 배열은 오류와 버그를 방지하기 위해 불변성을 유지한다.
// => ...로 새로운 객체나 배열로 얕게 카피한다. (shallow copy)
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSelectSquare, turns }) => {
  let gameBoard = initialGameBoard.map((row) => [...row]);

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  // for (const turn of turns) {
  //   const square = turn.square;
  //   const player = turn.player;
  //   const row = square.row;
  //   const col = square.col;
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() => onSelectSquare(rowIndex, colIndex)}
                      disabled={playerSymbol !== null}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};

export default GameBoard;
