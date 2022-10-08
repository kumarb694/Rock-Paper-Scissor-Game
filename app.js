let comptuerscore=0;
let userscore=0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getcomputerchoice()
{
    const choice = ['r', 'p', 's'];
    const randomnummber = (Math.floor(Math.random()*3));
    return choice[randomnummber];
}
//console.log(getcomputerchoice());
function convert(letter)
{
if(letter==="r")
{
    return "Rock";
}
else if(letter==="p")
{
    return "Paper";
}
else 
{
    return "Scissor"
}
}
function win(userchoice, computerchoice)
{
    userscore++;
    console.log("WIN");
    console.log(userscore);
    userscore_span.innerHTML = userscore +" :";
    result_p.innerHTML = `${convert(userchoice)} beats ${convert(computerchoice)}. You Win!`;
    document.getElementById(userchoice).classList.add('greenglow');
    setTimeout(function(){document.getElementById(userchoice).classList.remove('greenglow')}, 1000);
}
function lose(userchoice, computerchoice)
{
    comptuerscore++;
    console.log("LOST");
    console.log(comptuerscore);
    computerscore_span.innerHTML = comptuerscore;
    result_p.innerHTML = `${convert(computerchoice)} beats ${convert(userchoice)}. You Lost!`;
    document.getElementById(userchoice).classList.add('redglow');
    setTimeout(function(){document.getElementById(userchoice).classList.remove('redglow')}, 1000);
}
function draw(userchoice, computerchoice)
{
    console.log("It's a draw");
    result_p.innerHTML = `No one Wins!`;
    document.getElementById(userchoice).classList.add('yellowglow');
    setTimeout(function(){document.getElementById(userchoice).classList.remove('yellowglow')}, 1000);
}
function game(userchoice)
{
     const computerchoice=getcomputerchoice();
     switch(userchoice+computerchoice)
     {
        case "rs":
        case "pr":
        case "sp":
        win(userchoice, computerchoice);
        break;
        case "rp":
        case "sr":
        case "ps":
        lose(userchoice, computerchoice);
        break;
        case "rr":
        case "pp":
        case "ss":
        draw(userchoice);
        break;
     }
}
function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissor_div.addEventListener('click', function(){
        game("s");
    })
}
main();

