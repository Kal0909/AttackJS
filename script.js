let score = 0;

const scoreDisplay = document.getElementById("score");
const title = document.getElementById("title");
const attackButton = document.getElementById("attackButton");
const resetButton = document.getElementById("resetButton");
const powerAttack = document.getElementById("powerAttack");

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

attackButton.addEventListener("click", addPoint);
resetButton.addEventListener("click", resetPoint);
powerAttack.addEventListener("click", addPointPower);

