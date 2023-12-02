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
    return false;
  }
  if (document.querySelector("#cor-select").value != "") {
    document.querySelector("#spancor").textContent = "";
    return true;
  }
}
function checkTermos() {
  let nomeTermos = document.querySelector("#nome_termos");
  let link_termos = document.querySelector("#link_termos");
  if (document.querySelector("#termos").checked) {
    nomeTermos.style.color = "#2f3dcb";
    link_termos.style.color = "rgb(118, 57, 209)";
    nomeTermos.classList.add("valido"); // Adiciona a classe "valido"
  } else {
    nomeTermos.style.color = "#f55454";
    link_termos.style.color = "rgb(255 0 63)";
    nomeTermos.classList.remove("valido"); // Remove a classe "valido"
  }
}

// Eventos

document.getElementById("nome").addEventListener("input", (e) => {
  msgError(e.target.id, "label" + e.target.id, validarNome(e.target.value));
  const valor = validarNome(e.target.value);
  if (valor.msg === "Campo valido") {
  }
});
document.getElementById("nome").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const valor = validarNome(e.target.value);
    if (valor.msg === "Campo valido") {
      document.getElementById("email").focus();
    } else {
      renderError(new CardError("validarAll", "Preencha todos os campos"));
    }
  }
});

document.getElementById("email").addEventListener("input", (e) => {
  msgError(e.target.id, "label" + e.target.id, validarEmail(e.target.value));
});
document.getElementById("email").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const valor = validarEmail(e.target.value);
    if (valor.msg === "Campo valido") {
      document.getElementById("phone").focus();
    } else {
      renderError(new CardError("validarAll", "Preencha todos os campos"));
    }
  }
});

document.getElementById("phone").addEventListener("input", (e) => {
  msgError(e.target.id, "label" + e.target.id, validarTel(e.target.value));
});
document.getElementById("phone").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const valor = validarTel(e.target.value);
    if (valor.msg === "Campo valido") {
      document.getElementById("cep").focus();
    } else {
      renderError(new CardError("validarAll", "Preencha todos os campos"));
    }
  }
});

document.getElementById("cep").addEventListener("input", (e) => {
  msgError(e.target.id, "label" + e.target.id, validarCep(e.target.value));
});
document.getElementById("cep").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const valor = validarCep(e.target.value);
    if (valor.msg === "Campo valido") {
      document.getElementById("cidade").focus();
    } else {
      renderError(new CardError("validarAll", "Preencha todos os campos"));
    }
  }
});

document.getElementById("cidade").addEventListener("input", (e) => {
  msgError(e.target.id, "label" + e.target.id, validarCidade(e.target.value));
});
document.getElementById("cidade").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const valor = validarCidade(e.target.value);
    if (valor.msg === "Campo valido") {
      document.getElementById("data").focus();
    } else {
      renderError(new CardError("validarAll", "Preencha todos os campos"));
    }
  }
});

document.getElementById("data").addEventListener("input", (e) => {
  msgError(e.target.id, "label" + e.target.id, validarData(e.target.value));
});
document.getElementById("data").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const valor = validarData(e.target.value);
    if (valor.msg === "Campo valido") {
      document.getElementById("cor-select").focus();
    } else {
      renderError(new CardError("validarAll", "Preencha todos os campos"));
    }
  }
});

document.querySelector("#cor-select").addEventListener("change", (e) => {
  e.currentTarget.classList.add("valido");
  validarCor();
  document.querySelector("#cor-select").blur();
});
document.querySelector("#cor-select").addEventListener("blur", (e) => {
  if (!validarCor()) {
    renderError(new CardError("validarAll", "Preencha todos os campos"));
  }
});

document.querySelector("#genero").addEventListener("change", (e) => {
  document.querySelector("#spangenero").textContent = "";
  validarGenero();
});
document.querySelector(".genero").addEventListener("click", (e) => {
  document.querySelector("#genero").classList.add("valido");
  e.target.blur();
});

document.querySelector("#dfc").addEventListener("change", (e) => {
  validarDefice();
});
document.querySelector(".dfc").addEventListener("click", (e) => {
  e.currentTarget.classList.add("valido");
  //  msgError("dcf", "labeldfc",validarDefice(document.querySelectorAll(".dfc")))
  document.getElementById("cpf").focus();
});

document.getElementById("cpf").addEventListener("input", (e) => {
  msgError(e.target.id, "label" + e.target.id, validarCpf(e.target.value));
});
document.getElementById("cpf").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const valor = validarCpf(e.target.value);
    if (valor.msg === "Campo valido") {
      document.getElementById("senha").focus();
    } else {
      renderError(new CardError("validarAll", "Preencha todos os campos"));
    }
  }
});

document.getElementById("senha").addEventListener("input", (e) => {
  msgError(e.target.id, "label" + e.target.id, validarSenha(e.target.value));
});
document.getElementById("senha").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const valor = validarSenha(e.target.value);
    if (valor.msg === "Campo valido") {
      document.getElementById("senha2").focus();
    } else {
      renderError(new CardError("validarAll", "Preencha todos os campos"));
    }
  }
});

document.getElementById("senha2").addEventListener("input", (e) => {
  msgError(e.target.id, "label" + e.target.id, checkSenha(e.target.value));
});
document.getElementById("senha2").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const valor = checkSenha(e.target.value);
    if (valor.msg === "Campo valido") {
      document.getElementById("senha2").blur();
    } else {
      renderError(new CardError("validarAll", "Preencha todos os campos"));
    }
  }
});

document.getElementById("termos").addEventListener("click", (e) => {
  checkTermos();
});

//  submit

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const validos = document.querySelectorAll(".valores");
  if (document.querySelectorAll(".valido").length < 1) {
    renderError(new CardError("validarAll", "Preencha todos os campos"));
  }
  if (document.querySelectorAll(".valido").length >= 13) {
    e.currentTarget.submit();
    let log = { logado: true };
    localStorage.clear();
    // Atualizar o objeto no localStorage
    localStorage.setItem("log", JSON.stringify(log));
    window.location.href = "./informacoesUsuario.html";
  }

  for (let i = 0; i < validos.length - 1; i++) {
    if (!validos[i].classList.contains("valido")) {
      
      if (!validos[i].classList.contains("valido")) {
       
        if (validos[i].id === "nome") {
          msgError(
            validos[i].id,
            "label" + validos[i].id,
            validarNome(validos[i].value)
          );
          break;
        }

        if (validos[i].id === "email") {
          msgError(
            validos[i].id,
            "label" + validos[i].id,
            validarEmail(validos[i].value)
          );
          break;
        }
        if (validos[i].id === "phone") {
          msgError(
            validos[i].id,
            "label" + validos[i].id,
            validarTel(validos[i].value)
          );
          break;
        }
        if (validos[i].id === "cep") {
          msgError(
            validos[i].id,
            "label" + validos[i].id,
            validarCep(validos[i].value)
          );
          break;
        }
        if (validos[i].id === "cidade") {
          msgError(
            validos[i].id,
            "label" + validos[i].id,
            validarCidade(validos[i].value)
          );
          break;
        }
  
        if (validos[i].id === "data") {
          msgError(
            validos[i].id,
            "label" + validos[i].id,
            validarData(validos[i].value)
          );
          break;
        }
        validarCor();

        if (validos[i].id === "genero") {
          msgError(
            validos[i].id,
            "label" + validos[i].id,
            validarGenero(document.querySelectorAll(".genero-opt"))
          );
          break;
        }
        if (validos[i].id === "dfc") {
          msgError(
            validos[i].id,
            "label" + validos[i].id,
            validarGenero(document.querySelectorAll(".Deficiencia"))
          );
          break;
        }
        if (validos[i].id === "cpf") {
          msgError(
            validos[i].id,
            "label" + validos[i].id,
            validarCpf(validos[i].value)
          );
          break;
        }
        if (validos[i].id === "senha") {
          msgError(
            validos[i].id,
            "label" + validos[i].id,
            validarSenha(validos[i].value)
          );
          break;
        } checkTermos();
        if (validos[i].id === "senha2") {
          msgError(
            validos[i].id,
            "label" + validos[i].id,
            checkSenha(validos[i].value)
          );
          break;
        }
       
      }
    }
  }
});
