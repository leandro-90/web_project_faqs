// O QUE?
// 1 - Botão de "+ " se torna "-".
// 2 - O texto aparece em baixo do título das perguntas. // Concluído!

// COMO?
// 1 - Substituir a imagem do botão "+" para uma outro imagem de "-".
// 2 - Usar o "display: block" no texto.    //  concluído!

// QUANDO?
// 1 - O usuário clicar ou no título do texto ou na imagem de "+".

// ---------------------------------------------------------------------------------

const question = document.getElementsByClassName("question-boxes"); // Seleciona o bloco das questions.
const title = document.getElementsByClassName("title"); // Seleciona o título.

for (const item of question) {
  // Percorre cada item dentro de questions.

  const title = item.getElementsByClassName("title-image")[0];
  
  title.addEventListener("click", () => {
    // Adiciona um ouvinte de evento para cada item.
    console.log(item);
    const image = item.getElementsByClassName("icon-plus")[0];
    console.log(image);
    const image2 = item.getElementsByClassName("icon-minus")[0];
    console.log(image2);
    const text = item.getElementsByClassName("text")[0];
    console.log(text);
    text.classList.toggle("display");
    image.classList.toggle("display");
    image.classList.toggle("hidden");
    image2.classList.toggle("hidden");
    image2.classList.toggle("display");
  });
}
