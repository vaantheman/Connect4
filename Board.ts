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

    checkWin(symbol: Cell): boolean {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                if (
                    this.checkDirection(row, col, symbol, 0, 1) ||
                    this.checkDirection(row, col, symbol, 1, 0) ||
                    this.checkDirection(row, col, symbol, 1, 1) ||
                    this.checkDirection(row, col, symbol, 1, -1)
                ) {
                    return true;
                }
            }
        }
        return false;
    }

    checkDirection(
        row: number,
        col: number,
        symbol: Cell,
        rowDir: number,
        colDir: number
    ): boolean {
        let count = 0;

        for (let i = 0; i < 4; i++) {
            let r = row + i * rowDir;
            let c = col + i * colDir;

            if (r >= 0 && r < this.rows && c >= 0 && c < this.cols && this.grid[r][c] === symbol) {
                count++;
            } else {
                break;
            }
        }

        return count === 4;
    }

    isFull(): boolean {
        return this.getValidMoves().length === 0;
    }
}
