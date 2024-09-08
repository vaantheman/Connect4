import { Board } from './Board';
import { Player } from './Player';

export class Game {
    private board: Board;
    private players: [Player, Player];

    constructor(player1: Player, player2: Player) {
        this.board = new Board();
        this.players = [player1, player2];
    }
}
