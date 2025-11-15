const cards = [
	{name: '6', value: 6, img: 'images/6.webp'},
	{name: '7', value: 7, img: 'images/7.webp'},
	{name: '8', value: 8, img: 'images/8.webp'},
	{name: '9', value: 9, img: 'images/9.webp'},
	{name: '10', value: 10, img: 'images/10.webp'},
	{name: 'Валет', value: 2, img: 'images/valet.webp'},
	{name: 'Дама', value: 3, img: 'images/dama.webp'},
	{name: 'Король', value: 4, img: 'images/korol.webp'},
	{name: 'Туз', value: 11, img: 'images/tuz.webp'}
];
let userScore = 0;
let computerScore = 0;
let attempt = 1;
let userName = prompt("Введіть ім'я: ");
while(!userName || userName.trim() === ""){
	userName = prompt("Поле \"Ім'я\" має бути заповнено! Введіть ім'я: ");
}
const h1 = document.createElement("h1");
h1.textContent = "Гра \"21\"";
document.body.appendChild(h1);
const game = document.createElement("div");
game.id = "game";
document.body.appendChild(game);
const user = document.createElement("div");
user.className = "player";
const userTitle = document.createElement("h2");
userTitle.id = "userName";
userTitle.textContent = userName;
const userCard = document.createElement("div");
userCard.id = "userCard";
userCard.className = "card";
const userScoreText = document.createElement("p");
userScoreText.textContent = "Очки: ";
const userScoreSpan = document.createElement("span");
userScoreSpan.id = "userScore";
userScoreSpan.textContent = "0";
userScoreText.appendChild(userScoreSpan);
user.appendChild(userTitle);
user.appendChild(userCard);
user.appendChild(userScoreText);
game.appendChild(user);
const computerDiv = document.createElement("div");
computerDiv.className = "player";
const computerTitle = document.createElement("h2");
computerTitle.textContent = "Комп'ютер";
const computerCard = document.createElement("div");
computerCard.id = "computerCard";
computerCard.className = "card";
const computerScoreText = document.createElement("p");
computerScoreText.textContent = "Очки: ";
const computerScoreSpan = document.createElement("span");
computerScoreSpan.id = "computerScore";
computerScoreSpan.textContent = "0";
computerScoreText.appendChild(computerScoreSpan);
computerDiv.appendChild(computerTitle);
computerDiv.appendChild(computerCard);
computerDiv.appendChild(computerScoreText);
game.appendChild(computerDiv);
const buttonGroup = document.createElement("div");
buttonGroup.className = "button-group";
document.body.appendChild(buttonGroup);
const buttonn = document.createElement("button");
buttonn.id = "generate";
buttonn.className = "generate-btn";
buttonn.textContent = "Генерувати";
buttonGroup.appendChild(buttonn);
const resetButton = document.createElement("button");
resetButton.id = "reset";
resetButton.className = "reset-btn";
resetButton.textContent = "Скинути";
buttonGroup.appendChild(resetButton);
const attemptText = document.createElement("p");
attemptText.id = "attempts";
attemptText.textContent = "Спроба 1 з 3";
document.body.appendChild(attemptText);
const result = document.createElement("p");
result.id = "result";
document.body.appendChild(result);
buttonn.addEventListener("click", () => {
	if(attempt > 3) return;
	const userCardRand = cards[Math.floor(Math.random() * cards.length)];
	const computerCardRand = cards[Math.floor(Math.random() * cards.length)];
	userCard.innerHTML = "";
	const userImg = document.createElement("img");
	userImg.src = userCardRand.img;
	userImg.alt = userCardRand.name;
	userImg.style.height = "120px";
	userCard.appendChild(userImg);
	computerCard.innerHTML = "";
	const compImg = document.createElement("img");
	compImg.src = computerCardRand.img;
	compImg.alt = computerCardRand.name;
	compImg.style.height = "120px";
	computerCard.appendChild(compImg);
	userScore += userCardRand.value;
	computerScore += computerCardRand.value;
	userScoreSpan.textContent = userScore;
	computerScoreSpan.textContent = computerScore;
	attemptText.textContent = `Спроба ${attempt} з 3`;
	attempt++;
	if(attempt > 3){
		if(userScore > computerScore){
			result.textContent = `${userName} переміг/перемогла!`;
		} else if(userScore < computerScore){
			result.textContent = "Комп'ютер переміг!";
		} else{
			result.textContent = "Нічия";
		}
	}
});
resetButton.addEventListener("click", () => {
    window.location.reload(); 
});