let playerScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");
const humanScore = document.querySelector(".h-runningscore");
const compScore = document.querySelector(".c-runningscore");
const result = document.querySelector(".result>p");
const reloadBtn = document.querySelector(".reload");
const compRockBtn = document.querySelector(".comprock");
const compPaperBtn = document.querySelector(".comppaper");
const compScissorBtn = document.querySelector(".compscissor");




function computerPlay(){
    let num = Math.floor(Math.random() *3);
    switch(num){
        case 0:
            compRockBtn.classList.add('compchoice');
            setTimeout(()=> {compRockBtn.classList.remove('compchoice');}, 600);
            return "rock";
            break;
        case 1:
            compPaperBtn.classList.add('compchoice');
            setTimeout(()=> {compPaperBtn.classList.remove('compchoice');}, 600);
            return "paper";
            break;
        case 2:
            compScissorBtn.classList.add('compchoice');
            setTimeout(()=> {compScissorBtn.classList.remove('compchoice');}, 600);
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
            result.innerHTML = `<span style="color: rgb(36,229,0)">
                                ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}</span> 
                                beats
                                <span style="color: rgb(228,61,64)">
                                ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}</span>`;
            
            playerScore++;
            humanScore.innerText = playerScore;
            compScore.innerText = computerScore;
            return "WIN";
            break;
        case `rock, paper`:
        case `paper, scissor`:
        case `scissor, rock`:
            result.innerHTML = `<span style="color: rgb(228,61,64)">
                                ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}</span>
                                loses to
                                <span style="color: rgb(36,229,0)">
                                ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}</span>`;
            
            computerScore++;
            humanScore.innerText = playerScore;
            compScore.innerText = computerScore;
            return "LOSE";
            break;
        case `rock, rock`:
        case `paper, paper`:
        case `scissor, scissor`:
            result.innerHTML = `<span style="color: rgb(134,139,142)">
                                ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}</span>
                                draws with
                                <span style="color: rgb(134,139,142)">
                                ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}</span>`;
            
            humanScore.innerText = playerScore;
            compScore.innerText = computerScore;
            
            return "DRAW";
            break;
    }

}


function firsttofive(playerScore, computerScore){
    if(playerScore == 5 || computerScore == 5){

        if(playerScore > computerScore){
            result.innerText = "You Won!";
            result.style.color = "rgb(36,229,0)";
        }
        else if(computerScore > playerScore){
            result.innerText = "You Lost!";
            result.style.color = "rgb(228,61,64)";
        }
        else{
            result.innerText = "It's a Draw!";
            result.style.color = "rgb(134,139,142)";
        }
    }
}

function end(){
    if(playerScore == 5 || computerScore == 5){
        rockBtn.removeEventListener("click", rockfn);
        paperBtn.removeEventListener("click", paperfn);
        scissorBtn.removeEventListener("click", scissorfn)
        
        rockBtn.style.pointerEvents = "none";
        paperBtn.style.pointerEvents = "none";
        scissorBtn.style.pointerEvents = "none";

        rockBtn.style.boxShadow = "none";
        paperBtn.style.boxShadow = "none";
        scissorBtn.style.boxShadow = "none";

        reloadBtn.style.visibility = "visible";
    }
}

let rockfn = function (){
    game("rock");
    firsttofive(playerScore, computerScore)
    end();
   
};

let paperfn = function (){
    game("paper");
    firsttofive(playerScore, computerScore);
    end();

};
let scissorfn = function begin(){
    game("scissor");
    firsttofive(playerScore, computerScore)
    end();
 
};

function main(){
    rockBtn.addEventListener("click", rockfn)

    paperBtn.addEventListener("click", paperfn)

    scissorBtn.addEventListener("click", scissorfn)

    end(playerScore);
}

main();

reloadBtn.addEventListener("click", function(){

    window.location.reload();
});
