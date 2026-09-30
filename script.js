/*
Part 3 questions
We use Number so javascript refers to a number.




*/

let score = 0;

const scoreDisplay = document.getElementById("score");
const title = document.getElementById("title");
const attackButton = document.getElementById("attackButton");
const resetButton = document.getElementById("resetButton");
const powerAttack = document.getElementById("powerAttack");

const playerNameInput = document.getElementById("playerName");
const attackValueInput = document.getElementById("attackValue");
const message = document.getElementById("message");

console.log(attackValueInput.value);
console.log(typeof attackValueInput.value);
console.log(attackValueInput.value + 1);

// TODO: create addPoint()
// TODO: create resetGame()
// TODO: connect both functions to buttons

function addPoint(){
    score++;
    updateDisplay();
}

function addPointPower(){
    score += 5;
    updateDisplay();
}

function resetPoint(){
    score = 0;
    scoreDisplay.innerText = score;
        title.innerText ="Click Attack"
}

function updateDisplay(){
    scoreDisplay.innerText = score;

    if(score >= 20){
        title.innerText = "You Win!";
    }
    else{
        title.innerText = "Click Attack"
    }
}

function getAttackValue(){
    const rawvalue = attackValueInput.value.trim();

    if(rawvalue === ""){
        message.innerText="Please enter a valid number.";
    }
    const attackValue = Number(rawValue);

    if(Number.isNaN(attackValue)){
        message.innerText="Please enter a valid number";
    }

    if(attackValue <1 || attackValue > 10){
        message.innerText="Choose an attack value from 1 to 10.";
        return null;
    }

    return attackValue;
}

attackButton.addEventListener("click", addPoint);
resetButton.addEventListener("click", resetPoint);
powerAttack.addEventListener("click", addPointPower);

