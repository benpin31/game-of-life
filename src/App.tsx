import { ChooseSizeForm } from "./components/ChooseSizeForm";
import { Button } from "./components/System/Button";
import { GridRenderer } from "./components/GridRenderer";
import { ChooseSpeedForm } from "./components/ChooseSpeedForm";
import { useGameLoop } from "./hooks/useGameLoop";

function App() {
  const {
    isPaused,
    togglePause,
    setGridSize,
    grid,
    setGrid,
    resetGrid,
    handleChangeSpeed,
    speed,
  } = useGameLoop();

  return (
    <div className="flex w-screen h-screen">
      <GridRenderer grid={grid} setGrid={setGrid} />
      <div className="h-full w-96 p-4 bg-black flex flex-col gap-4 justify-between">
        <div className="flex flex-col gap-2">
          <ChooseSizeForm setGridSize={setGridSize} />
          <ChooseSpeedForm
            id="speed"
            label="Game speed"
            handleChangeSpeed={handleChangeSpeed}
            speed={speed}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Button onClick={togglePause}>
            {isPaused ? "Start Game" : "Pause Game"}
          </Button>
          <Button onClick={resetGrid}>Reset game</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
