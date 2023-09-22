import { Grid } from "./models";

export const string2Number = (s: string) => {
  return s.length > 0 ? Number(s) : 0;
};

export const generateUniverse = (nbLine: number, nbCol: number): Grid => {
  return new Array(nbLine).fill(new Array(nbCol).fill(false));
};

export const toggleCell = (
  universe: Grid,
  noLine: number,
  noCol: number
): Grid => {
  return universe.map((universeLine, indexLine) => {
    if (indexLine === noLine) {
      return universeLine.map((cell, indexCol) => {
        if (indexCol === noCol) {
          return !cell;
        }
        return cell;
      });
    } else {
      return universeLine;
    }
  });
};

export const giveBirthToCell = (
  universe: Grid,
  noLine: number,
  noCol: number
) => {
  return universe.map((universeLine, indexLine) => {
    if (indexLine === noLine) {
      return universeLine.map((cell, indexCol) => {
        if (indexCol === noCol) {
          return true;
        }
        return cell;
      });
    } else {
      return universeLine;
    }
  });
};

const modulo = (n: number, mod: number): number => {
  return ((n % mod) + mod) % mod;
};

export const getLivingSiblingNumber = (
  universe: Grid,
  noLine: number,
  noCol: number
): number => {
  const nbLine = universe.length;
  const nbCol = universe[0].length;

  const topLine = modulo(noLine - 1, nbLine);
  const centerLine = noLine;
  const bottomLine = modulo(noLine + 1, nbLine);

  const leftCol = modulo(noCol - 1, nbCol);
  const centerCol = noCol;
  const rightCol = modulo(noCol + 1, nbCol);

  return (
    Number(universe[topLine][leftCol]) +
    Number(universe[topLine][centerCol]) +
    Number(universe[topLine][rightCol]) +
    Number(universe[centerLine][leftCol]) +
    Number(universe[centerLine][rightCol]) +
    Number(universe[bottomLine][leftCol]) +
    Number(universe[bottomLine][centerCol]) +
    Number(universe[bottomLine][rightCol])
  );
};

export const transition = (universe: Grid): Grid => {
  return universe.map((universeLine, indexLine) => {
    return universeLine.map((cell, indexCol) => {
      const siblingState = getLivingSiblingNumber(
        universe,
        indexLine,
        indexCol
      );
      if (siblingState === 3) {
        return true;
      } else if (siblingState === 2) {
        return cell;
      } else {
        return false;
      }
    });
  });
};
