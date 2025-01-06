const list = document.querySelector(".list");
const addBtn = document.querySelector(".add-btn");
const input = document.querySelector(".add-input");

function createTodo(value, order) {
  const node = document.createElement("li");
  if (value.isClear) {
    node.classList.add("item", "done");
  } else {
    node.classList.add("item");
  }
  node.textContent = `${order}. ${value.title}`;
  list.appendChild(node);
}

const data = [
  {
    title: "자바스크립트 공부하기",
    isClear: true,
  },
  {
    title: "쓰레기 분리수거",
    isClear: false,
  },
  {
    title: "고양이 밥주기",
    isClear: true,
  },
  {
    title: "독서하기",
    isClear: false,
  },
  {
    title: "영어 공부하기",
    isClear: false,
  },
];

// 여기에 코드를 작성해 주세요.

data.forEach((value, i) => {
  createTodo(value, i + 1);
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("item")) {
    e.target.classList.toggle("done");
  }
});

function createTodoList() {
  const input = document.querySelector(".add-input");
  const order = list.children.length + 1;

  const node = document.createElement("li");
  node.classList.add("item");
  node.textContent = `${order}. ${input.value}`;
  list.appendChild(node);

  input.value = "";
}

addBtn.addEventListener("click", createTodoList);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    createTodoList();
  }
});

// Reset button functionality
const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
resetBtn.classList.add("reset-btn");
document.querySelector(".main").appendChild(resetBtn);
resetBtn.addEventListener("click", () => {
  list.innerHTML = "";
});
