document.addEventListener('DOMContentLoaded', function () {
    
    // Obtenção dos elementos HTML
    const searchInput = document.getElementById('autocomplete-input');
    const searchIcon = document.querySelector('.btn-search');
    const searchArea = document.querySelector('.search-area');
    const btn_search = document.querySelector('.btn-search')
    const searchButton = document.getElementById('search-button');
    const cancelButton = document.getElementById('cancel-button');

    // Evento de clique no ícone de pesquisa
    searchButton.addEventListener('click', () => {
        console.log(searchInput);
        // Alternar a visibilidade da área de pesquisa
        searchArea.classList.toggle('hide');
        searchButton.classList.toggle('hide')
        // Focar no campo de pesquisa
        searchInput.focus();
       
    });

    // Evento de clique no botão de pesquisa (com ícone)
    searchButton.addEventListener('click', () => {
        realizarPesquisa();
    });

    // Evento de clique no botão de cancelar (com ícone)
    cancelButton.addEventListener('click', () => {
        cancelarPesquisa();
    });

    // Função para realizar a pesquisa
    function realizarPesquisa() {
        // Adicionar lógica para realizar a pesquisa com base no valor do campo de pesquisa.
        console.log('Pesquisando: ' + searchInput.value);
    }

    // Função para cancelar a pesquisa
    function cancelarPesquisa() {
        // Ocultar a área de pesquisa
        searchArea.classList.toggle('hide');
        // Ative o button de pesquisa novamente
        searchButton.classList.toggle('hide')
        // Limpar o valor do campo de pesquisa
        searchInput.value = '';
    }
});

// EVENTOS 
function checkScreenSize() {
    const element = document.querySelectorAll(".remove-align");

    // Verifique a largura da janela
    if (window.innerWidth < 600) {
        // Se a largura da janela for menor que 600 pixels, remova a classe "valing-wrapper"
        element.forEach(e => {

            e.classList.remove("valign-wrapper");
        })
    } else {
        // Caso contrário, adicione a classe "valing-wrapper"
        element.forEach(e => {
        e.classList.add("valign-wrapper");
        })
    }
}

// Execute a função quando a página carregar e quando a janela for redimensionada
window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);

// button top
document.addEventListener('DOMContentLoaded', function() {
    let topButton = document.getElementById('topButton');
    topButton.style.display = 'none';
  
    window.addEventListener('scroll', function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = 'block';
      } else {
        topButton.style.display = 'none';
      }
    });
  
    topButton.addEventListener('click', function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });
  
//   button libra
