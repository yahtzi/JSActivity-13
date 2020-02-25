let button = document.querySelector("button");

function buttonClick() {
  alert("Fool!");
  button.removeEventListener("click", buttonClick);
}
button.addEventListener("click", buttonClick);
