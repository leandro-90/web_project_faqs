const questions = document.querySelector(".questions"); //  Seleciona o pai principal.

const imagem1 = questions.querySelector(".image-1");
const imagem2 = questions.querySelector(".image-2"); // ---------------------------------------
const imagem3 = questions.querySelector(".image-3"); //  Seleciona cada imagem de question-box.
const imagem4 = questions.querySelector(".image-4"); // ---------------------------------------

// -----------------------------------------------------------------------------------------

const titleImage1 = questions.querySelector(".title-image1"); //  Selecoina o título 1.
console.log(titleImage1);

const p1 = questions.querySelector(".p1"); //  Seleciona o parágrafo 1.
console.log(p1);

titleImage1.addEventListener("click", () => {
  console.log(p1);
  p1.style.display = "block";
  p2.style.display = "none";
  p3.style.display = "none";
  p4.style.display = "none";
});

imagem1.addEventListener("click", () => {
  console.log(p1);
  p1.style.display = "block";
  p2.style.display = "none";
  p3.style.display = "none";
  p4.style.display = "none";
});

// -----------------------------------------------------------------------------------------

const titleImage2 = questions.querySelector(".title-image2"); //  Selecoina o título 2.
console.log(titleImage2);

const p2 = questions.querySelector(".p2"); //  Seleciona o parágrafo 2.
console.log(p2);

titleImage2.addEventListener("click", () => {
  console.log(p2);
  p1.style.display = "none";
  p2.style.display = "block";
  p3.style.display = "none";
  p4.style.display = "none";
});

imagem2.addEventListener("click", () => {
  console.log(p1);
  p1.style.display = "block";
  p2.style.display = "none";
  p3.style.display = "none";
  p4.style.display = "none";
});

// -----------------------------------------------------------------------------------------

const titleImage3 = questions.querySelector(".title-image3"); //  Selecoina o título 3.
console.log(titleImage3);

const p3 = questions.querySelector(".p3"); //  Seleciona o parágrafo 3.
console.log(p3);

titleImage3.addEventListener("click", () => {
  console.log(p3);
  p1.style.display = "none";
  p2.style.display = "none";
  p3.style.display = "block";
  p4.style.display = "none";
});

imagem3.addEventListener("click", () => {
  console.log(p1);
  p1.style.display = "block";
  p2.style.display = "none";
  p3.style.display = "none";
  p4.style.display = "none";
});

// -----------------------------------------------------------------------------------------

const titleImage4 = questions.querySelector(".title-image4"); //  Selecoina o título 3.
console.log(titleImage4);

const p4 = questions.querySelector(".p4"); //  Seleciona o parágrafo 3.
console.log(p4);

titleImage4.addEventListener("click", () => {
  console.log(p4);
  p1.style.display = "none";
  p2.style.display = "none";
  p3.style.display = "none";
  p4.style.display = "block";
});

imagem4.addEventListener("click", () => {
  console.log(p1);
  p1.style.display = "block";
  p2.style.display = "none";
  p3.style.display = "none";
  p4.style.display = "none";
});

// ----------------------------------------------------------------------------------------------------------- //
