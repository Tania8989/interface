const symbols = [
  "images/cherry.webp",
  "images/grapefruit.webp",
  "images/lemon.webp",
  "images/orange.webp",
  "images/plum.webp"
];
const rows = 3;
const cols = 3;
const maxAttempts = 3;
let attempts = 0;
let win = false;
let userName = "";
while (true) {
  userName = prompt("Введіть ім’я:");
  if (userName && userName.trim() !== "" && userName.length <= 20) {
    break;
  } else {
    alert("Введіть коректне ім’я (до 20 символів).");
  }
}
document.body.innerHTML = "";
const title = document.createElement("h1");
title.textContent = `Вітаємо, ${userName}!`;
document.body.appendChild(title);
const info = document.createElement("div");
info.id = "info";
info.textContent = `Спроби: 0 / ${maxAttempts}`;
document.body.appendChild(info);
const slotMachine = document.createElement("div");
slotMachine.id = "slot-machine";
document.body.appendChild(slotMachine);
const buttonsDiv = document.createElement("div");
const spinButton = document.createElement("button");
spinButton.textContent = "Крутити";
const resetButton = document.createElement("button");
resetButton.textContent = "Скинути";
buttonsDiv.appendChild(spinButton);
buttonsDiv.appendChild(resetButton);
document.body.appendChild(buttonsDiv);
function spin() {
  if (win || attempts >= maxAttempts) return;
  attempts++;
  info.textContent = `Спроби: ${attempts} / ${maxAttempts}`;
  slotMachine.innerHTML = "";
  for (let r = 0; r < rows; r++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let c = 0; c < cols; c++) {
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];
      const cell = document.createElement("div");
      cell.classList.add("cell");
      const img = document.createElement("img");
      img.src = symbol;
      img.alt = "symbol";
      cell.appendChild(img);
      rowDiv.appendChild(cell);
    }
    slotMachine.appendChild(rowDiv);
  }
  checkWin();
}
function checkWin() {
  const rowsElements = document.querySelectorAll(".row");
  rowsElements.forEach((row) => {
    const imgs = row.querySelectorAll("img");
    const srcs = [...imgs].map((img) => img.src);
    if (srcs.every((src) => src === srcs[0])) {
      win = true;
      info.textContent = `${userName} переміг/перемогла!`;
    }
  });
  if (!win && attempts >= maxAttempts) {
    info.textContent = `${userName}, спроби закінчились.`;
  }
}
spinButton.addEventListener("click", spin);
resetButton.addEventListener("click", () => {
  attempts = 0;
  win = false;
  info.textContent = `Спроби: 0 / ${maxAttempts}`;
  slotMachine.innerHTML = "";
});