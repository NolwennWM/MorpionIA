let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;


function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function makeMove(index) {
    if (gameOver || board[index] !== '') return;
    
    
    board[index] = currentPlayer;
    updateCellUI(index);
    
    if (checkWinner(currentPlayer)) {
        updateResultUI(`${currentPlayer} a gagné !`); 
        gameOver = true;
    } else if (isBoardFull()) {
        updateResultUI("Match nul !");
        gameOver = true;
    } else {
        togglePlayer();
        if (!gameOver && currentPlayer === 'O') {
            makeComputerMove();
        }
    }
    }

function checkWinner(player, board2 = board) {
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // lignes horizontales
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // lignes verticales
        [0, 4, 8], [2, 4, 6]              // diagonales
    ];

    return winCombos.some(combo => combo.every(index => board2[index] === player));
}

function isBoardFull() {
    return board.every(cell => cell !== '');
    }


    function updateCellUI(index) {
        const cellElement = document.getElementsByClassName('cell')[index];
        cellElement.innerText = board[index];
    }
    
    function updateResultUI(message) {
        const resultElement = document.getElementById('result');
        resultElement.innerText = message;
    }

    function resetBoard() {
        board = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        gameOver = false;
        updateResultUI('');
        Array.from(document.getElementsByClassName('cell')).forEach(cell => cell.innerText = '');
    }





function makeComputerMove() {
    if (!gameOver) {
        let emptyCells = [];
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                emptyCells.push(i);
            }
        }

        let computerMove = -1;

       
        for (let i = 0; i < emptyCells.length; i++) {
            const tempBoard = [...board];
            tempBoard[emptyCells[i]] = 'O';
            if (checkWinner('O', tempBoard)) {
                computerMove = emptyCells[i];
                break;
            }
        }

      
        if (computerMove === -1) {
            for (let i = 0; i < emptyCells.length; i++) {
                const tempBoard = [...board];
                tempBoard[emptyCells[i]] = 'X';
                if (checkWinner('X', tempBoard)) {
                    computerMove = emptyCells[i];
                    break;
                }
            }
        }

        if (computerMove === -1) {
            const randomIndex = Math.floor(Math.random() * emptyCells.length);
            computerMove = emptyCells[randomIndex];
        }
        console.log(computerMove);
        setTimeout(() => {
            board[computerMove] = 'O';
            document.getElementsByClassName('cell')[computerMove].innerText = 'O';

            if (checkWinner('O')) {
                document.getElementById('result').innerText = `L'ordinateur a gagné !`;
                gameOver = true;
            } else if (isBoardFull()) {
                document.getElementById('result').innerText = "Match nul !";
                gameOver = true;
            } else {
                currentPlayer = 'X';
            }
        }, 1000);
    }
}












