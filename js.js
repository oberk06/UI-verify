const inputs = document.querySelectorAll("input");
const icon = document.querySelector("i");

inputs.forEach((item, index) => {
  item.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9") {
      inputs[index].value = "";
      setTimeout(() => {
        inputs[index + 1].focus();
      }, 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => {
        inputs[index - 1].focus(), 10;
      });
    }
  });
});

icon.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    icon.classList = "fa-solid fa-sun fa-2x";
  } else {
    icon.classList = "fa-solid fa-moon fa-2x";
  }

  localStorage.setItem("arkaplan", document.body.classList);
  localStorage.setItem("icon", icon.classList);
});

if (localStorage.getItem("arkaplan")) {
  document.body.classList.add(localStorage.getItem("arkaplan"));
  icon.classList = localStorage.getItem("icon");
}
