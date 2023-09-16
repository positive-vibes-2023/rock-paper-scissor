// -----------------------------
// query document for relevant variables we will be needing.
const buttons = document.querySelectorAll('.but');
const resetButton = document.querySelector('.reset-but');
const playerChose = document.querySelector('.player-chose');
const computerChose = document.querySelector('.computer-chose');
const warning = document.querySelector('.warning');
const computerPrompt = document.querySelector('.computer-prompt');
const computerButtons = document.querySelectorAll('.computer-but');
const computerRock = document.querySelector('.computer-rock');
const computerPaper = document.querySelector('.computer-paper');
const computerScissor = document.querySelector('.computer-scissor');
const speedUp = document.querySelector('.speed-up-button');
const slowDown = document.querySelector('.slow-down-button');
const allButtons = document.querySelectorAll('button');
const playerCurrentScore = document.querySelector('.player-score');
const computerCurrentScore = document.querySelector('.computer-score');
const finalResult = document.querySelector('.final-result');
const infoButton = document.querySelector('.info-but');
const rules = document.querySelector('.rules');
const arena = document.querySelector('.arena');
const playerContainer = document.querySelector('.player-container');
const computerContainer = document.querySelector('.computer-container');
<<<<<<< HEAD
const scoreBoard = document.querySelector('.score-board');
=======

>>>>>>> 1307158 (fix bugs)
// --------------------------------------------------------------------
// declare variables

let totalPlayerScore = 0;
let totalComputerScore = 0;
let firstDelay = 200;
let secondDelay = 2000;
let buttonState = true;

// -------------------------------------------------
// define functions

function getComputerChoice() {
	let number = Math.floor(Math.random() * 3);
	choices = ['rock', 'paper', 'scissor'];
	const computerChoice = choices[number];
	return computerChoice;
}
function declareWinner() {
	if (totalComputerScore === 5) {
		playerChose.style.display = 'none';
		computerChose.style.display = 'none';
		warning.style.display = 'none';

		buttons.forEach((button) => {
			button.classList.remove('but-active');
		});
		computerButtons.forEach((button) => {
			button.classList.remove('computer-but-active');
		});
		buttons.forEach((button) => {
			button.disabled = true;
		});

		finalResult.innerText =
			'Machines won this battle. We have to try harder to save the mankind ! \n Press reset button to start a new game.';
<<<<<<< HEAD
		finalResult.style.textAlign = 'center';
=======
>>>>>>> 1307158 (fix bugs)

		playerCurrentScore.innerText = `${totalPlayerScore}`;
		computerCurrentScore.innerText = `${totalComputerScore}`;

		console.log(
			'Machines won this battle. We have to try harder to save the mankind ! \n Press reset button to start a new game.'
		);
<<<<<<< HEAD
		resetButton.disabled = false;
		infoButton.disabled = false;
=======
>>>>>>> 1307158 (fix bugs)
		return;
	} else if (totalPlayerScore === 5) {
		playerChose.style.display = 'none';
		computerChose.style.display = 'none';
		warning.style.display = 'none';

		buttons.forEach((button) => {
			button.classList.remove('but-active');
		});
		computerButtons.forEach((button) => {
			button.classList.remove('computer-but-active');
		});
		buttons.forEach((button) => {
			button.disabled = true;
		});

		finalResult.innerText =
			'You have saved the mankind ! MAchines have lost. We have won !! \n Press reset button to start a new game.';
<<<<<<< HEAD
		finalResult.style.textAlign = 'center';
=======
>>>>>>> 1307158 (fix bugs)
		playerCurrentScore.innerText = `${totalPlayerScore}`;
		computerCurrentScore.innerText = `${totalComputerScore}`;

		console.log(
			'You have saved the mankind ! MAchines have lost. We have won !! \n Press reset button to start a new game.'
		);
<<<<<<< HEAD
		resetButton.disabled = false;
		infoButton.disabled = false;
=======
>>>>>>> 1307158 (fix bugs)
		return;
	} else {
		setTimeout(function () {
			computerPrompt.innerText =
				'Machines are waiting for Humans to choose a weapon';
		}, firstDelay);
		setTimeout(() => {
			playerChose.style.display = 'none';
			computerChose.style.display = 'none';
			warning.style.display = 'none';

			buttons.forEach((button) => {
				button.classList.remove('but-active');
			});
			computerButtons.forEach((button) => {
				button.classList.remove('computer-but-active');
			});
			allButtons.forEach((button) => {
				button.disabled = false;
			});
		}, secondDelay);
		playerCurrentScore.innerText = `${totalPlayerScore}`;
		computerCurrentScore.innerText = `${totalComputerScore}`;
		finalResult.innerText = `Remember, you need a score of 5 to win this round. Keep trying. Choose rock , paper or scissor !`;
<<<<<<< HEAD
		finalResult.style.textAlign = 'center';
=======
>>>>>>> 1307158 (fix bugs)
		console.log(
			`Your current score is = ${totalPlayerScore} \n The Computer score is = ${totalComputerScore}. \ Remember, you need a score of 5 to win this round. Keep trying. Choose rock , paper or scissor !`
		);
	}
}
function game(playerChoice, computerChoice) {
	var playerScore;
	var computerScore;
	resultsList = ['ITS A DRAW !!', 'OOPS ! YOU LOST', 'SUPERR !! YOU WON !'];

	//if player chooses rock
	if (playerChoice === 'rock') {
		if (computerChoice === 'rock') {
			playerScore = 0;
			computerScore = 0;
			totalPlayerScore = totalPlayerScore + playerScore;
			totalComputerScore = totalComputerScore + computerScore;
			warning.innerText = resultsList[0];

			console.log(resultsList[0]);
		} else if (computerChoice === 'paper') {
			playerScore = -1;
			computerScore = 1;
			totalPlayerScore = totalPlayerScore + playerScore;
			totalComputerScore = totalComputerScore + computerScore;
			warning.innerText = resultsList[1];

			console.log(resultsList[1]);
		} else {
			playerScore = +1;
			computerScore = -1;
			totalPlayerScore = totalPlayerScore + playerScore;
			totalComputerScore = totalComputerScore + computerScore;
			warning.innerText = resultsList[1];

			console.log(resultsList[2]);
		}
	}
	//if player chooses paper
	else if (playerChoice === 'paper') {
		if (computerChoice === 'rock') {
			playerScore = 1;
			computerScore = -1;
			totalPlayerScore = totalPlayerScore + playerScore;
			totalComputerScore = totalComputerScore + computerScore;
			warning.innerText = resultsList[1];

			console.log(`SUPERR !! YOU WON ! > YOUR SCORE= ${playerScore} `);
		} else if (computerChoice === 'paper') {
			playerScore = 0;
			computerScore = 0;
			totalPlayerScore = totalPlayerScore + playerScore;
			totalComputerScore = totalComputerScore + computerScore;
			warning.innerText = resultsList[0];

			console.log(`ITS A DRAW !! > YOUR SCORE= ${playerScore} `);
		} else {
			var playerScore = -1;
			var computerScore = 1;
			totalPlayerScore = totalPlayerScore + playerScore;
			totalComputerScore = totalComputerScore + computerScore;
			warning.innerText = resultsList[1];

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
			warning.innerText = resultsList[1];

			console.log(`OOPS ! YOU LOST  > YOUR SCORE= ${playerScore} `);
		} else if (computerChoice === 'paper') {
			playerScore = 1;
			computerScore = -1;
			totalPlayerScore = totalPlayerScore + playerScore;
			totalComputerScore = totalComputerScore + computerScore;
			warning.innerText = resultsList[2];

			console.log(`SUPERR !! YOU WON ! > YOUR SCORE= ${playerScore} `);
		} else {
			playerScore = 0;
			computerScore = 0;
			totalPlayerScore = totalPlayerScore + playerScore;
			totalComputerScore = totalComputerScore + computerScore;
			warning.innerText = resultsList[0];

			console.log(`ITS A DRAW !! > YOUR SCORE= ${playerScore} `);
		}
	}

	playerScore = 0;
	computerScore = 0;

	declareWinner();
}

function resumeGame() {
	allButtons.forEach((button) => {
		button.disabled = false;
	});

	rules.style.display = 'none';
	computerContainer.style.display = 'flex';
	playerContainer.style.display = 'flex';
	warning.style.display = 'flex';
	playerCurrentScore.style.display = 'flex';
	computerCurrentScore.style.display = 'flex';
	playerChose.style.display = 'flex';
	playerChose.innerText = '';
	computerChose.style.display = 'flex';
<<<<<<< HEAD
	computerChose.innerText = '';
	warning.innerText = '';
	computerPrompt.style.display = 'flex';
	finalResult.style.display = 'flex';
	scoreBoard.style.display = 'flex';

	finalResult.innerText = 'Game resumed.';
	computerPrompt.innerText =
		'Machines are waiting for humans to choose a weapon!';
	buttonState = true;
}
function handleResetButton() {
	console.log('reset button clicked');
=======

	computerPrompt.style.display = 'flex';

	finalResult.innerText = 'Final Results will be displayed here.';
	buttonState = !buttonState;
}
function handleResetButton() {
>>>>>>> 1307158 (fix bugs)
	allButtons.forEach((button) => {
		button.disabled = false;
	});

	totalPlayerScore = 0;
	totalComputerScore = 0;
	playerCurrentScore.innerText = '0';
	computerCurrentScore.innerText = '0';
	rules.style.display = 'none';
<<<<<<< HEAD
	finalResult.style.display = 'flex';
	scoreBoard.style.display = 'flex';
	computerContainer.style.display = 'flex';
	playerContainer.style.display = 'flex';
	warning.style.display = 'none';
	playerCurrentScore.style.display = 'flex';
	computerCurrentScore.style.display = 'flex';
	playerChose.style.display = 'none';
	computerChose.style.display = 'none';
	computerPrompt.style.display = 'flex';
	speedUp.innerText = 'Click to speed up the game';
	slowDown.innerText = 'Click to slow down the game';
	firstDelay = 200;
	let secondDelay = 2000;
	let buttonState = true;
	finalResult.innerText = 'Final Results will be displayed here.';
}

function handleSpeedUpBUtton() {
	console.log('speed up button clicked');
	slowDown.disabled = false;
	slowDown.innerText = 'Click to slow down the game';
	if (secondDelay <= 500) {
		speedUp.innerText = 'Thats the fastest you can go!';
		speedUp.disabled = true;
	} else {
		speedUp.innerText = 'Click to speed up the game';
		firstDelay = firstDelay - 50;
		secondDelay = secondDelay - 300;
		speedUp.classList.add('speed-up-button-clicked');
		setTimeout(function () {
			speedUp.classList.remove('speed-up-button-clicked');
		}, 400);
	}
}
function handleSlowDownButton() {
	console.log('slow down button clicked');
	speedUp.disabled = false;
	speedUp.innerText = 'Click to speed up the game';

	if (firstDelay >= 550 || secondDelay >= 6900) {
		slowDown.innerText = 'Thats the fastest you can go!';
		slowDown.disabled = true;
	} else {
		slowDown.innerText = 'Click to slow down the game';
		firstDelay = firstDelay + 50;
		secondDelay = secondDelay + 300;
		slowDown.classList.add('speed-up-button-clicked');
		setTimeout(function () {
			slowDown.classList.remove('speed-up-button-clicked');
		}, 400);
	}
}
=======
	computerContainer.style.display = 'flex';
	playerContainer.style.display = 'flex';
	warning.style.display = 'flex';
	playerCurrentScore.style.display = 'flex';
	computerCurrentScore.style.display = 'flex';
	playerChose.style.display = 'flex';
	computerChose.style.display = 'flex';

	computerPrompt.style.display = 'flex';

	finalResult.innerText = 'Final Results will be displayed here.';
	buttonState = !buttonState;
}
>>>>>>> 1307158 (fix bugs)
// -------------------------------------------------------------------------
// set event listeners
infoButton.addEventListener('click', (e) => {
	if (buttonState === true) {
		console.log('button state is true');
		rules.style.display = 'flex';
		computerContainer.style.display = 'none';
		playerContainer.style.display = 'none';
		warning.style.display = 'none';
		playerCurrentScore.style.display = 'none';
		computerCurrentScore.style.display = 'none';
		playerChose.style.display = 'none';
		computerChose.style.display = 'none';

<<<<<<< HEAD
		scoreBoard.style.display = 'none';

		computerPrompt.style.display = 'flex';
		computerPrompt.innerText = 'Game Paused !';
		finalResult.style.display = 'flex';
=======
		computerPrompt.style.display = 'none';
		computerPrompt.innerText = 'Game Paused !';

>>>>>>> 1307158 (fix bugs)
		finalResult.innerText =
			'Game is currently paused. Press Reset  or Info button to resume';
		console.log(buttonState);
		buttonState = !buttonState;
		console.log(buttonState);
	} else {
		console.log('we are in else loop that will trigger resumeGame function');
		resumeGame();
	}
});
<<<<<<< HEAD
resetButton.addEventListener('click', () => {
	handleResetButton();
});
speedUp.addEventListener('click', () => handleSpeedUpBUtton());
slowDown.addEventListener('click', () => handleSlowDownButton());

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		allButtons.forEach((b) => {
			b.disabled = true;
=======

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		allButtons.forEach((button) => {
			button.disabled = true;
>>>>>>> 1307158 (fix bugs)
		});
		playerChose.style.display = 'block';
		computerChose.style.display = 'block';
		warning.style.display = 'block';

		computerPrompt.style.display = 'none';
		const playerChoice = button.getAttribute('data-text');
		const computerChoice = getComputerChoice();

		const choiceList = [playerChoice, computerChoice];
		button.classList.add('but-active');
		if (computerChoice === 'rock') {
			computerRock.classList.add('computer-but-active');
		} else if (computerChoice === 'paper') {
			computerPaper.classList.add('computer-but-active');
		} else {
			computerScissor.classList.add('computer-but-active');
		}

<<<<<<< HEAD
		if (totalPlayerScore >= 5 || totalComputerScore >= 5) {
			warning.innerText = 'Ended ! Please press reset to start new game.';
			console.log('trying to activate reset button');
			resetButton.disabled = false;
			console.log('the resetbutton should be now activated');
			infoButton.disabled = false;
=======
		if ((totalPlayerScore) => -5 || totalComputerScore >= 5) {
			buttons.forEach((button) => {
				button.disabled = true;
				warning.innerText = 'Ended ! Please press reset to start new game.';
				return;
			});
>>>>>>> 1307158 (fix bugs)
		}
		playerChose.innerText = `You chose : ${playerChoice}`;
		computerChose.innerText = `Computer chose : ${computerChoice}`;
		console.log(`computer chose : ${computerChoice}`);
		console.log(`You chose : ${playerChoice}`);
		console.log(`the list of choices :${choiceList}`);
		game(choiceList[0], choiceList[1]);
	});
});
<<<<<<< HEAD
=======

resetButton.addEventListener('click', handleResetButton());
>>>>>>> 1307158 (fix bugs)
