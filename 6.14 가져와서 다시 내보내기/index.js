import { addBtn, addInput, list, rollBtn } from "./tags.js";
import { addMenu, deleteMenu, rollMenu } from "./functions.js";

const data = [];

addBtn.addEventListener("click", () => {
  addMenu(data);
});
addInput.addEventListener("keypress", (e) => e.code === "Enter" && addMenu(data));
list.addEventListener(
  "click",
  ({ target }) => target.tagName === "BUTTON" && deleteMenu(data, target.dataset.index)
);
rollBtn.addEventListener("click", () => {
  list.classList.contains("rolling") || rollMenu(data);
});
