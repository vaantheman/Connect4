import { Game } from './Game';
import { Player } from './Player';

const player1 = new Player('Vaan', 'human', 'R');
const player2 = new Player('Ai', 'computer', 'Y');

const game = new Game(player1, player2);
game.start();
