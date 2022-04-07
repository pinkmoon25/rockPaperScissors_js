let playerScore = 0;

let computerScore = 0;

const rockBtn = document.querySelector(".rock");

const paperBtn = document.querySelector(".paper");

const scissorBtn = document.querySelector(".scissor");

const humanScore = document.querySelector(".h-runningscore");

const compScore = document.querySelector(".c-runningscore");

const result = document.querySelector(".result>p")


function computerPlay(){
    let num = Math.floor(Math.random() *3);
    switch(num){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissor";
            break;
    }
}

function game(playerSelection){
    
    const computerSelection = computerPlay();
    switch(`${playerSelection}, ${computerSelection}`){
        case `rock, scissor`:
        case `scissor, paper`:
        case `paper, rock`:
            result.innerText = `human chose ${playerSelection} & beats ${computerSelection}`;
            return "WIN";
            break;
        case `rock, paper`:
        case `paper, scissor`:
        case `scissor, rock`:
            result.innerText = `human chose ${playerSelection} & lost to ${computerSelection}`;
            return "LOSE";
            break;
        case `rock, rock`:
        case `paper, paper`:
        case `scissor, scissor`:
            result.innerText = `human chose ${playerSelection} same as ${computerSelection}`;
            return "DRAW";
            break;
    }

}

function updatescore(playerSelection){

    switch(game(playerSelection)){
        case "WIN":
            playerScore++;
            humanScore.innerText = playerScore;
            compScore.innerText = computerScore;
            break;
        case "LOSE":
            computerScore++;
            humanScore.innerText = playerScore;
            compScore.innerText = computerScore;
            break;
        case "DRAW":
            result.innerText = "It's a Draw";
            break;
    }
}

function firsttofive(playerSelection){
    
    updatescore(playerSelection);

    if(playerScore == 5 || computerScore == 5){

        if(playerScore > computerScore){
            result.innertext = "You Win Human!";    
        }
        else if(playerScore < computerScore){
            result.innerText = "You Lost Human!";
            
        }

        else if(playerScore == computerScore){
            result.innerText = "It's a Draw!";
            
        }

    playerScore = 0;
    computerScore = 0;
    }
    
}

rockBtn.addEventListener("click", function(){
    game("rock");
    firsttofive("rock");
})

paperBtn.addEventListener("click", function(){
    game("paper");
    firsttofive("paper");
})

scissorBtn.addEventListener("click", function(){
    game("scissor");
    firsttofive("scissor");
})


