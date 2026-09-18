// O QUE?
// 1 - Botão de "+ " se torna "-".
// 2 - O texto aparece em baixo do título das perguntas. // Concluído!
// 3 - Deixa três question ocultas, enquanto uma ativa.

// COMO?
// 1 - Substituir a imagem do botão "+" para uma outro imagem de "-".
// 2 - Usar o "display: block" no texto.    //  concluído!
// 3 - Usar active para trocar botões com mais de um bloco ativo.

// QUANDO?
// 1 - O usuário clicar ou no título do texto ou na imagem de "+".
// 2 - O usuário clicar em mais de um botão.

// ---------------------------------------------------------------------------------

const question = document.getElementsByClassName("question-boxes"); // Seleciona o bloco das questions.
const title = document.getElementsByClassName("title"); // Seleciona o título.
let count = 0;

for (const item of question) {
  // Percorre cada item dentro de questions.
  const titleBox = item.getElementsByClassName("title-image")[0];

  titleBox.addEventListener("click", () => {
    // Adiciona um ouvinte de evento para cada item.
    
    console.log(item);
    const image = item.getElementsByClassName("icon-plus")[0];
    console.log(image);
    const image2 = item.getElementsByClassName("icon-minus")[0];
    console.log(image2);
    const text = item.getElementsByClassName("text")[0];
    console.log(text);
    item.classList.toggle("active");
    image.classList.toggle("hidden");
    image2.classList.toggle("hidden");
    
  });
}
