// Zewnętrzny skrypt JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Ustawienie display: none na elemencie z klasą .test-css
  const element = document.querySelector(".test-css");
  if (element) {
    element.style.display = "none";
  }
});
