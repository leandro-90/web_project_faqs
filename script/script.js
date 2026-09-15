const questions = document.querySelector(".questions");
const text = questions.querySelector("p");

questions.addEventListener("click", (event) => {
  event.preventDefault();
  text.style.display = "none";
});
