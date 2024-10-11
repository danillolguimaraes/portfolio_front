document.addEventListener("DOMContentLoaded", function () {
  // Função para escrever o texto letra por letra
  function escreverTexto(elementId: string, texto: string, velocidade: number) {
    const elemento = document.getElementById(elementId);
    if (!elemento) return; // Verifica se o elemento existe

    let index = 0;

    // Função interna que adiciona uma letra ao elemento
    const escrever = () => {
      if (index < texto.length) {
        elemento.innerHTML += texto.charAt(index); // Adiciona uma letra
        index++;
        setTimeout(escrever, velocidade); // Chama a função novamente após o tempo especificado
      }
    };

    escrever(); // Inicia a escrita
  }

  // Chame as funções para cada texto que deseja exibir
  function iniciarAnimacao() {
    escreverTexto("saudacao", "Olá, meu nome é", 150); // Escreve "Olá, meu nome é"

    // Espera o texto anterior terminar antes de começar a escrever o próximo
    setTimeout(() => {
      escreverTexto("meuNome", "Danillo Guimarães", 150); // Escreve "Danillo Guimarães"
    }, 3000); // Espera 3 segundos antes de começar

    setTimeout(() => {
      escreverTexto("profissao", "Desenvolvedor Front End.", 150); // Escreve "Desenvolvedor Front End"
    }, 6000); // Espera 6 segundos antes de começar
  }

  // Inicia a animação ao carregar a página
  iniciarAnimacao();


});

