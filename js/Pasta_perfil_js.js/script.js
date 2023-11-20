
const dados = `<div class="header">
<h3 class="center">Dados Pessoais</h3>
</div>

<div class="container dados-area">
<form class="col s12">
  <div class="row form-input">
    <div class="input-field col s6">
      <input placeholder=" " id="first_name" type="text" class="validate" value="João" >
      <label for="first_name">Nome</label>
    </div>
    <div class="input-field col s6">
      <input id="last_name" type="text" class="validate" value="Santos">
      <label for="last_name">Sobrenome</label>
    </div>
  </div>
  <div class="row form-input">
    <div class="input-field col s12">
      <input id="disabled" type="text" class="validate" value="+55 99 99999999">
      <label for="disabled">Telefone</label>
    </div>
  </div>
  <div class="row form-input">
    <div class="input-field col s12">
      <input id="email" type="email" class="validate" value="exemplo@email.com">
      <label for="email">E-mail</label>
    </div>
  </div>

  <div class="row form-input">
    <div class="input-field col s12">
      <input id="city" type="text" class="validate" value="São Paulo">
      <label for="city">Cidade</label>
    </div>
  </div>
  <div class="row form-input">
    <div class="input-field col s12">
      <input id="address" type="text" class="validate" value="Rua Exemplo, 123">
      <label for="address">Endereço</label>
    </div>
  </div>
  <div class="row form-input">
    <div class="input-field col s12">
        <a href="#" class="waves-effect waves-light purple-text lighten-5">Ver Mais</a>


    </div>
  </div>
 
  <!-- Outros campos do formulário aqui -->

  <div class="row center">
    <button class="btn btn-salvar waves-effect waves-light  purple darken-4" type="submit">SALVAR</button>
  </div>
</form>
</div>`
let favoritos_template = `<div class="row card card-favorito">
<img src="../img/Pasta_home_img/cultura-da-inovacao.jpg" alt="" class="col xl4">
<div class="col xl8">
    <div class="row" style="margin-bottom: 0;">
        <h4 class="col xl12 titulo-favorito">titulo sobre o artigo</h4>
        <p class="col xl12">titulo sobre o artigo Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolo...</p>
        <span class="col xl4 favoritos-info">autor</span> 
        <span class="col xl14 favoritos-info">data</span><span class="col xl4">                <i  class="delete-icon material-icons red-text text-darken-4 ">delete</i>
        </span>
        
    </div>
</div>
</div>`

const favoritos = document.querySelector(".favoritos-area")
const btn_favoritos = document.querySelector("#btn-favoritos")
const btn_dados = document.querySelector("#btn-dados")
const dados_area = document.querySelector(".dados")
const seguranca_area = document.querySelector(".segurança")
const btn_seguranca = document.querySelector("#btn-segurança")
const close_aba = document.querySelector(".close-page")


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

btn_dados.addEventListener("click", e => {
  seguranca_area.classList.add("hide")
  dados_area.classList.remove("hide")
  window.scrollTo({ top: 120, behavior: 'smooth' });

  // Adiciona um pequeno atraso para alterar o estilo após a animação de rolagem
  setTimeout(() => {
    header.style.position = 'relative';
  }, 400); // Altere o valor do atraso conforme necessário
});


close_aba.addEventListener("click", e => {
  clearArea()
})



function clearArea(){
 dados_area.classList.add("hide")
 seguranca_area.classList.add("hide")
 favoritos.innerHTML = ''
  // document.querySelector("").innerHTML = ''
}



btn_favoritos.addEventListener("click", e =>{
 clearArea()
 favoritos.innerHTML += `                                <div class="header">
 <h3 class="center">Favoritos</h3>
</div>
<div class="favoritos-area">`
 for (let i = 1; i<4; i++) {
  favoritos.innerHTML += favoritos_template
 }
 favoritos.innerHTML += `<div  class="col xl12 center-align">
 <i class="material-icons purple-text text-darken-4 close-page Tiny">arrow_drop_down       
   </i>
</div>
<div class="col xl12">
<div class="container">
    <div class="row container-right">
        <div class="row">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator"
                        src="https://i0.wp.com/www.phdvirtual.com.br/wp-content/uploads/2019/12/Quanto-Custa-Anunciar-no-Google-Facebook-e-Instagram-Ads.jpg?resize=1080%2C480&ssl=1">
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4"><i
                            class="material-icons right">more_vert</i></span>
                    <p><a href="#">Publicidade</a></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Card Title<i
                            class="material-icons right">close</i></span>
                    <p>Para remover faça a assinatura</p>
                    <div class="row">
                        <div class="col s12 m5">
                            <div class="card-panel teal">
                                <span class="white-text center">
                                    <a href=""
                                        style="color: white; font-size: 1.2em; text-align: center;">Assinar</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>  `
window.scrollTo({ top: 120, behavior: 'smooth' });

// Adiciona um pequeno atraso para alterar o estilo após a animação de rolagem
setTimeout(() => {
  header.style.position = 'relative';
}, 400); // Altere o valor do atraso conforme necessário
})


btn_seguranca.addEventListener("click", e =>{
  clearArea()
  favoritos.innerHTML = ''
  console.log(seguranca_area);
  seguranca_area.classList.remove("hide")
  window.scrollTo({ top: 120, behavior: 'smooth' });

  // Adiciona um pequeno atraso para alterar o estilo após a animação de rolagem
  setTimeout(() => {
    header.style.position = 'relative';
  }, 400); // Altere o valor do atraso conforme necessário
 })
 