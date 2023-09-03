# rock-paper-scissor
The famous rock paper scissor game played agains computer
The goal:
The game consists of two palyers.
In our case, first player is the user and second is computer.
There will be 5 rounds and after each round the result will be logged out in as wone or lost.
Pseudocode:
To start with the numner of rounds for each game will be 5 (constant for now, later will try to include option of letting user decide this).(set round counter =5)
The user will be prompted to enter a choice.
As soon as the user clicks submits 
The playGame() function will be triggered.5 roundds (eahc round can be playRound() function).
playRound() function will consist of 
The user chooses eitehr of the three choices - "rock' , "paper' or "sciccor"
The conputer also choose one of these choices.
Both choices are outputed to console.log
based on the choices the winCount and lossCount counter will be updated.
As soon as the first round is over, the user will again prompted to choose one of the three choices.
the round counter will be reduced by at this point.
the user will be promted to choose agian as long as the round counter is >0
once the round counter reaches 0, the following will happen,
run the function finalResults() which will check if winCount is > lossCount and accodingly give the final results
run the reset () function whihc will:
reset the rounds counter, reset the winCount and lossCount and prompt user to choose again.
