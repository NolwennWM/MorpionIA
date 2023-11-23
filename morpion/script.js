let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;
const listGames = [];
let game = {choice:[], victory:false};
let n = 0;
let wrongChoice = [];


function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function makeMove(index) {
    if (gameOver || board[index] !== '') return;
    
    
    board[index] = currentPlayer;
    // IA
    game.choice.push({player:currentPlayer, position:index});
    updateCellUI(index);
    n++
    if (checkWinner(currentPlayer)) {
        updateResultUI(`${currentPlayer} a gagné !`); 
        game.victory = false;
        listGames.push(game);
        gameOver = true;
    } else if (isBoardFull()) {
        updateResultUI("Match nul !");
        game.victory = false;
        listGames.push(game);
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
        n=0
        game = {choice:[], victory:false};
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

        let computerMove = getGoodChoice();
        console.log(computerMove);
        
        // for (let i = 0; i < emptyCells.length; i++) {
        //     const tempBoard = [...board];
        //     tempBoard[emptyCells[i]] = 'O';
        //     if (checkWinner('O', tempBoard)) {
        //         computerMove = emptyCells[i];
        //         break;
        //     }
        // }

      
        // if (computerMove === -1) {
        //     for (let i = 0; i < emptyCells.length; i++) {
        //         const tempBoard = [...board];
        //         tempBoard[emptyCells[i]] = 'X';
        //         if (checkWinner('X', tempBoard)) {
        //             computerMove = emptyCells[i];
        //             break;
        //         }
        //     }
        // }
        console.log(computerMove);

        if (computerMove === null) {
            computerMove = getRandomCase(emptyCells);
        }
        console.log(computerMove);
        setTimeout(() => {
            board[computerMove] = 'O';
            // IA
            game.choice.push({player:"O", position:computerMove});
            document.getElementsByClassName('cell')[computerMove].innerText = 'O';
            n++
            if (checkWinner('O')) {
                document.getElementById('result').innerText = `L'ordinateur a gagné !`;
                game.victory = true;
                listGames.push(game);
                gameOver = true;
            } else if (isBoardFull()) {
                game.victory = false;
                document.getElementById('result').innerText = "Match nul !";
                listGames.push(game);
                gameOver = true;
            } else {
                currentPlayer = 'X';
            }
        }, 1000);
    }
}

function getRandomCase(possibility)
{
    const randomIndex = Math.floor(Math.random() * possibility.length);
    let index = possibility[randomIndex];
    if(wrongChoice.includes(index) && possibility.length != wrongChoice.length)
    {
        index = getRandomCase(possibility);
    }
    return index;
}

function getGoodChoice()
{
    wrongChoice = [];
    console.log("nb", n);
    position = null;
    for(let oldGame of listGames)
    {
        if(!oldGame.victory)
        {
            if(oldGame.choice[n] && !wrongChoice.includes(oldGame.choice[n].position))
            {
                wrongChoice.push(oldGame.choice[n].position);
            }
            continue;
        }
        
        console.log(!oldGame.victory);
        let i;
        for(i =0; i< n; i++)
        {
            console.log(i,game.choice[i] , oldGame.choice[i]);
            if(!isSamePosition(game.choice[i], oldGame.choice[i])) break;
            console.log(oldGame,oldGame.choice[i+1], !oldGame.choice[i+1]);
        }
        if(!oldGame.choice[i])break;
        console.log(board[i],board[i] === "");
        position = oldGame.choice[i].position;
        if(board[position] !== "") continue;
        console.log(oldGame.choice[i].position);
        
    }
    if(wrongChoice.includes(position))
    position = null;
    return position;
}

function isSamePosition(c1, c2)
{
    return c1.position === c2.position && c1.player === c2.player;
}






