document.addEventListener("DOMContentLoaded", function () {
  const powerButton = document.getElementById("powerButton");
  const header = document.querySelector(".hidden-header");
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  const footer = document.querySelector(".footer");

  if (powerButton) {
    powerButton.addEventListener("click", () => {
      main.classList.remove("main");
      header.classList.remove("hidden-header");
      container.style.display = "none";
      footer.style.position = "relative";
    });
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   const reloadLink = document.getElementById("reloadLink");

//   if (reloadLink) {
//     reloadLink.addEventListener("click", function (event) {
//       event.preventDefault(); // Prevent the default link behavior
//       window.location.reload(); // Reload the page
//     });
//   }
// });
