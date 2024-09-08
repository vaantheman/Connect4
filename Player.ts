import { Board } from './Board';
import { Cell, PlayerType } from './types';

export class Player {
    constructor(public name: string, public type: PlayerType, public symbol: Cell) {}
}
