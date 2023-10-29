document.addEventListener("DOMContentLoaded", function() {
    const powerButton = document.getElementById("powerButton");
    const header = document.querySelector(".hidden-header");
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    // const footer = document.querySelector(".footer");
  
    if (powerButton) {
      powerButton.addEventListener("click", () => {
        main.classList.remove("main");
        header.classList.remove("hidden-header");
        container.style.display = "none";
      });
    }
  });
  
  