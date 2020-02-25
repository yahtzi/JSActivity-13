let button = document.querySelector("button");

function buttonClick() {
  alert("Wow, do you always do what the screen tells you? What a loser.");
  button.removeEventListener("click", buttonClick);
}
button.addEventListener("click", buttonClick);

let link = document.querySelector("a");
link.addEventListener("click", event => {
    event.preventDefault();
    alert("You're trapped stupid.");
});


 