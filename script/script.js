// O QUE?
// 1 - Botão de "+ " se torna "-".
// 2 - O texto aparece em baixo do título das perguntas. // Concluído!

// COMO?
// 1 - Substituir a imagem do botão "+" para uma outro imagem de "-".
// 2 - Usar o "display: block" no texto.    //  concluído!

// QUANDO?
// 1 - O usuário clicar ou no título do texto ou na imagem de "+".
// ---------------------------------------------------------------------------------

const questionBoxes = document.getElementsByClassName("question-boxes");
const title = document.getElementsByClassName("title");

for (const item of questionBoxes) {
  item.addEventListener("click", () => {
    const image = item.getElementsByClassName("image")[0];
    const text = item.getElementsByClassName("text")[0];
    const image2 = item.getElementsByClassName("image-icon")[0];
    text.classList.toggle("hidden");
    image.classList.toggle("image-icon");
    image2.classList.toggle("hidden");
  });
}
