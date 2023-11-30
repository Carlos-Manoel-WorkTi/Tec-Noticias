let form = document.querySelector("form");
const container = document.querySelector(".container");
const cadastro = document.querySelector(".cadastro-form");
const TemplateErrorVoild = `<div class="validarAll" data-aos="fade-down" data-aos-easing="linear"
data-aos-duration="100">Preencha todos os campos</div>`;

function renderError(callback) {
  if (document.querySelector("[active]")) {
    return;
  }

  const TypeError = callback;
  const errorDiv = TypeError.createErrorCard();
  container.insertBefore(errorDiv, container.firstChild);

  setTimeout((x) => {
    errorDiv.remove();
  }, 2500);
}
function CardError(classError, textError) {
  this.classError = classError;
  this.textError = textError;

  this.createErrorCard = function () {
    const div = document.createElement("div");
    div.classList.add(this.classError);
    div.textContent = this.textError;

    // Add attributes to the div element
    div.setAttribute("active", "");
    div.setAttribute("data-aos", "fade-down");
    div.setAttribute("data-aos-easing", "linear");
    div.setAttribute("data-aos-duration", "100");

    return div;
  };
}
function checkValid(inputList) {
  for (let i = 0; i < inputList.length; i++) {
    if (inputList[i].value === "") {
      return false;
    }
  }
  return true;
}
function msgError(id_input, id_label, objTypeError) {
  const id_ipt = document.querySelector(`#${id_input}`);
  const id_lb = document.querySelector(`#${id_label}`);
  const id_span = document.querySelector(`#span${id_input}`);
  if (objTypeError.error) {
    id_ipt.style.border = "1px solid red";
    id_lb.style.color = "red";
    id_span.innerHTML = objTypeError.msg;
    id_span.style.color = "red";
    id_ipt.style.outlineColor = "red";
  } else {
    id_ipt.style.border = "1px solid black";
    id_lb.style.color = "rgb(124, 78, 188)";
    id_ipt.style.outlineColor = "rgb(145, 78, 203)";
    id_span.style.color = "red";
    id_span.innerHTML = "";
  }
  if (objTypeError.error_opt_exist) {
    if (objTypeError.error_opt) {
      id_ipt.style.border = "none";
      id_lb.style.color = "rgb(124, 78, 188)";
      id_ipt.style.outlineColor = "transparent";
      id_span.style.color = "red";
      id_span.innerHTML = objTypeError.msg;
    } else {
      id_ipt.style.border = "none";
      id_span.innerHTML = "";
    }
  }
}
function validarNome(nome) {
  if (nome.trim() == "") {
    document.querySelector("#nome").classList.remove("valido");
    return { error: true, msg: "Este campo é obrigatorio" };
  }
  if (!(nome.trim().split("").length > 3)) {
    document.querySelector("#nome").classList.remove("valido");
    return { error: true, msg: "O campo deve ter mais de 4 caracteres" };
  }
  if (nome === "abcde" || nome === "12345") {
    document.querySelector("#nome").classList.remove("valido");
    return { error: true, msg: "O nome viola nossos termos" };
  }
  document.querySelector("#nome").classList.add("valido");
  return { error: false, msg: "Campo valido" };
}
function validarEmail(email) {
  if (email.trim() == "") {
    document.querySelector("#email").classList.remove("valido");
    return { error: true, msg: "Este campo é obrigatorio" };
  }
  if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i.test(email)) {
    document.querySelector("#email").classList.remove("valido");
    return { error: true, msg: "Ex: usuario123@email.com" };
  }
  document.querySelector("#email").classList.add("valido");
  return { error: false, msg: "Campo valido" };
}
function validarTel(tel) {
  if (tel.trim() == "") {
    document.querySelector("#phone").classList.remove("valido");
    return { error: true, msg: "Este campo é obrigatorio" };
  }
  if (!(tel.trim().split("").length > 15)) {
    document.querySelector("#phone").classList.remove("valido");
    return { error: true, msg: "Ex: 99 9 9876-5432" };
  }
  document.querySelector("#phone").classList.add("valido");
  return { error: false, msg: "Campo valido" };
}
function validarCep(cep) {
  if (cep.trim() == "") {
    document.querySelector("#cep").classList.remove("valido");
    return { error: true, msg: "Este campo é obrigatorio" };
  }
  document.querySelector("#cep").classList.add("valido");
  return { error: false, msg: "Campo valido" };
}
function validarCidade(cidade) {
  if (cidade.trim() == "") {
    document.querySelector("#cidade").classList.remove("valido");
    return { error: true, msg: "Este campo é obrigatorio" };
  }
  document.querySelector("#cidade").classList.add("valido");
  return { error: false, msg: "Campo valido" };
}
function validarData(data) {
  if (data.trim() == "") {
    document.querySelector("#data").classList.remove("valido");
    return { error: true, msg: "Este campo é obrigatorio" };
  }
  if (data.length >= 2 && data.substring(0, 2) > 31) {
    document.querySelector("#data").classList.remove("valido");
    return { error: true, msg: "Dia inválido" };
  }
  if (data.length >= 4 && data.substring(3, 5) > 12) {
    document.querySelector("#data").classList.remove("valido");
    return { error: true, msg: "Mês inválido" };
  }
  if (data.length >= 6 && data.substring(6) > 2018) {
    document.querySelector("#data").classList.remove("valido");
    return { error: true, msg: "Deve ter no minimo 5 anos" };
  }
  if (data.length < 6) {
    document.querySelector("#data").classList.remove("valido");
    return { error: true, msg: "Ex: 12/12/2018  " };
  }
  document.querySelector("#data").classList.add("valido");
  return { error: false, msg: "Campo valido" };
}
function validarCpf(cpf) {
  if (cpf.trim() == "") {
    document.querySelector("#cpf").classList.remove("valido");
    console.log("cp vazio");
    return { error: true, msg: "Este campo é obrigatorio" };
  }
  if (cpf.trim().length < 14) {
    console.log("cp menor");
    document.querySelector("#cpf").classList.remove("valido");
    return { error: true, msg: "Dado invalido" };
  }
  document.querySelector("#cpf").classList.add("valido");
  console.log("cp valido");
  return { error: false, msg: "Campo valido" };
}
function validarSenha(senha) {
  if (senha.trim() == "") {
    document.querySelector("#senha").classList.remove("valido");
    return { error: true, msg: "Este campo é obrigatorio" };
  }
  if (senha.trim().length < 8) {
    document.querySelector("#senha").classList.remove("valido");
    return { error: true, msg: "Minimo de 8 caracteres" };
  }
  document.querySelector("#senha").classList.add("valido");
  return { error: false, msg: "Campo valido" };
}
function checkSenha(checkSenha) {
  const senha = document.querySelector("#senha").value;
  if (checkSenha.trim() == "") {
    document.querySelector("#senha2").classList.remove("valido");
    return { error: true, msg: "Este campo é obrigatorio" };
  }
  if (checkSenha != senha) {
    document.querySelector("#senha2").classList.remove("valido");
    return { error: true, msg: "Senhas diferentes" };
  }
  if (senha.trim().length < 8) {
    document.querySelector("#senha2").classList.remove("valido");
    return { error: true, msg: "Minimo de 8 caracteres" };
  }
  document.querySelector("#senha2").classList.add("valido");
  return { error: false, msg: "Campo valido" };
}
function validarGenero() {
  if (!document.querySelector("#genero").classList.contains("valido")) {
    return {
      error_opt_exist: true,
      error_opt: true,
      msg: "Este campo é obrigatorio",
    };
  }
  return { error_opt_exist: true, error_opt: false, msg: "valido" };
}
function validarDefice() {
  if (!document.querySelector("#dfc").classList.contains("valido")) {
    document.querySelector("#spandfc").textContent = "Este campo é obrigatorio";
    return;
  } else {
    document.querySelector("#spandfc").textContent = "";
  }
}
function validarCor() {
  if (document.querySelector("#cor-select").value === "") {
    document.querySelector("#spancor").textContent = "Este campo é obrigatorio";
  }
  if (document.querySelector("#cor-select").value != "") {
    document.querySelector("#spancor").textContent = "";
  }
}
function checkTermos() {
  let nomeTermos = document.querySelector("#nome_termos");
  let link_termos = document.querySelector("#link_termos")
  if (document.querySelector("#termos").checked) {
    nomeTermos.style.color = "#2f3dcb";
    link_termos.style.color = "rgb(118, 57, 209)"
    nomeTermos.classList.add("valido"); // Adiciona a classe "valido"
  } else {
    nomeTermos.style.color = "#f55454";
    link_termos.style.color = "rgb(255 0 63)"
    nomeTermos.classList.remove("valido"); // Remove a classe "valido"
  }
}

// Eventos

document.getElementById("nome").addEventListener("input", (e) => {
  msgError(e.target.id, "label" + e.target.id, validarNome(e.target.value));
});

document.getElementById("email").addEventListener("input", (e) => {
  msgError(e.target.id, "label" + e.target.id, validarEmail(e.target.value));
});

document.getElementById("phone").addEventListener("input", (e) => {
  msgError(e.target.id, "label" + e.target.id, validarTel(e.target.value));
});

document.getElementById("cep").addEventListener("input", (e) => {
  msgError(e.target.id, "label" + e.target.id, validarCep(e.target.value));
});

document.getElementById("cidade").addEventListener("input", (e) => {
  msgError(e.target.id, "label" + e.target.id, validarCidade(e.target.value));
});

document.getElementById("data").addEventListener("input", (e) => {
  msgError(e.target.id, "label" + e.target.id, validarData(e.target.value));
});

document.getElementById("cpf").addEventListener("input", (e) => {
  msgError(e.target.id, "label" + e.target.id, validarCpf(e.target.value));
});

document.getElementById("senha").addEventListener("input", (e) => {
  msgError(e.target.id, "label" + e.target.id, validarSenha(e.target.value));
});

document.getElementById("senha2").addEventListener("input", (e) => {
  msgError(e.target.id, "label" + e.target.id, checkSenha(e.target.value));
});

document.querySelector(".genero").addEventListener("click", (e) => {
  document.querySelector("#genero").classList.add("valido");
});
document.querySelector(".dfc").addEventListener("click", (e) => {
  e.currentTarget.classList.add("valido");
  //  msgError("dcf", "labeldfc",validarDefice(document.querySelectorAll(".dfc")))
});

document.getElementById("termos").addEventListener("click", (e) => {
  checkTermos();
});
document.querySelector("#genero").addEventListener("change", (e) => {
  document.querySelector("#spangenero").textContent = "";
  validarGenero();
});
document.querySelector("#dfc").addEventListener("change", (e) => {
  validarDefice();
});
document.querySelector("#cor-select").addEventListener("change", (e) => {
  e.currentTarget.classList.add("valido");
  validarCor();
});

//  submit

form.addEventListener("submit", (e) => {
  
    
  e.preventDefault();
  
  const validos = document.querySelectorAll(".valores");


  if (!checkValid(document.querySelectorAll(".valores"))) {
    renderError(new CardError("validarAll", "Preencha todos os campos"));
  }

  if (document.querySelectorAll(".valido").length >= 13) {
    e.currentTarget.submit();
    let log = { logado: true };
    localStorage.clear();
    // Atualizar o objeto no localStorage
    localStorage.setItem("log", JSON.stringify(log));
    window.location.href = '../index.html';
  }
  validos.forEach((x) => {
    if (!x.classList.contains("valido")){
      if (x.id === "nome") {
        msgError(x.id, "label" + x.id, validarNome(x.value));
      }
      if (x.id === "email") {
        msgError(x.id, "label" + x.id, validarEmail(x.value));
      }
      if (x.id === "phone") {
        msgError(x.id, "label" + x.id, validarTel(x.value));
      }
      if (x.id === "cep") {
        msgError(x.id, "label" + x.id, validarCep(x.value));
      }
      if (x.id === "cidade") {
        msgError(x.id, "label" + x.id, validarCidade(x.value));
      }
      if (x.id === "data") {
        msgError(x.id, "label" + x.id, validarData(x.value));
      }
      validarCor();
      if (x.id === "genero") {
        msgError(
          x.id,
          "label" + x.id,
          validarGenero(document.querySelectorAll(".genero-opt"))
        );
      }
      if (x.id === "dfc") {
        msgError(
          x.id,
          "label" + x.id,
          validarGenero(document.querySelectorAll(".Deficiencia"))
        );
      }
      if (x.id === "cpf") {
        msgError(x.id, "label" + x.id, validarCpf(x.value));
      }
      if (x.id === "senha") {
        msgError(x.id, "label" + x.id, validarSenha(x.value));
      }
      if (x.id === "senha2") {
        msgError(x.id, "label" + x.id, checkSenha(x.value));
      }

      checkTermos();
    }
  });
});
