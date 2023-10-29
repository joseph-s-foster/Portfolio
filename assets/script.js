document.addEventListener("DOMContentLoaded", function () {
  const powerButton = document.getElementById("powerButton");
  const header = document.querySelector(".hidden-header");
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  const footer = document.querySelector(".footer");

  if (powerButton) {
    powerButton.addEventListener("click", () => {
      main.classList.remove("main");
      main.classList.add("fade-in"); // Add the fade-in class
      header.classList.remove("hidden-header");
      container.style.display = "none";
      footer.style.position = "relative";
    });
  }
});

