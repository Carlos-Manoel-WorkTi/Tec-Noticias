document.addEventListener("DOMContentLoaded", function () {
  const librasButton = document.getElementById("librasButton");
  const topButton = document.getElementById("topButton");
  let cardVisible = false; // Variável de estado para controlar a visibilidade do card

  librasButton.addEventListener("click", function () {
    if (!cardVisible) {
      createCard(); // Chama a função para criar o card
      cardVisible = true; // Define o estado como visível
    }
  });

  function createCard() {
    // Oculta o botão de Libras
    librasButton.style.display = "none";
    topButton.style.left = "5px";

    // Crie a div do card
    const cardDiv = document.createElement("div");
    cardDiv.id = "cardDiv";
    cardDiv.classList.add("card", "white");
    cardDiv.style.position = "fixed";
    cardDiv.style.bottom = "20px";
    cardDiv.style.right = "20px";
    cardDiv.style.zIndex = "1000";
    cardDiv.style.minWidth = "200px";

    // Conteúdo do card
    cardDiv.innerHTML = `
      <div class="card-content" style="position: relative;">
        <a id="feedbackButton" class="btn-floating btn-small waves-effect waves-light green right" style="position: absolute; top: 0; right: 40px;">
          <i class="material-icons">feedback</i>
        </a>

        <span class="card-title">Tradutor de libras</span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlfyT-4fY8B8PFUZjvGgu61PDHSXeaFhSrw&usqp=CAU" alt="">
        <p>Olá</p>

        <a id="audioButton" class="btn-floating btn-small waves-effect waves-light blue right" style="position: absolute; bottom: 2px; right: 2px;">
          <i id="audioIcon" class="material-icons">volume_up</i>
        </a>
      </div>`;

    // Crie o botão "X" para fechar o card
    const closeButton = document.createElement("a");
    closeButton.id = "closeButton";
    closeButton.classList.add(
      "btn-floating",
      "btn-small",
      "waves-effect",
      "waves-light",
      "red",
      "right"
    );
    closeButton.innerHTML = `<i class="material-icons">close</i>`;

    // Adicione um evento de clique para fechar o card
    closeButton.addEventListener("click", function () {
      topButton.style.left = "";
      // Remove o card
      document.body.removeChild(cardDiv);
      cardVisible = false; // Define o estado como não visível

      // Mostra o botão de Libras novamente
      librasButton.style.display = "block";
    });

    // Adicione o botão de fechar ao card
    cardDiv.querySelector(".card-content").appendChild(closeButton);

    // Adicione o card à página
    document.body.appendChild(cardDiv);

    // Adicione um evento de clique para alternar o ícone do botão de áudio
    const audioButton = document.getElementById("audioButton");
    const audioIcon = document.getElementById("audioIcon");
    let audioEnabled = true;

    audioButton.addEventListener("click", function () {
      if (audioEnabled) {
        audioIcon.innerText = "volume_off";
        // Desabilite o áudio aqui
        audioEnabled = false;
      } else {
        audioIcon.innerText = "volume_up";
        // Habilite o áudio aqui
        audioEnabled = true;
      }
    });
  }
});
