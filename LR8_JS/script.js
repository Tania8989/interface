let userName = prompt("Введіть ім'я: ");
while(!userName || userName.trim() === ""){
	userName = prompt("Поле \"Ім'я\" має бути заповнено! Введіть ім'я: ");
}
let userScore = 0;
let computerScore = 0;
const container = document.createElement("div");
container.className = "game";
document.body.appendChild(container);
const playerDiv = document.createElement("div");
playerDiv.className = "player";
const playerName = document.createElement("div");
playerName.className = "name";
playerName.textContent = userName;
const userScoreBox = document.createElement("div");
userScoreBox.className = "score-box";
userScoreBox.id = "userScore";
userScoreBox.textContent = "0";
const userNumBox = document.createElement("div");
userNumBox.className = "number-circle";
userNumBox.id = "userNum";
userNumBox.textContent = "-";
playerDiv.appendChild(playerName);
playerDiv.appendChild(userScoreBox);
playerDiv.appendChild(userNumBox);
container.appendChild(playerDiv);
const buttonContainer = document.createElement("div");
buttonContainer.className = "button-group";
container.appendChild(buttonContainer);
const buttonn = document.createElement("button");
buttonn.className = "generate-btn";
buttonn.textContent = "Generate";
buttonContainer.appendChild(buttonn);
const resetButton = document.createElement("button");
resetButton.className = "reset-btn";
resetButton.textContent = "Скинути";
buttonContainer.appendChild(resetButton);
const compDiv = document.createElement("div");
compDiv.className = "computer";
const compName = document.createElement("div");
compName.className = "name";
compName.textContent = "Computer";
const compScoreBox = document.createElement("div");
compScoreBox.className = "score-box";
compScoreBox.id = "compScore";
compScoreBox.textContent = "0";
const compNumBox = document.createElement("div");
compNumBox.className = "number-circle";
compNumBox.textContent = "-";
compDiv.appendChild(compName);
compDiv.appendChild(compScoreBox);
compDiv.appendChild(compNumBox);
container.appendChild(compDiv);
buttonn.addEventListener("click", () => {
	if(userScore === 3 || computerScore === 3) return;
	const userNum = Math.floor(Math.random() * 11);
	const compNum = Math.floor(Math.random() * 11);
	userNumBox.textContent = userNum;
	compNumBox.textContent = compNum;
	if(userNum > compNum){
		userScore++;
		userScoreBox.textContent = userScore;
	} else if(userNum < compNum){
		computerScore++;
		compScoreBox.textContent = computerScore;
	}
	if(userScore === 3 || computerScore === 3) endGame();
});
resetButton.addEventListener("click", () => {
    window.location.reload(); 
});
function endGame(){
	if(userScore === 3){
		alert(`${userName} переміг/перемогла!`);
	} else {
		alert("Комп'ютер переміг!");
	}
}