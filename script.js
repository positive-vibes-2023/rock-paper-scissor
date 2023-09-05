
//define function to get computer choices randomly.

function getComputerChoice(){
    let number=Math.floor(Math.random()*3)+1;
    if (number===1){
        number="rock";
    }
    else if (number===2){
        number="paper";
    }
    else{
        number="scissor"
    }
    return number;
}

//define function to play rock paper scissor round.

function game(playerChoice,computerChoice){
    console.log(computerChoice);
    
        //if player chooses rock
    if (playerChoice==='rock'){
        if(computerChoice==="rock"){
            playerScore=0;
            computeScore=0;
            foulEntry=0;
        }
        else if (computerChoice==="paper"){
            playerScore= -1;
            computerScore=1;
            foulEntry=0;
        }
        else {
        playerScore=+1;
        computerScore=-1;
        foulEntry=0;
        }
    }
        //if player chooses paper
   else if (playerChoice==='paper'){
        if(computerChoice==="rock"){
            playerScore=1;
            computeScore=-1;
            foulEntry=0;
        }
        else if (computerChoice==="paper"){
            playerScore= 0;
            computerScore=0;
            foulEntry=0;
        }
        else {
            playerScore=-1;
            computerScore=1;
            foulEntry=0;
        }
    }
            // finally if player chooses scissor
    else if (playerChoice==='scissor'){
        if(computerChoice==="rock"){
            playerScore=-1;
            computerScore=1;
            foulEntry=0;
        }
        else if (computerChoice==="paper"){
            playerScore= 1;
            computerScore=-1;
            foulEntry=0;
        }
        else {
        playerScore=0;
        computerScore=0;
        foulEntry=0;
        }
    }
    else {
        prompt("you did not select either rock , paper or scissor ! Please select only one of these weapon.");
        playerScore=0;
        computerScore=0;
        foulEntry=1;
    }
    
}

//define function to play five rounds

function playRound(){
    //declare local variables totalPlaterScore and totalComputerScore and update them in each round.
    var totalPlayerScore=0;
    var totalComputerScore=0;
    var totalFoulEntries=0;

    //run the for loop for 5 times.

    for(let round=1;round<=5;round++){
        console.log(`starting total count is now: ${totalPlayerScore}`);
        let playerChoice= prompt("please select either rock paper or scissor.");
        game(playerChoice,getComputerChoice());
        if (foulEntry===1){
            totalFoulEntries++;
            prompt(`You seams to be not interested in this game. This game will be terminated after ${3-totalFoulEntries} more wrong entries !`);
           
            if (totalFoulEntries==3){
                prompt ("You exceeded maximum attempts. The game will now end")
                return
            }
        }
        
        totalPlayerScore=playerScore+totalPlayerScore;
        totalComputerScore=computerScore+totalComputerScore;
        
            
        console.log(`updated total win till now are: ${totalPlayerScore}`);
    }
    //check who won and give result in prompt.
  
    if(totalComputerScore>totalPlayerScore){
        prompt("YOU LOST ! Machine are winning the battle !!!");
        }
    else if (totalComputerScore===totalPlayerScore){
        prompt("Its a Draw! Well this not much fun.. Awwww");
        }
    else {
        prompt ("Yippieeee YOU WON! You saved the mankind from machines, you are our HEERO !!");
            }

}
//Initiate the the game and play 5 rounds
playRound();
//Just playing around with git to make commit more professional