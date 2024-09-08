import { Cell } from './types';

export class Board {
    private rows: number = 6;
    private cols: number = 7;
    private grid: Cell[][];

    constructor() {
        this.grid = Array.from({ length: this.rows }, () => Array(this.cols).fill(null));
    }

    render(): void {
        console.clear();
        for (let row of this.grid) {
            console.log(row.map((cell) => (cell ? cell : '.')).join(' '));
        }
        console.log('0 1 2 3 4 5 6');
    }

    isValidMove(col: number): boolean {
        return col >= 0 && col < this.cols && this.grid[0][col] === null;
    }

    makeMove(col: number, symbol: Cell): boolean {
        if (!this.isValidMove(col)) return false;

        for (let row = this.rows - 1; row >= 0; row--) {
            if (this.grid[row][col] === null) {
                this.grid[row][col] = symbol;
                return true;
            }
        }
        return false;
    }

    getValidMoves(): number[] {
        return this.grid[0]
            .map((cell, col) => (cell === null ? col : -1))
            .filter((col) => col !== -1);
    }
}
