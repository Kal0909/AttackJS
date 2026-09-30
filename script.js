/*
Part 2 Questions
If the input contains 5 "console.log(attackValueInput.Value +1); the result will be 51

*/

/*
Part 3 questions
We use Number so javascript refers to a number.
Number.isNaN() checks that an input is an applicable number.
The function returns null when the value is invalid so that no value is stored and the code comes to a halt and doesn't move on.
The || operator is a logical operator that checks if a condition is met OR if another condition is met and then executes the following code.
*/

/*
Part 4 Questions
The parameters are : rawValue === "", Number.isNaN(attackValue), AttackValue < 1 || attackValue > 10),(isCritical).
The first function call returns '5' and the second returns '20'.
 */

/*
 Part 6 Questions
 Push adds a value to the end of an array. Value for index 0 then 1 then 2 and so on.
The index of the first value is 0.
attacks.length contains the length of the array so if it was at index 6 attacks.length would give you 7 as it includes 0.
*/

/*
Part 7 Questions
let index = 0 means the array starts at index 0 and is expected to change.
index < attacks.length means execute this code while index number is less than the amount of times the attack button has been clicked.
index++ means that the arrays index counter increments by 1 for each run of the loop.
attacks[index] means
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

const attacks = [];

const historyList = document.getElementById("history");

console.log(attackValueInput.value);
console.log(typeof attackValueInput.value);
console.log(attackValueInput.value + 1);
console.log(calculateDamage(5,false));
console.log(calculateDamage(10,true));
console.log(attacks);

// TODO: create addPoint()
// TODO: create resetGame()
// TODO: connect both functions to buttons

/*
Old addPoint function / replaced by performAttack function

function addPoint(){
    score++;
    updateDisplay();
}
*/

function performAttack(){
    const playerName = playerNameInput.value.trim();
    const attackValue = getAttackValue();

    if(playerName === ""){
        message.innerText="Please enter your name.";
        return;
    }

    if(attackValue === null){
        return;
    }

    const  isCritical = attackValue===10;
    const damage = calculateDamage(attackValue, isCritical);

    score += damage;

    attacks.push(damage);

    message.innerText=`${playerName} caused ${damage} damage.`;
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
    updateHistory();

    if(score >= 20){
        title.innerText = "You Win!";
    }
    else{
        title.innerText = "Click Attack"
    }


}

function getAttackValue(){
    const rawValue = attackValueInput.value.trim();

    if(rawValue === ""){
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

function calculateDamage(baseDamage, isCritical){
    if(isCritical){
        return baseDamage * 2;
    }

    return baseDamage;
}

function updateHistory(){

    historyList.innerHTML="";

    for(let index = 0; index < attacks.length; index++){
        const listItem = document.createElement("li");
        listItem.innerText= `Attack ${index +1}: ${attacks[index]} damage`;
        historyList.appendChild(listItem);


    }
}

attackButton.addEventListener("click", performAttack);
resetButton.addEventListener("click", resetPoint);
powerAttack.addEventListener("click", addPointPower);

