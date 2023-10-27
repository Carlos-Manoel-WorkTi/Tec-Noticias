// document.addEventListener('DOMContentLoaded', function () {

//     // Obtenção dos elementos HTML
//     const searchInput = document.getElementById('autocomplete-input');
//     const searchIcon = document.querySelector('.btn-search');
//     const searchArea = document.querySelector('.search-area');
//     const btn_search = document.querySelector('.btn-search')
//     const searchButton = document.getElementById('search-button');
//     const cancelButton = document.getElementById('cancel-button');

//     // Evento de clique no ícone de pesquisa
//     searchButton.addEventListener('click', () => {
//         console.log(searchInput);
//         // Alternar a visibilidade da área de pesquisa
//         searchArea.classList.toggle('hide');
//         searchButton.classList.toggle('hide')
//         // Focar no campo de pesquisa
//         searchInput.focus();
       
//     });

//     // Evento de clique no botão de pesquisa (com ícone)
//     searchButton.addEventListener('click', () => {
//         realizarPesquisa();
//     });

//     // Evento de clique no botão de cancelar (com ícone)
//     cancelButton.addEventListener('click', () => {
//         cancelarPesquisa();
//     });

//     // Função para realizar a pesquisa
//     function realizarPesquisa() {
//         // Adicionar lógica para realizar a pesquisa com base no valor do campo de pesquisa.
//         console.log('Pesquisando: ' + searchInput.value);
//     }

//     // Função para cancelar a pesquisa
//     function cancelarPesquisa() {
//         // Ocultar a área de pesquisa
//         searchArea.classList.toggle('hide');
//         // Ative o button de pesquisa novamente
//         searchButton.classList.toggle('hide')
//         // Limpar o valor do campo de pesquisa
//         searchInput.value = '';
//     }
// });

// // EVENTOS 
// function checkScreenSize() {
//     const element = document.querySelectorAll(".remove-align");

//     // Verifique a largura da janela
//     if (window.innerWidth < 600) {
//         // Se a largura da janela for menor que 600 pixels, remova a classe "valing-wrapper"
//         element.forEach(e => {

//             e.classList.remove("valign-wrapper");
//         })
//     } else {
//         // Caso contrário, adicione a classe "valing-wrapper"
//         element.forEach(e => {
//         e.classList.add("valign-wrapper");
//         })
//     }
// }

// // Execute a função quando a página carregar e quando a janela for redimensionada
// window.addEventListener("load", checkScreenSize);
// window.addEventListener("resize", checkScreenSize);

// // button top
// document.addEventListener('DOMContentLoaded', function() {
//     let topButton = document.querySelector('.topButton');
//     topButton.style.display = 'none';
  
//     window.addEventListener('scroll', function() {
//       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         topButton.style.display = 'block';
//       } else {
//         topButton.style.display = 'none';
//       }
//     });
  
//     topButton.addEventListener('click', function() {
//       document.body.scrollTop = 0;
//       document.documentElement.scrollTop = 0;
//     });
//   });
  

//       // Selecione o elemento do vídeo
//       const videoFrame = document.querySelector(".div-video");
    
//       videoFrame.addEventListener("click", function() {
//           console.log('fpo');
//         // Acesse o estilo do elemento .video-podcast para remover a animação de sombra
//         const videoPodcast = document.querySelector(".div-video");
//         // Remova a classe 'float' para desativar a animação
//         videoPodcast.classList.remove('float');
//       });
      
// Quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function () {
    // Obtenção dos elementos HTML
    const searchInput = document.getElementById('autocomplete-input'); // Campo de pesquisa
    const searchArea = document.querySelector('.search-area'); // Área de pesquisa
    const searchButton = document.getElementById('search-button'); // Botão de pesquisa
    const cancelButton = document.getElementById('cancel-button'); // Botão de cancelar pesquisa
    const topButton = document.querySelector('.topButton'); // Botão para voltar ao topo
   
    // Evento de clique no botão de pesquisa (com ícone)
    searchButton.addEventListener('click', () => {
        // Alternar a visibilidade da área de pesquisa
        searchArea.classList.toggle('hide');
        searchButton.classList.toggle('hide');
        // Focar no campo de pesquisa
        searchInput.focus();
    });

    // Evento de clique no botão de pesquisa (com ícone)
    searchButton.addEventListener('click', realizarPesquisa);

    // Evento de clique no botão de cancelar (com ícone)
    cancelButton.addEventListener('click', cancelarPesquisa);

    // Função para realizar a pesquisa
    function realizarPesquisa() {
        // Adicionar lógica para realizar a pesquisa com base no valor do campo de pesquisa.
        console.log('Pesquisando: ' + searchInput.value);
    }

    // Função para cancelar a pesquisa
    function cancelarPesquisa() {
        // Ocultar a área de pesquisa
        searchArea.classList.toggle('hide');
        // Ativar o botão de pesquisa novamente
        searchButton.classList.toggle('hide');
        // Limpar o valor do campo de pesquisa
        searchInput.value = '';
    }

    // Função para verificar o tamanho da tela
    function checkScreenSize() {
        const elements = document.querySelectorAll(".remove-align");
        const isSmallScreen = window.innerWidth < 600;

        elements.forEach(element => {
            if (isSmallScreen) {
                // Se a largura da janela for menor que 600 pixels, remova a classe "valing-wrapper"
                element.classList.remove("valign-wrapper");
            } else {
                // Caso contrário, adicione a classe "valing-wrapper"
                element.classList.add("valign-wrapper");
            }
        });
    }

    // Execute a função quando a página carregar e quando a janela for redimensionada
    window.addEventListener("load", checkScreenSize);
    window.addEventListener("resize", checkScreenSize);

    // Configuração do botão para voltar ao topo
    topButton.style.display = 'none';

    window.addEventListener('scroll', function() {
        // Mostrar o botão quando a rolagem atingir uma certa posição
        topButton.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? 'block' : 'none';
    });

    topButton.addEventListener('click', function() {
        // Quando o botão for clicado, role a página de volta ao topo
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

   
});
document.addEventListener('DOMContentLoaded', function () {
    const videoContainer = document.getElementById('video-container');

    videoContainer.addEventListener('click', function () {
        videoContainer.classList.remove('float');
    });
});
const video_container = document.querySelector('#video-container')
const div_video = document.querySelector('.div-video')
video_container.addEventListener('click',e => {
  console.log(e);
  video_container.innerHTML = ` <iframe class="col s12 xl12 l12 video-podcast" src="https://www.youtube.com/embed/7XX-ZwIYnV4?rel=0" frameborder="0" allowfullscreen ></iframe>`

})