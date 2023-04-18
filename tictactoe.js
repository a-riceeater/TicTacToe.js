export default class TicTacToe {
    constructor() {
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]

        this.turn = 'X'
        this.winner = ''
    }

    clearBoard() {
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
    }

    reset() {
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]

        this.turn = 'X'
        this.winner = ''
    }

    isWin() {
        return true;
    }

    isDraw() {
        return false;
    }

    // impliemnt win/draw logic later
}

// Private logic functions
function __isWin(board) {

    let row1 = ''
    for (let i = 0; i < board[0].length; i++) {
        row1 += board[0][i]

        if (i == board[0].length - 1) {
            if (row1.toLowerCase() == 'xxx') return 'x'
            else if (row1.toLocaleLowerCase() == 'ooo') return 'o'
        }
    }
}

console.log(__isWin([
    ['x', 'x', 'x']
]))

function __isDraw(board) {

}