const buttons = document.querySelectorAll(".button");

document.body.addEventListener("click", (e) => {
  const buttonTarget = e.target.closest(".button");

  if (buttonTarget) {
    buttonTarget.classList.toggle("active");
    buttonTarget.firstElementChild.src = buttonTarget.classList.contains(
      "active"
    )
      ? "./images/vector_minus.svg"
      : "./images/vector_plus.svg";
  } else {
    for (let button of buttons) {
      button.classList.remove("active");
      button.firstElementChild.src = "./images/vector_plus.svg";
    }
  }
});
