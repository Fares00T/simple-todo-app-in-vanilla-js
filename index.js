// @ts-nocheck
let addToDoButton = document.getElementById("addToDo");
let inputField = document.getElementById("inputField");
let removeAll = document.getElementById("removeAll");

let toDoContainer = document.createElement("div");
toDoContainer.className = "toDoContainer";
document.body.appendChild(toDoContainer);

addToDoButton.addEventListener("click", () => {
  let removeOne = document.createElement("BUTTON");
  removeOne.className = "removeOne";

  let buttonText = document.createTextNode("X");
  removeOne.appendChild(buttonText);
  toDoContainer.appendChild(removeOne);

  let para = document.createElement("p");
  para.innerText = inputField.value;
  toDoContainer.appendChild(para);

  inputField.value = "";

  para.style.color = "red";
  para.style.fontSize = "25px";
  para.style.display = "inline-block";
  para.style.margin = "25px";

  removeAll.addEventListener("click", () => {
    toDoContainer.removeChild(para);
    removeOne.remove();
  });

  removeOne.addEventListener("click", () => {
    toDoContainer.removeChild(para);
    removeOne.remove();
  });
});
