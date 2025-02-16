import { list } from "../tags.js";

function reloadMenu(data) {
  console.log(list);
  list.innerHTML = "";

  data.forEach((title, index) => {
    const li = document.createElement("li");
    li.classList.add("item");
    li.innerHTML = `<b>${
      index + 1
    }</b>${title}<button class="del-btn" data-index="${index}">x</button>`;
    list.append(li);
  });
}

function deleteMenu(data, index) {
  data.splice(index, 1);
  reloadMenu(data);
}

export default deleteMenu;
