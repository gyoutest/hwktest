const foodData = [
  {
    name: "한식",
    icon: "🍚",
    items: [
      { name: "비빔밥", icon: "🥗" },
      { name: "김치찌개", icon: "🍲" },
      { name: "된장찌개", icon: "🥘" },
      { name: "제육볶음", icon: "🍖" },
      { name: "불고기", icon: "🥩" },
      { name: "순두부찌개", icon: "🍲" },
    ],
  },
  {
    name: "중식",
    icon: "🥡",
    items: [
      { name: "짜장면", icon: "🍜" },
      { name: "짬뽕", icon: "🌶️" },
      { name: "볶음밥", icon: "🍚" },
      { name: "탕수육", icon: "🍤" },
      { name: "마라탕", icon: "🔥" },
      { name: "마라샹궈", icon: "🥘" },
    ],
  },
  {
    name: "일식",
    icon: "🍣",
    items: [
      { name: "초밥", icon: "🍣" },
      { name: "돈카츠", icon: "🍛" },
      { name: "라멘", icon: "🍜" },
      { name: "우동", icon: "🥢" },
      { name: "규동", icon: "🍚" },
      { name: "카레", icon: "🍛" },
    ],
  },
  {
    name: "양식",
    icon: "🍝",
    items: [
      { name: "파스타", icon: "🍝" },
      { name: "리조또", icon: "🥣" },
      { name: "스테이크", icon: "🥩" },
      { name: "필라프", icon: "🍛" },
      { name: "오므라이스", icon: "🥚" },
      { name: "그라탕", icon: "🧀" },
    ],
  },
  {
    name: "분식",
    icon: "🍢",
    items: [
      { name: "떡볶이", icon: "🌶️" },
      { name: "순대", icon: "🍽️" },
      { name: "튀김", icon: "🍤" },
      { name: "김밥", icon: "🍙" },
      { name: "라볶이", icon: "🍜" },
      { name: "어묵", icon: "🍢" },
    ],
  },
  {
    name: "샌드위치/토스트",
    icon: "🥪",
    items: [
      { name: "써브웨이", icon: "🥪" },
      { name: "이삭토스트", icon: "🍞" },
      { name: "에그드랍", icon: "🥚" },
      { name: "퀴즈노스", icon: "🥪" },
      { name: "파리바게뜨", icon: "🥐" },
      { name: "뚜레쥬르", icon: "🍞" },
      { name: "홀썸브레드", icon: "🥯" },
    ],
  },
  {
    name: "샐러드/건강식",
    icon: "🥗",
    items: [
      { name: "닭가슴살샐러드", icon: "🥗" },
      { name: "연어샐러드", icon: "🐟" },
      { name: "리코타샐러드", icon: "🧀" },
      { name: "포케", icon: "🍲" },
      { name: "그릭요거트볼", icon: "🥣" },
      { name: "다이어트도시락", icon: "🍱" },
    ],
  },
  {
    name: "도시락/죽",
    icon: "🍱",
    items: [
      { name: "한솥도시락", icon: "🍱" },
      { name: "본도시락", icon: "🥡" },
      { name: "본죽", icon: "🥣" },
      { name: "본죽&비빔밥", icon: "🍚" },
      { name: "죽이야기", icon: "🍲" },
    ],
  },
  {
    name: "국물요리/탕/찜",
    icon: "🍲",
    items: [
      { name: "감자탕", icon: "🥘" },
      { name: "뼈해장국", icon: "🍲" },
      { name: "설렁탕", icon: "🥣" },
      { name: "갈비탕", icon: "🍖" },
      { name: "닭볶음탕", icon: "🍗" },
      { name: "아구찜", icon: "🐟" },
      { name: "순대국", icon: "🍲" },
      { name: "안동찜닭", icon: "🍗" },
    ],
  },
  {
    name: "고기/구이",
    icon: "🔥",
    items: [
      { name: "삼겹살", icon: "🥓" },
      { name: "목살", icon: "🍖" },
      { name: "갈비", icon: "🥩" },
      { name: "소불고기", icon: "🍖" },
      { name: "닭갈비", icon: "🍗" },
      { name: "곱창구이", icon: "🔥" },
    ],
  },
  {
    name: "족발/보쌈",
    icon: "🐷",
    items: [
      { name: "족발", icon: "🍖" },
      { name: "불족발", icon: "🌶️" },
      { name: "냉채족발", icon: "🥗" },
      { name: "보쌈", icon: "🥬" },
      { name: "마늘보쌈", icon: "🧄" },
      { name: "족보세트", icon: "🍽️" },
    ],
  },
  {
    name: "멕시칸",
    icon: "🌮",
    items: [
      { name: "타코", icon: "🌮" },
      { name: "부리또", icon: "🌯" },
      { name: "퀘사디아", icon: "🧀" },
      { name: "파히타", icon: "🍳" },
      { name: "부리또볼", icon: "🥙" },
    ],
  },
  {
    name: "아시안",
    icon: "🍜",
    items: [
      { name: "쌀국수", icon: "🍜" },
      { name: "팟타이", icon: "🥢" },
      { name: "볶음쌀국수", icon: "🍝" },
      { name: "나시고렝", icon: "🍚" },
      { name: "반미", icon: "🥖" },
      { name: "커리", icon: "🍛" },
    ],
  },
  {
    name: "치킨",
    icon: "🍗",
    items: [
      { name: "BBQ", icon: "🍗" },
      { name: "bhc", icon: "🍗" },
      { name: "교촌치킨", icon: "🍗" },
      { name: "굽네치킨", icon: "🔥" },
      { name: "네네치킨", icon: "🍗" },
      { name: "처갓집양념치킨", icon: "🌶️" },
      { name: "멕시카나", icon: "🍗" },
    ],
  },
  {
    name: "피자",
    icon: "🍕",
    items: [
      { name: "도미노피자", icon: "🍕" },
      { name: "피자헛", icon: "🍕" },
      { name: "파파존스", icon: "🍕" },
      { name: "미스터피자", icon: "🍕" },
      { name: "청년피자", icon: "🍕" },
      { name: "반올림피자", icon: "🍕" },
      { name: "피자알볼로", icon: "🍕" },
    ],
  },
  {
    name: "버거",
    icon: "🍔",
    items: [
      { name: "맥도날드", icon: "🍔" },
      { name: "버거킹", icon: "👑" },
      { name: "롯데리아", icon: "🍟" },
      { name: "맘스터치", icon: "🍔" },
      { name: "KFC", icon: "🍗" },
      { name: "노브랜드버거", icon: "🍔" },
      { name: "프랭크버거", icon: "🍔" },
    ],
  },
];

const palette = [
  "#ffd3b6",
  "#ffaaa5",
  "#dcedc1",
  "#f6d365",
  "#a8e6cf",
  "#c7ceea",
  "#ffdfba",
  "#b5ead7",
  "#ffdac1",
  "#e2f0cb",
  "#cde7ff",
  "#f9c6d3",
];

const state = {
  mode: "category",
  selectedCategory: null,
  finalItem: null,
  spinning: false,
  currentRotation: 0,
};

const contactToggle = document.querySelector("#contactToggle");
const contactDialog = document.querySelector("#contactDialog");
const contactClose = document.querySelector("#contactClose");
const contactCancel = document.querySelector("#contactCancel");
const themeToggle = document.querySelector("#themeToggle");
const themeIcon = document.querySelector(".theme-icon");
const themeLabel = document.querySelector(".theme-label");
const buddyMessage = document.querySelector("#buddyMessage");
const categoryList = document.querySelector("#categoryList");
const menuList = document.querySelector("#menuList");
const selectedCategoryName = document.querySelector("#selectedCategoryName");
const recentInput = document.querySelector("#recentInput");
const spinCategoryButton = document.querySelector("#spinCategoryButton");
const spinMenuButton = document.querySelector("#spinMenuButton");
const wheel = document.querySelector("#wheel");
const wheelCenterLabel = document.querySelector("#wheelCenterLabel");
const rouletteTitle = document.querySelector("#rouletteTitle");
const rouletteModeBadge = document.querySelector("#rouletteModeBadge");
const resultCard = document.querySelector("#resultCard");
const resultText = document.querySelector("#resultText");
const resultSubtext = document.querySelector("#resultSubtext");
const resetButton = document.querySelector("#resetButton");
const goEatButton = document.querySelector("#goEatButton");

const normalizeText = (value) => value.trim().toLowerCase().replace(/\s+/g, "");

function getExcludedItems() {
  return recentInput.value
    .split(",")
    .map((item) => normalizeText(item))
    .filter(Boolean);
}

function getCurrentOptions() {
  if (state.mode === "category") {
    return foodData.map(({ name, icon }) => ({ name, icon }));
  }

  if (state.selectedCategory === null) {
    return [];
  }

  const excluded = getExcludedItems();
  return state.selectedCategory.items.filter((item) => excluded.includes(normalizeText(item.name)) === false);
}

function setBuddyMessage(message) {
  buddyMessage.textContent = message;
}

function updateThemeButton() {
  const isDark = document.body.classList.contains("dark");
  themeIcon.textContent = isDark ? "☀️" : "🌙";
  themeLabel.textContent = isDark ? "화이트 모드" : "다크 모드";
}

function renderCategoryList() {
  categoryList.innerHTML = "";

  foodData.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-chip";
    if ((state.selectedCategory && state.selectedCategory.name === category.name) === true) {
      button.classList.add("selected");
    }
    button.setAttribute("aria-pressed", (state.selectedCategory && state.selectedCategory.name === category.name) ? "true" : "false");
    button.textContent = `${category.icon} ${category.name}`;
    button.addEventListener("click", () => {
      if (state.spinning) {
        return;
      }
      chooseCategory(category.name, false);
    });
    categoryList.append(button);
  });
}

function renderMenuList() {
  menuList.innerHTML = "";

  if (state.selectedCategory === null) {
    const placeholder = document.createElement("p");
    placeholder.className = "field-help";
    placeholder.textContent = "카테고리를 정하면 세부 메뉴가 여기에 나타나.";
    menuList.append(placeholder);
    spinMenuButton.disabled = true;
    return;
  }

  const excluded = getExcludedItems();

  state.selectedCategory.items.forEach((item) => {
    const button = document.createElement("button");
    const isExcluded = excluded.includes(normalizeText(item.name));
    button.type = "button";
    button.className = "option-chip";
    if ((state.finalItem && state.finalItem.name === item.name) === true) {
      button.classList.add("selected");
    }
    if (isExcluded === true) {
      button.classList.add("excluded");
      button.disabled = true;
    }
    button.setAttribute("aria-pressed", (state.finalItem && state.finalItem.name === item.name) ? "true" : "false");
    button.textContent = item.name;
    button.addEventListener("click", () => {
      if (state.spinning || isExcluded) {
        return;
      }
      chooseMenu(item.name, false);
    });
    menuList.append(button);
  });

  spinMenuButton.disabled = getCurrentOptions().length === 0;
}

function buildWheel(options) {
  wheel.innerHTML = "";

  if (options.length === 0) {
    wheel.style.background = "linear-gradient(135deg, rgba(200, 200, 200, 0.2), rgba(160, 160, 160, 0.3))";
    const emptyLabel = document.createElement("div");
    emptyLabel.className = "wheel-label";
    emptyLabel.style.transform = "translate(-50%, -50%) rotate(0deg)";
    emptyLabel.style.width = "56%";
    emptyLabel.style.textAlign = "center";
    emptyLabel.textContent = "제외되지 않은 메뉴가 없어";
    wheel.append(emptyLabel);
    return;
  }

  const segment = 360 / options.length;
  const conic = options
    .map((_, index) => {
      const start = index * segment;
      const end = start + segment;
      const color = palette[index % palette.length];
      return `${color} ${start}deg ${end}deg`;
    })
    .join(", ");

  wheel.style.background = `conic-gradient(from -90deg, ${conic})`;

  options.forEach((option, index) => {
    const label = document.createElement("div");
    const angle = index * segment + segment / 2 - 90;
    label.className = "wheel-label";
    label.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(-1 * min(26vw, 170px))) rotate(${-angle}deg)`;
    label.textContent = state.mode === "category" ? `${option.icon} ${option.name}` : option.name;
    wheel.append(label);
  });
}

function updateWheel() {
  const options = getCurrentOptions();

  rouletteTitle.textContent = state.mode === "category" ? "카테고리 룰렛" : "세부 메뉴 룰렛";
  rouletteModeBadge.textContent = state.mode === "category" ? "Category" : "Menu";
  wheelCenterLabel.textContent = state.mode === "category" ? "카테고리" : "메뉴";

  buildWheel(options);
}

function showResult(itemName) {
  resultCard.hidden = false;
  resultText.textContent = `오늘 저녁은 ${itemName}이다\u0021`;
  resultSubtext.textContent = `${state.selectedCategory.icon} ${state.selectedCategory.name} 카테고리에서 골랐어. 이제 먹으러 갈 준비만 하면 돼.`;
}

function clearResult() {
  resultCard.hidden = true;
  state.finalItem = null;
}

function chooseCategory(categoryName, fromSpin) {
  const chosen = foodData.find((category) => category.name === categoryName);
  if (chosen === undefined) {
    return;
  }

  state.selectedCategory = chosen;
  state.mode = "menu";
  state.finalItem = null;
  selectedCategoryName.textContent = `${chosen.icon} ${chosen.name}`;
  clearResult();
  renderCategoryList();
  renderMenuList();
  updateWheel();
  setBuddyMessage(
    fromSpin
      ? `${chosen.icon} ${chosen.name} 당첨. 이제 최근 먹은 메뉴를 빼고 세부 메뉴 룰렛을 돌려봐.`
      : `${chosen.icon} ${chosen.name} 선택 완료. 이제 세부 메뉴를 정해보자.`
  );
}

function chooseMenu(itemName, fromSpin) {
  if (state.selectedCategory === null) {
    return;
  }

  const chosen = state.selectedCategory.items.find((item) => item.name === itemName);
  if (chosen === undefined) {
    return;
  }

  state.finalItem = chosen;
  renderMenuList();
  showResult(itemName);
  setBuddyMessage(
    fromSpin
      ? `${chosen.icon} ${chosen.name}로 결정됐어. 오늘 메뉴는 끝났으니 기분 좋게 출발하자.`
      : `${chosen.icon} ${chosen.name} 직접 선택 완료. 결과 박스를 확인해봐.`
  );
}

function getOptionByIndex(index) {
  return getCurrentOptions()[index];
}

function getSelectedIndexFromRotation(optionCount, rotation) {
  if (optionCount === 0) {
    return -1;
  }

  const segment = 360 / optionCount;
  const normalizedRotation = ((rotation % 360) + 360) % 360;
  const pointerAngle = (450 - normalizedRotation) % 360;
  return Math.floor(pointerAngle / segment) % optionCount;
}

function spinWheel() {
  const options = getCurrentOptions();
  if (options.length === 0 || state.spinning === true) {
    if (options.length === 0 && state.mode === "menu") {
      setBuddyMessage("지금은 제외된 메뉴가 너무 많아. 최근 먹은 음식을 조금만 줄여줘.");
    }
    return;
  }

  state.spinning = true;
  clearResult();

  const pickedIndex = Math.floor(Math.random() * options.length);
  const segment = 360 / options.length;
  const targetAngle = pickedIndex * segment + segment / 2;
  const normalizedCurrentRotation = ((state.currentRotation % 360) + 360) % 360;
  const targetRotationNormalized = (90 - targetAngle + 360) % 360;
  const correctionRotation = (targetRotationNormalized - normalizedCurrentRotation + 360) % 360;
  const extraTurns = 360 * (5 + Math.floor(Math.random() * 2));
  const finalRotation = state.currentRotation + extraTurns + correctionRotation;
  state.currentRotation = finalRotation;

  wheel.style.transform = `rotate(${finalRotation}deg)`;
  setBuddyMessage(state.mode === "category" ? "카테고리 룰렛 회전 중. 오늘의 큰 방향을 정하는 중이야." : "세부 메뉴 룰렛 회전 중. 딱 하나만 골라볼게.");

  window.setTimeout(() => {
    state.spinning = false;
    const selectedIndex = getSelectedIndexFromRotation(options.length, state.currentRotation);
    const chosen = getOptionByIndex(selectedIndex);
    if (chosen === undefined) {
      return;
    }

    if (state.mode === "category") {
      chooseCategory(chosen.name, true);
      return;
    }

    chooseMenu(chosen.name, true);
  }, 5000);
}

function resetApp() {
  state.mode = "category";
  state.selectedCategory = null;
  state.finalItem = null;
  state.spinning = false;
  state.currentRotation = 0;
  selectedCategoryName.textContent = "아직 없음";
  wheel.style.transform = "rotate(0deg)";
  clearResult();
  renderCategoryList();
  renderMenuList();
  updateWheel();
  setBuddyMessage("초기화 완료. 다시 카테고리부터 골라보자.");
}

contactToggle.addEventListener("click", () => {
  contactDialog.showModal();
});

contactClose.addEventListener("click", () => {
  contactDialog.close();
});

contactCancel.addEventListener("click", () => {
  contactDialog.close();
});

contactDialog.addEventListener("click", (event) => {
  const rect = contactDialog.getBoundingClientRect();
  const clickedInside =
    rect.top <= event.clientY &&
    event.clientY <= rect.top + rect.height &&
    rect.left <= event.clientX &&
    event.clientX <= rect.left + rect.width;

  if (clickedInside === false) {
    contactDialog.close();
  }
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  updateThemeButton();
});

recentInput.addEventListener("input", () => {
  if (state.mode === "menu") {
    renderMenuList();
    updateWheel();
  }
});

spinCategoryButton.addEventListener("click", () => {
  if (state.spinning === true) {
    return;
  }
  state.mode = "category";
  state.finalItem = null;
  clearResult();
  updateWheel();
  spinWheel();
});

spinMenuButton.addEventListener("click", () => {
  if (state.spinning === true || state.selectedCategory === null) {
    return;
  }
  state.mode = "menu";
  updateWheel();
  spinWheel();
});

resetButton.addEventListener("click", resetApp);

goEatButton.addEventListener("click", () => {
  setBuddyMessage("배달 앱이나 지도 연결은 다음 단계에서 붙이면 돼. 지금은 버튼 자리만 준비해뒀어.");
});

updateThemeButton();
renderCategoryList();
renderMenuList();
updateWheel();
