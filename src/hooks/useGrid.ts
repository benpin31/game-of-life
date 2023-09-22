import { useEffect, useState } from "react";
import { DEFAULT_NB_COLS, DEFAULT_NB_LINES, Grid } from "../models";
import { generateUniverse } from "../utils";

export const useGrid = () => {
  const [gridSize, setGridSize] = useState([DEFAULT_NB_LINES, DEFAULT_NB_COLS]);
  const [grid, setGrid] = useState<Grid | null>(null);

  useEffect(() => {
    setGrid(generateUniverse(gridSize[0], gridSize[1]));
  }, [gridSize]);

  return { gridSize, setGridSize, grid, setGrid };
};
