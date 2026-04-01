const menus = [
  { name: "치킨", color: "#f7c548" },
  { name: "떡볶이", color: "#f26a4b" },
  { name: "초밥", color: "#72c2a9" },
  { name: "삼겹살", color: "#ff9f68" },
  { name: "마라탕", color: "#f05a28" },
  { name: "파스타", color: "#f7de8a" },
  { name: "쌀국수", color: "#89b97f" },
  { name: "햄버거", color: "#f28d52" }
];

const wheel = document.getElementById("rouletteWheel");
const spinButton = document.getElementById("spinButton");
const resultText = document.getElementById("resultText");
const menuList = document.getElementById("menuList");

let currentRotation = 0;
let spinning = false;

function buildWheelGradient(items) {
  const slice = 360 / items.length;

  return items
    .map((item, index) => {
      const start = index * slice;
      const end = start + slice;
      return `${item.color} ${start}deg ${end}deg`;
    })
    .join(", ");
}

function buildWheelLabels(items) {
  const slice = 360 / items.length;
  const labels = document.createElement("div");
  labels.className = "wheel-labels";

  items.forEach((item, index) => {
    const label = document.createElement("span");
    const angle = index * slice + slice / 2 - 90;

    label.className = "wheel-label";
    label.textContent = item.name;
    label.style.transform = `rotate(${angle}deg) translateY(-50%)`;
    labels.appendChild(label);
  });

  return labels;
}

function buildMenuList(items) {
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const chip = document.createElement("li");
    chip.textContent = item.name;
    fragment.appendChild(chip);
  });

  menuList.appendChild(fragment);
}

function initializeWheel(items) {
  wheel.style.setProperty("--wheel-gradient", `conic-gradient(${buildWheelGradient(items)})`);
  wheel.appendChild(buildWheelLabels(items));
  buildMenuList(items);
}

function pickMenu() {
  const slice = 360 / menus.length;
  const winnerIndex = Math.floor(Math.random() * menus.length);
  const centerAngle = winnerIndex * slice + slice / 2;
  const extraTurns = 360 * (5 + Math.floor(Math.random() * 3));
  const targetRotation = extraTurns + (360 - centerAngle);

  currentRotation += targetRotation;
  wheel.style.setProperty("--rotation", `${currentRotation}deg`);

  return menus[winnerIndex];
}

spinButton.addEventListener("click", () => {
  if (spinning) {
    return;
  }

  spinning = true;
  spinButton.disabled = true;
  resultText.textContent = "룰렛이 돌고 있습니다...";

  const winner = pickMenu();

  window.setTimeout(() => {
    resultText.textContent = `${winner.name}, 오늘은 이걸로 갑시다.`;
    spinButton.disabled = false;
    spinning = false;
  }, 5400);
});

initializeWheel(menus);
