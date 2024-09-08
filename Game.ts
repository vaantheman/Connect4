import { Board } from './Board';
import { Player } from './Player';

export class Game {
    private board: Board;
    private players: [Player, Player];
    private currentPlayerIndex: number = 0;

    constructor(player1: Player, player2: Player) {
        this.board = new Board();
        this.players = [player1, player2];
    }

    start(): void {
        let winner: Player | null = null;

        while (true) {
            this.board.render();
            let currentPlayer = this.players[this.currentPlayerIndex];

            let col: number;
            if (currentPlayer.type === 'human') {
                col = this.promptMove(currentPlayer);
            } else {
                col = currentPlayer.getMove(this.board);
                console.log(`${currentPlayer.name} (Computer) chose column ${col}`);
            }

            if (this.board.makeMove(col, currentPlayer.symbol)) {
                if (this.board.checkWin(currentPlayer.symbol)) {
                    winner = currentPlayer;
                    break;
                }

                if (this.board.isFull()) {
                    break;
                }

                this.currentPlayerIndex = 1 - this.currentPlayerIndex;
            } else {
                console.log('Invalid move. Try again.');
            }
        }

        this.board.render();
        if (winner) {
            console.log(`${winner.name} wins!`);
        } else {
            console.log("It's a tie!");
        }
    }

    promptMove(player: Player): number {
        const readlineSync = require('readline-sync');
        let col: number;
        do {
            col = readlineSync.questionInt(
                `${player.name} (${player.symbol}), choose a column (0-6): `
            );
        } while (!this.board.isValidMove(col));
        return col;
    }
}
