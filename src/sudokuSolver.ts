import Array2D from './util/array2D';

export class SudokuSolver {
  private puzzle = new Array2D<number>(9, 9);
}

export function hasZeroSpaces(puzzle: number[]): boolean {
  return puzzle.some(val => val === 0);
}

export function validNumbers(startRow: number, startCol: number): number[] {
  // const numbers: number[] = []
}

export function containedInRow(row: number, value: number): boolean {

}
