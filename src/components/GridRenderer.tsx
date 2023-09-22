import { MouseEvent } from "react";
import clsx from "clsx";
import { Grid } from "../models";
import { giveBirthToCell, toggleCell } from "../utils";
import { useMouthDown } from "../hooks/useMouthDown";

type GridRendererProps = {
  grid: Grid | null;
  setGrid: React.Dispatch<React.SetStateAction<Grid | null>>;
};

export const GridRenderer = ({ grid, setGrid }: GridRendererProps) => {
  const { isMouthDown } = useMouthDown();

  const onClickCell = (row: number, col: number) => {
    return (event: MouseEvent<HTMLElement>) => {
      event.preventDefault();
      setGrid((current) => {
        if (current) {
          return toggleCell(current, row, col);
        } else {
          return current;
        }
      });
    };
  };

  const onMouseEnterCell = (row: number, col: number) => {
    return () => {
      if (isMouthDown.current) {
        setGrid((current) => {
          if (current) {
            return giveBirthToCell(current, row, col);
          } else {
            return current;
          }
        });
      }
    };
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-yellow-500 overflow-auto whitespace-nowrap scroll-m-0">
      {grid?.map((gridRow, row) => (
        <div className="flex" key={row}>
          {gridRow.map((cell, col) => (
            <div
              key={col}
              onMouseEnter={onMouseEnterCell(row, col)}
              onMouseDown={onClickCell(row, col)}
              className={clsx(
                "h-6 w-6 cursor-pointer",
                cell
                  ? "bg-black"
                  : (row % 2 === 0 && col % 2 === 1) ||
                    (row % 2 === 1 && col % 2 === 0)
                  ? "bg-white"
                  : "bg-slate-200"
              )}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
