let playerChoice= prompt("please select either rock paper or scissor.");
console.log(playerChoice);

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

function game(playerChoice,computerChoice){
    var winCount=0;
    console.log(computerChoice);

    if (playerChoice==='rock'){
        if(computerChoice==="rock"){
            console.log(winCount);
            return winCount;
        }
        else if (computerChoice==="paper"){
            winCount= winCount-1;
            console.log(winCount);
            return winCount;
        }
     else {
        winCount=winCount+1;
        console.log(winCount);
        return winCount;
        
     }
    }
    console.log(winCount);
}
game(playerChoice,getComputerChoice());

/*function playGame(playerChoice,computerChoice,rounds){
    let rounds=5;
    //initiate game function 5 times and each time update winCount and lossCount

}*/
