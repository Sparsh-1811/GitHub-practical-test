// Updates the footer year and provides a small welcome interaction.
document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.querySelector("#current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const welcomeButton = document.querySelector(".button");
  if (welcomeButton) {
    welcomeButton.addEventListener("click", () => {
      console.log("Thanks for visiting my portfolio!");
    });
  }
});
