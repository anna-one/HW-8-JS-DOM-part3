let arrayOfLi = [];
const buttonClick = document.getElementById("buttonAdd");
const list = document.getElementById("listCheck");
let liItem = document.getElementById("inputText");

buttonClick.addEventListener("click", () => {
  arrayOfLi.push({ value: liItem.value, completed: false });

  renderList();
});

const renderList = () => {
  list.innerHTML = "";

  arrayOfLi.forEach((item) => {
    const addLi = document.createElement("li");
    addLi.classList.add("itemList");

    if (item.completed) {
      addLi.classList.add("completed");
    }

    liItem.value = "";

    const p = document.createElement("p");
    p.innerText = item.value;

    const buttonDelete = document.createElement("button");
    buttonDelete.innerText = "Delete";

    addLi.append(p);
    addLi.append(buttonDelete);

    addLi.addEventListener("click", (event) => {
      item.completed = !item.completed;
      event.target.classList.toggle("completed");
    });

    buttonDelete.addEventListener("click", (event) => {
      arrayOfLi.splice(arrayOfLi.indexOf(item.value), 1);

      renderList();
    });

    buttonDelete.classList.add("buttonDelete");

    list.append(addLi);
  });
};
