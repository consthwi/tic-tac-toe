import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Hwiwon" symbol="X" />
          <Player name="Heeeun" symbol="O" />
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
