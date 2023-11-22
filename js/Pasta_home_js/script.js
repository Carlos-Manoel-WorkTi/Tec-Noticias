
    const menuIcon = document.getElementById('menu-icon');
const mobileDemo = document.querySelector('#mobile-demo');
window.addEventListener("click", e => {
const menuIcon = document.getElementById("menu-icon");

if (e.target.id === "menu-icon") {
  menuIcon.textContent = 'close';
  menuIcon.classList.remove("white", "white-text");
  menuIcon.classList.add("red-text", "red");
} else if (!menuIcon.contains(e.target) ) {
  menuIcon.textContent = 'menu';
  menuIcon.classList.remove("red-text", "red");
  menuIcon.classList.add("white", "white-text");
}
});


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

  // Adicione um event listener para o clique no botão
topButton.addEventListener('click', function() {
    // Role a página de volta ao topo de forma suave
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rola de forma suave
    });
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

function verificarPosicao() {
    const elemento = document.querySelector('.news-title');
 
  
    // Verifica a posição em relação à largura da janela (width)
    if (window.innerWidth < 600) {
        
        elemento.style.display = 'none'; // Torna o elemento invisível
        document.querySelector('.news-button').style.position = 'absolute'
        document.querySelector('.news-button').style.top = 310 + 'px'
    }
    else {
        elemento.style.display = 'block' // Torna o elemento visível
        document.querySelector('.news-button').style.position = 'relative'
        document.querySelector('.news-button').style.top = 0
    }

    if(window.innerWidth < 400){
        console.log(document.querySelector('.hide-450'));
        document.querySelector('.hide-450').style.display = "none"
    }else{
        document.querySelector('.hide-450').style.display = "block"
    }
}
window.addEventListener("resize", verificarPosicao);

const container = document.querySelector(".logo-container");
const logos = document.querySelectorAll(".logos");
const logoWidth = logos[0].offsetWidth +1200; // Largura da logo com margem

let scrollPosition = -logoWidth; // Iniciar próximo ao primeiro logotipo
const speed = 1.2; // Velocidade do scroll

// Configurar a posição inicial do contêiner
container.style.transform = `translateX(${scrollPosition}px)`;

function scroll() {
  scrollPosition -= speed;
  container.style.transform = `translateX(${scrollPosition + 0}px)`;

  if (scrollPosition <= -logoWidth) {
    // Mova o primeiro elemento ao final da lista
    const firstLogo = container.firstElementChild;
    container.appendChild(firstLogo);
    scrollPosition += logoWidth; // Ajuste a posição para manter a suavidade da rolagem
  }

  requestAnimationFrame(scroll);
}

let lastScrollTop = 0;
const header = document.querySelector(".nav-extended");
console.log(header);
window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    header.style.position = 'relative'; // Adiciona a classe 'hidden' se o scroll for para baixo
  } else {
    header.style.position = 'fixed'; // Remove a classe 'hidden' se o scroll for para cima
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

scroll();

