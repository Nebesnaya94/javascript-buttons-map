const buttons = document.querySelectorAll(".button");

document.body.addEventListener("click", (e) => {
  const buttonTarget = e.target.closest(".button");

  if (buttonTarget) {
    buttonTarget.classList.toggle("active");
  } else {
    for (let button of buttons) {
      button.classList.remove("active");
    }
  }
});
