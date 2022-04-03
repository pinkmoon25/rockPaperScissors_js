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

    playerSelection = 'rock';
    computerSelection = computerPlay();

    if(playerSelection == "rock" && computerSelection == "Paper"){
        console.log('lose')//return "lose";
        console.log("playerSewlection", playerSelection);
        console.log("computerSelection", computerSelection);
        
    }
    else if(playerSelection == "rock" && computerSelection == "Scissors"){
        console.log('win')//return "win";
        console.log("playerSewlection", playerSelection);
        console.log("computerSelection", computerSelection);
        
    }
    else if(playerSelection == "paper" && computerSelection == "Rock"){
        console.log('win')//return "win";
        console.log("playerSewlection", playerSelection);
        console.log("computerSelection", computerSelection);
        
    }
    else if(playerSelection == "paper" && computerSelection == "Scissors"){
        console.log('lose')//return "lose";
        console.log("playerSewlection", playerSelection);
        console.log("computerSelection", computerSelection);
        
    }
    else if(playerSelection == "scissors" && computerSelection == "Paper"){
        console.log('win')//return "win";
        console.log("playerSewlection", playerSelection);
        console.log("computerSelection", computerSelection);
        
    }
    else if(playerSelection == "scissors" && computerSelection == "Rock"){
        console.log('lose')//return "lose";
        console.log("playerSewlection", playerSelection);
        console.log("computerSelection", computerSelection);
        
    }
    else if(playerSelection == computerSelection.toLowerCase()){
        console.log('tie')//return "tie";
        console.log("playerSewlection", playerSelection);
        console.log("computerSelection", computerSelection);
    }

}

function game(){

    let playerScore = 0;
    let computerScore = 0;

    

    for(let i =0; i<5; i++){

        const computerSelection = computerPlay();

        const playerSelection = window.prompt("Enter your Choice", "rock, paper or scissors").toLowerCase();

        playRound(playerSelection, computerSelection);
        
        console.log(playRound(playerSelection, computerSelection));

        if(playRound(playerSelection, computerSelection) == "win"){
            playerScore += 1;
        }
        else if (playRound(playerSelection, computerSelection) == "lose"){
            computerScore += 1;
        }       
   } console.log(playerScore, computerScore);


   if(playerScore > computerScore){
    console.log("You Win!") ;
    }
    else if(computerScore > playerScore){
    console.log("You lose!");
    }
    else{
    console.log("It's a tie");
    }    
}



const rockBtn = document.querySelector('.rock');

rockBtn.addEventListener('click', playRound);
