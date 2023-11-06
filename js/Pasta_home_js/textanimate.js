var
  words = ['BEM VINDO AO TEC NOTÍCIAS'],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 20,
  speedd = 100;

var wordflick = function(){
  
  setInterval(function(){
      if (forwards) {
        if(offset >= words[i].length){
          
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
            
          }
        }
      }
      else {
         if(offset == 0){
            forwards = true;
            i++;
            offset = 0;
            if(i >= len){
              i=0;
            } 
         }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
         
        }
        else {
          if (offset == 25){setTimeout(x => offset--,4000)}
          else{
            offset--;}
        }
      }
    	$('.word').text(part);
  },speedd);
};

$(document).ready(function(){
  wordflick();
});

// 

let element = document.querySelector(".word");

// Função para adicionar a classe da animação
function addAnimationClass() {
  element.classList.add('animate');
}

// Iniciar a animação após um certo período de tempo
setInterval(() => {
  addAnimationClass(); // Adiciona a classe da animação
  setTimeout(() => {
    console.log('foi');
    element.classList.remove('animate'); // Remove a classe da animação após 2 segundos
  }, 9000);
}, 6000);

