export default class Array2D<T> {
  private arr: T[] = []

  public constructor(
    private readonly rows: number,
    private readonly cols: number,
  ) {
    this.arr = Array(rows * cols);
  }

  public fill(value: T) {
    this.arr = this.arr.fill(value);
  }

  public setElement(row: number, col: number, value: T): boolean {
    if (row < this.rows && col < this.cols) {
      this.arr[this.rows * row + col] = value;
      return true;
    }
    return false;
  }

  public getElement(row: number, col: number): T | undefined {
    if (row < this.rows && col < this.cols) {
      return this.arr[this.rows * row + col];
    }
    return undefined;
  }

  public isContainedInRow(row: number, value: T) {
  }
}
