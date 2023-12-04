const addnoticias = document.querySelector(".addnoticias");
const noticias = document.querySelector(".margem-mobile-noticias");

addnoticias.innerHTML += `   <a href="src/artigo.html">
<article>
<div class="col s4 m6 l4 xl4">
<div class="news-card" >
<img class="img-noticias" src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-abstrato-de-inteligencia-artificial-ia-aprendizado-de-maquina-evolucao-da-inteligencia-artificial-alta-tecnologia-tecnologia-de-ponta-robotica-cognitiva_335657-483.jpg?w=2000" alt="Imagem da notícia 5">
<div class="news-content">
<h3>A realidade Virtual: Uma Janela para Mundos Virtuais</h3>
<p class="resumo-podcast">A realidade virtual está levando a experiência do usuário a um novo nível...</p>
</div>
<div class="inf-podcast" >
<p class="autor-podcast">Por: <strong style="color: rgb(144, 22, 231);">Tec notícias</strong></p>
<p class="data-podcast">26/10/2023</p>
</div>
</div>
</div>
</article>
</a>
<article>
<div class=" col s4 m6 l4 xl4">
<div class="news-card" >
<img  class="img-noticias"  src="https://static.vecteezy.com/ti/vetor-gratis/t2/2380150-ilustracao-de-realidade-virtual-vetor.jpg" alt="Imagem da notícia 5">
<div class="news-content">
        <h3>Os atuais grandes avanços na Inteligência Artificial</h3>
        <p class="resumo-podcast">A IA continua a avançar, com máquinas aprendendo e tomando...</p>
        </div>
        <div class="inf-podcast" >
        <p class="autor-podcast">Por: <strong style="color: rgb(144, 22, 231);">Tec notícias</strong></p>
        <p class="data-podcast">26/10/2023</p>
        </div>
        </div>
        </div>
        </article>`;
// esssa parte resolve um bug gerado por outro script
document.querySelector('.news-button').style.top = 310 + 'px'



