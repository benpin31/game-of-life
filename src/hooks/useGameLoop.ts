import { useCallback, useEffect, useRef, useState } from "react";
import { useGrid } from "./useGrid";
import { generateUniverse, transition } from "../utils";

export const useGameLoop = () => {
  const { gridSize, setGridSize, grid, setGrid } = useGrid();

  const timeRef = useRef<number>();
  const [isPaused, setIsPaused] = useState(true);

  // speed in step by second, the loop must be refresh every 1000/step millisecond
  const [speed, setSpeed] = useState(1);

  const startGame = useCallback(() => {
    if (!timeRef.current) {
      timeRef.current = setInterval(
        () =>
          setGrid((current) => {
            if (current) {
              return transition(current);
            } else {
              return current;
            }
          }),
        1000 / speed
      );
    }
  }, [setGrid, speed]);

  const pauseGame = useCallback(() => {
    clearTimeout(timeRef.current);
    timeRef.current = undefined;
  }, []);

  useEffect(() => {
    pauseGame();
    if (!isPaused) {
      startGame();
    }
  }, [isPaused, startGame, pauseGame, speed]);

  const resetGrid = () => {
    setGrid(generateUniverse(gridSize[0], gridSize[1]));
    setIsPaused(true);
  };

  const togglePause = () => setIsPaused((current) => !current);

  const handleChangeSpeed = (newSpeed: number) => {
    setSpeed(newSpeed);
  };

  return {
    isPaused,
    togglePause,
    setGridSize,
    grid,
    setGrid,
    resetGrid,
    handleChangeSpeed,
    speed,
  };
};
