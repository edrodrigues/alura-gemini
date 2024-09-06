function pesquisar() {
  let section = document.getElementById("card");
  let currentIndex = 0;

  function trocarConteudo() {
      currentIndex = (currentIndex + 1) % dados.length;

      let html = `
          <div class="item-card"> 
              <h2>
                  <a href="#" target="_blank">${dados[currentIndex].titulo}</a>
              </h2>
              <p class="descricao-meta">${dados[currentIndex].descricao}</p>
          </div>
      `;

      section.innerHTML = html;
  }

  trocarConteudo();
  setInterval(trocarConteudo, 8000);
}

document.addEventListener('DOMContentLoaded', pesquisar);