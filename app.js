function pesquisar() {
    let section = document.getElementById("card");
    let currentIndex = 0; // Índice do dado atual
  
    function trocarConteudo() {
      // Limita o índice ao tamanho do array de dados
      currentIndex = (currentIndex + 1) % dados.length;
  
      // Cria o conteúdo HTML para o dado atual
      let html = `
        <div class="item-card"> 
          <h2>
            <a href="#" target = "_blank"> ${dados[currentIndex].titulo} </a>
          </h2>
          <p class="descrição-meta">${dados[currentIndex].descricao} </p>
        </div>
      `;
  
      section.innerHTML = html;
    }
  
    // Chama a função trocarConteudo() inicialmente e depois a cada 4 segundos
    trocarConteudo();
    setInterval(trocarConteudo, 4000);
  }

  document.addEventListener('DOMContentLoaded', () => {
    pesquisar();
  })