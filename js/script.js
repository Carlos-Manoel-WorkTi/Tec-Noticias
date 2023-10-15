document.addEventListener('DOMContentLoaded', function () {
    // Obtenção dos elementos HTML
    const searchInput = document.getElementById('search');
    const searchIcon = document.querySelector('.btn-search');
    const searchArea = document.querySelector('.search-area');
    const searchButton = document.getElementById('search-button');
    const cancelButton = document.getElementById('cancel-button');
    const links_nav = document.querySelectorAll('.links-nav');

    // Evento de clique no ícone de pesquisa
    searchIcon.addEventListener('click', () => {
        console.log('clicou');
        // Alternar a visibilidade da área de pesquisa
        searchArea.classList.toggle('hide');
        // Focar no campo de pesquisa
        searchInput.focus();
        // Alternar a visibilidade dos elementos com a classe 'links-nav'
        links_nav.forEach(x => x.classList.toggle('hide'));
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
        // Alternar a visibilidade dos elementos com a classe 'links-nav'
        links_nav.forEach(x => x.classList.toggle('hide'));
        // Ocultar a área de pesquisa
        searchArea.classList.add('hide');
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
