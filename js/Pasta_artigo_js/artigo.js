///////////////////////////////////////////////////////////
const librasButton = document.getElementById("librasButton");
const area_acessibilidade = document.querySelector(".acessibilidade")
const close_area = document.querySelector(".close-area")
const backButton = document.querySelector(".back-step");

var acessibilidadeContainer = document.getElementById('acessibilidadeContainer');

// Adiciona um ouvinte de evento para o evento de rolagem
window.addEventListener('scroll', function() {
  // Obtém a posição do contêiner "acessibilidade"
  var containerRect = acessibilidadeContainer.getBoundingClientRect();

  // Define um limite para quando o áudio deve parar de descer
  var limit = 1200;

  // Atualiza a posição do elemento de áudio com base no limite
  if (containerRect.top < (-940)) {
    // area_acessibilidade.classList.toggle("hide")
  } else {
    // area_acessibilidade.classList.toggle("hide")
  
  }
});



librasButton.addEventListener("click", function () {
    area_acessibilidade.classList.toggle("hide")
    librasButton.classList.toggle("hide")
    area_acessibilidade.classList.remove("slide-efect"); // Remove a classe antes de adicioná-la novamente
    setTimeout(() => {
      area_acessibilidade.classList.add("slide-efect");
    }, 10);
    // area_acessibilidade.classList.toggle("slide-efect")
    
});
close_area.addEventListener("click", e => {
    area_acessibilidade.classList.toggle("hide")
    librasButton.classList.toggle("hide")
    area_acessibilidade.classList.toggle("slide-efect")
    
})
backButton.addEventListener("click", function () {
  window.history.back();
});
