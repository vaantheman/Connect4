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
        console.log('1 2 3 4 5 6 7');
    }
}
