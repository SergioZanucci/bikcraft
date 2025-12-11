// Garantimos que os elementos estejam no DOM (script colocado ao final do body)
  const botao = document.querySelector("#botao");
  const menu = document.querySelector("#menu");

  // Proteção: verifique se existem os elementos
  if (botao && menu) {
    // Inicial: no mobile o menu começa escondido via CSS. Aqui só alternamos a classe.
    botao.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
}



