const addnoticias = document.querySelector(".addnoticias");
const noticias = document.querySelector(".margem-mobile-noticias");




function modelNoticias(link, img, titulo, resumo, autor, data,classNome) {
  const html = ` 
            <a href="${link}">
                <article>
                    <div class="col s4 m6 l4 xl4 ${classNome}">
                        <div class="news-card" >
                            <img class="img-noticias" src="${img}" alt="Imagem da notícia">
                            <div class="news-content">
                                <h3>${titulo}</h3>
                                <p class="resumo-podcast">${resumo}</p>
                            </div>
                            <div class="inf-podcast" >
                                <p class="autor-podcast">Por: <strong style="color: rgb(144, 22, 231);">${autor}</strong></p>
                                <p class="data-podcast">${data}</p>
                            </div>
                        </div>
                    </div>
                </article>
            </a>`;
  return html;
}

const minhaNoticiaHTMLOne = modelNoticias(
  "src/artigo.html",
  "https://img.freepik.com/vetores-premium/conceito-de-educacao-moderna-mao-desenhada_23-2147907442.jpg?w=2000",
  "Disponibilizando educação Online e Aprendizado Digital para todos",
  "A educação online está se tornando a norma, oferecendo acesso a...",
  "Tec notícias",
  "26/10/2023",
  "hide-on-med-and-down"
);
const minhaNoticiaHTMLTwo = modelNoticias(
  "src/artigo.html",
  "https://static.vecteezy.com/ti/vetor-gratis/t2/2380150-ilustracao-de-realidade-virtual-vetor.jpg",
  "Os atuais grandes avanços na Inteligência Artificial",
  "A IA continua a avançar, com máquinas aprendendo e tomando...",
  "Tec notícias",
  "26/10/2023"
);
const minhaNoticiaHTMLThree = modelNoticias(
        "src/artigo.html",
        "https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-abstrato-de-inteligencia-artificial-ia-aprendizado-de-maquina-evolucao-da-inteligencia-artificial-alta-tecnologia-tecnologia-de-ponta-robotica-cognitiva_335657-483.jpg?w=2000",
        "A realidade Virtual: Uma Janela para Mundos Virtuais",
        "A realidade virtual está levando a experiência do usuário a um novo nível...",
        "Tec notícias",
        "26/10/2023"
      );

      addnoticias.innerHTML += minhaNoticiaHTMLOne
      addnoticias.innerHTML += minhaNoticiaHTMLThree
      addnoticias.innerHTML += minhaNoticiaHTMLTwo
