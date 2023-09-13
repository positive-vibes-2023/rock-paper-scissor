const buttons = document.querySelectorAll('.but');
const resetButton = document.querySelector('.reset-but');

let totalPlayerScore = 0;
let totalComputerScore = 0;

function getComputerChoice() {
	let number = Math.floor(Math.random() * 3);
	choices = ['rock', 'paper', 'scissor'];
	const computerChoice = choices[number];
	return computerChoice;
}

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		const playerChoice = button.getAttribute('data-text');
		const computerChoice = getComputerChoice();
		const choiceList = [playerChoice, computerChoice];
		console.log(`computer chose : ${computerChoice}`);
		console.log(`You chose : ${playerChoice}`);
		console.log(`the list of choices :${choiceList}`);
		game(choiceList[0], choiceList[1]);
	});
});

function game(playerChoice, computerChoice) {
	var playerScore;
	var computerScore;

	//if player chooses rock
	if (playerChoice === 'rock') {
		if (computerChoice === 'rock') {
			playerScore = 0;
			computerScore = 0;
			totalPlayerScore = totalPlayerScore + playerScore;
			totalComputerScore = totalComputerScore + computerScore;
			console.log(`ITS A DRAW !! > YOUR SCORE= ${playerScore} `);
		} else if (computerChoice === 'paper') {
			playerScore = -1;
			computerScore = 1;
			totalPlayerScore = totalPlayerScore + playerScore;
			totalComputerScore = totalComputerScore + computerScore;
			console.log(`OOPS ! YOU LOST  > YOUR SCORE= ${playerScore} `);
		} else {
			playerScore = +1;
			computerScore = -1;
			totalPlayerScore = totalPlayerScore + playerScore;
			totalComputerScore = totalComputerScore + computerScore;
			console.log(`SUPERR !! YOU WON ! > YOUR SCORE= ${playerScore} `);
		}
	}
	//if player chooses paper
	else if (playerChoice === 'paper') {
		if (computerChoice === 'rock') {
			playerScore = 1;
			computerScore = -1;
			totalPlayerScore = totalPlayerScore + playerScore;
			totalComputerScore = totalComputerScore + computerScore;
			console.log(`SUPERR !! YOU WON ! > YOUR SCORE= ${playerScore} `);
		} else if (computerChoice === 'paper') {
			playerScore = 0;
			computerScore = 0;
			totalPlayerScore = totalPlayerScore + playerScore;
			totalComputerScore = totalComputerScore + computerScore;
			console.log(`ITS A DRAW !! > YOUR SCORE= ${playerScore} `);
		} else {
			var playerScore = -1;
			var computerScore = 1;
			totalPlayerScore = totalPlayerScore + playerScore;
			totalComputerScore = totalComputerScore + computerScore;
			console.log(`OOPS ! YOU LOST  > YOUR SCORE= ${playerScore} `);
		}
	}
	// finally if player chooses scissor
	else {
		if (computerChoice === 'rock') {
			playerScore = -1;
			computerScore = 1;
			totalPlayerScore = totalPlayerScore + playerScore;
			totalComputerScore = totalComputerScore + computerScore;
			console.log(`OOPS ! YOU LOST  > YOUR SCORE= ${playerScore} `);
		} else if (computerChoice === 'paper') {
			playerScore = 1;
			computerScore = -1;
			totalPlayerScore = totalPlayerScore + playerScore;
			totalComputerScore = totalComputerScore + computerScore;
			console.log(`SUPERR !! YOU WON ! > YOUR SCORE= ${playerScore} `);
		} else {
			playerScore = 0;
			computerScore = 0;
			totalPlayerScore = totalPlayerScore + playerScore;
			totalComputerScore = totalComputerScore + computerScore;
			console.log(`ITS A DRAW !! > YOUR SCORE= ${playerScore} `);
		}
	}

	playerScore = 0;
	computerScore = 0;
	declareWinner();
}

//reset the game and declare the winner
function declareWinner() {
	if (totalComputerScore === 5) {
		console.log(
			'You have saved the mankind ! MAchines have lost. We have won !! \n Press reset button to start a new game.'
		);
		resetButton.addEventListener('click', (e) => {
			playerScore = 0;
			computerScore = 0;
			totalPlayerScore = 0;
			totalComputerScore = 0;
		});
		return;
	} else if (totalPlayerScore === 5) {
		console.log(
			'Machines won this battle. We have to try harder to save the mankind ! /n Press reset button to start a new game.'
		);
		resetButton.addEventListener('click', (e) => {
			playerScore = 0;
			computerScore = 0;
			totalPlayerScore = 0;
			totalComputerScore = 0;
		});
		return;
	} else {
		console.log(
			`Your current score is = ${totalPlayerScore} \n The Computer score is = ${totalComputerScore}. \ Remember, you need a score of 5 to win this round. Keep trying. Choose rock , paper or scissor !`
		);
	}
}
