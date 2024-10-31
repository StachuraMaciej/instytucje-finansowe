window.onload = function () {
  // Funkcja do ukrywania komponentów
  function hideComponent(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      element.style.display = "none";
    });
  }

  // Przykłady użycia
  hideComponent(".test-css"); // Ukryje wszystkie komponenty z klasą "test-css"
};
