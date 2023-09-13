//define function to play rock paper scissor round.
function game(playerChoice, computerChoice) {
	getChoices();
	//define logic to decide who wings- computer you the user.
	//if player chooses rock
	if (playerChoice === 'rock') {
		if (computerChoice === 'rock') {
			var playerScore = 0;
			var computeScore = 0;
		} else if (computerChoice === 'paper') {
			var playerScore = -1;
			var computerScore = 1;
		} else {
			var playerScore = +1;
			var computerScore = -1;
		}
	}

	//if player chooses paper
	else if (playerChoice === 'paper') {
		if (computerChoice === 'rock') {
			var playerScore = 1;
			var computeScore = -1;
		} else if (computerChoice === 'paper') {
			var playerScore = 0;
			var computerScore = 0;
		} else {
			var playerScore = -1;
			var computerScore = 1;
		}
	}

	// finally if player chooses scissor
	else playerChoice === 'scissor';
	{
		if (computerChoice === 'rock') {
			var playerScore = -1;
			var computerScore = 1;
		} else if (computerChoice === 'paper') {
			var playerScore = 1;
			var computerScore = -1;
		} else {
			var playerScore = 0;
			var computerScore = 0;
		}
	}
	playerScore = 0;
	computerScore = 0;
}
