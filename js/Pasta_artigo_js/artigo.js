///////////////////////////////////////////////////////////
const librasButton = document.getElementById("librasButton");
const area_acessibilidade = document.querySelector(".acessibilidade")
const close_area = document.querySelector(".close-area")
const backButton = document.querySelector(".back-step");
var audioContainer = document.getElementById('audioContainer');
var acessibilidadeContainer = document.getElementById('acessibilidadeContainer');

// Adiciona um ouvinte de evento para o evento de rolagem
window.addEventListener('scroll', function() {
  // Obtém a posição do contêiner "acessibilidade"
  var containerRect = acessibilidadeContainer.getBoundingClientRect();

  // Define um limite para quando o áudio deve parar de descer
  var limit = 1200;

  // Atualiza a posição do elemento de áudio com base no limite
  if (containerRect.top < (-940)) {
    area_acessibilidade.style.display = 'none'; 
  } else {
    area_acessibilidade.style.display = 'block'; // Exibe o áudio
  
  }
});



librasButton.addEventListener("click", function () {
    area_acessibilidade.classList.toggle("hide")
    librasButton.classList.toggle("hide")
    
});
close_area.addEventListener("click", e => {
    area_acessibilidade.classList.toggle("hide")
    librasButton.classList.toggle("hide")
})
backButton.addEventListener("click", function () {
  window.history.back();
});