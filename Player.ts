import { Board } from './Board';
import { Cell, PlayerType } from './types';

export class Player {
    constructor(public name: string, public type: PlayerType, public symbol: Cell) {}

    getMove(board: Board): number {
        if (this.type === 'computer') {
            let validMoves = board.getValidMoves();
            return validMoves[Math.floor(Math.random() * validMoves.length)];
        }
        return -1;
    }
}
