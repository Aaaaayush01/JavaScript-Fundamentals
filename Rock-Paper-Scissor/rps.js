 const scores = JSON.parse(localStorage.getItem('scores')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

        function playGame(playerMove) {
            const computerMove = pickCompMove();
            let result = '';

            if (playerMove === 'scissor') {
                if (computerMove === 'Rock') {
                    result = 'You Lost';
                }
                else if (computerMove === 'Paper') {
                    result = 'You Won';
                }
                else if (computerMove === 'Scissor') {
                    result = 'Tie';
                }
            }

            else if (playerMove === 'paper') {
                if (computerMove === 'Rock') {
                    result = 'You Won';
                }
                else if (computerMove === 'Paper') {
                    result = 'Tie';
                }
                else if (computerMove === 'Scissor') {
                    result = 'You Lost';
                }
            }
            else if (playerMove === 'rock') {
                if (computerMove === 'Rock') {
                    result = 'Tie';
                }
                else if (computerMove === 'Paper') {
                    result = 'You Lost';
                }
                else if (computerMove === 'Scissor') {
                    result = 'You Won';
                }
            }
            
            if (result === 'You Won') {
                scores.wins += 1;
            }
            else if (result === 'You Lost') {
                scores.losses += 1;
            }
            else if (result === 'Tie') {
                scores.ties += 1;
            }

            localStorage.setItem('scores', JSON.stringify(scores));

            alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins : ${scores.wins}, Losses : ${scores.losses}, Ties : ${scores.ties}`
            );
        }
        function pickCompMove() {
            const randomNum = (Math.random());
            let computerMove = '';
            if (randomNum > 0 && randomNum < 1 / 3) {
                computerMove = 'Rock';
            }
            else if (randomNum > 1 / 3 && randomNum < 2 / 3) {
                computerMove = 'Paper';
            }
            else if (randomNum > 2 / 3 && randomNum < 1) {
                computerMove = 'Scissor';
            }
            return computerMove;
        }