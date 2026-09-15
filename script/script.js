const questions = document.querySelector(".questions"); //  Seleciona o pai principal.

// -----------------------------------------------------------------------------------------

const title1 = questions.querySelector(".title-1"); //  Selecoina o título 1.
console.log(title1);

const p1 = questions.querySelector(".p1"); //  Seleciona o parágrafo 1.
console.log(p1);

title1.addEventListener("click", () => {
  console.log(p1);
  p1.style.display = "block";
  p2.style.display = "none";
  p3.style.display = "none";
  p4.style.display = "none";

});

// -----------------------------------------------------------------------------------------

const title2 = questions.querySelector(".title-2"); //  Selecoina o título 2.
console.log(title2);

const p2 = questions.querySelector(".p2"); //  Seleciona o parágrafo 2.
console.log(p2);

title2.addEventListener("click", () => {
  console.log(p2);
  p1.style.display = "none";
  p2.style.display = "block";
  p3.style.display = "none";
  p4.style.display = "none";
});

// -----------------------------------------------------------------------------------------

const title3 = questions.querySelector(".title-3"); //  Selecoina o título 3.
console.log(title3);

const p3 = questions.querySelector(".p3"); //  Seleciona o parágrafo 3.
console.log(p3);

title3.addEventListener("click", () => {
  console.log(p3);
  p1.style.display = "none";
  p2.style.display = "none";
  p3.style.display = "block";
  p4.style.display = "none";
});

// -----------------------------------------------------------------------------------------

const title4 = questions.querySelector(".title-4"); //  Selecoina o título 3.
console.log(title4);

const p4 = questions.querySelector(".p4"); //  Seleciona o parágrafo 3.
console.log(p4);

title4.addEventListener("click", () => {
  console.log(p4);
  p1.style.display = "none";
  p2.style.display = "none";
  p3.style.display = "none";
  p4.style.display = "block";
});

// ----------------------------------------------------------------------------------------------------------- //
