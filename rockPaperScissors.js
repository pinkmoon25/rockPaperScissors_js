function computerPlay(){
    
    let num = Math.floor(Math.random() *3);

    if(num === 0){
        return "Rock";
    }
    else if (num === 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }

}

function playRound(playerSelection, computerSelection){

    if(playerSelection == "rock" && computerSelection == "Paper"){
        return "You lose! Paper beats Rock";
    }
    else if(playerSelection == "rock" && computerSelection == "Scissors"){
        return "You Win! Rock beats scissors";
    }
    else if(playerSelection == "paper" && computerSelection == "Rock"){
        return "You Win! Paper beats rock";
    }
    else if(playerSelection == "paper" && computerSelection == "Scissors"){
        return "You lose! Scissors beats Paper";
    }
    else if(playerSelection == "scissors" && computerSelection == "Paper"){
        return "You Win! Scissors beats Paper";
    }
    else if(playerSelection == "scissors" && computerSelection == "Rock"){
        return "You lose! Rock beats Scissors";
    }
    else{
        return "It's a tie";
    }
}

const computerSelection = computerPlay();
console.log(computerSelection);
const playerSelection = window.prompt("Enter your Choice").toLowerCase();
console.log(playerSelection);

console.log(playRound(playerSelection, computerSelection));