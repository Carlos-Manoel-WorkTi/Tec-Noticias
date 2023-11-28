const form = document.querySelector("form")
const Email = document.querySelector("#Email")
const label_email = document.querySelector("#label_Email")
const senha = document.querySelector("#Senha")
const label_senha = document.querySelector("#label_Senha")
const usuarios = [{
    nome: 'jose',
    email: 'jose@email.com',
    senha: 'jose1234'
}]

function alterStyle(element,addClass,borderColor,placeholder,colorPLaceholder,label){
    element.style.borderColor = `${borderColor}`
    element.classList.toggle("placeholder-red", addClass);
    element.placeholder = `${placeholder}`
    document.querySelector(`#label_${element.id}`).style.color = `${colorPLaceholder}`
}

function validarEmail(element){
    const emailRegex = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i);
    if ((element === "") || !(emailRegex.test(`${element}`))) {
        return true
    }
    
    return false
}
function validarSenha(element){
    const senhaRegex = new RegExp(/^(?:.*[A-Za-z\d@$!%*?&]){8,}$/i);
    if ((element === "") || !(senhaRegex.test(`${element}`))) {
        return true
    }
    return false
}

function validarCampos(){
    const campos_validos = document.querySelectorAll(".valido");
    return campos_validos.length > 1 ? true : false;
}

function validarUsuario(email, senha, res_bd) {
    return res_bd.some(usuario => usuario.email === email && usuario.senha === senha);
}
 


// validar email
Email.addEventListener("blur", e => {
    if(validarEmail(e.target.value)){
        alterStyle(e.target,true,"red","preencha com seu email!",'red')
        e.target.classList.remove("valido")
        M.toast({html: 'Ex: usario123@email.com', classes: 'toast-centered',})
    }else{
        alterStyle(e.target,false,"rgb(158, 158, 158)","vazio sem valor",'#997ec7')
        e.target
        e.target.classList.add("valido")
    }
  
})
// Validar email se a tecla "Enter" for pressionada
Email.addEventListener("keypress", e => {
    if (e.key === 'Enter') {
        if(validarEmail(e.target.value)){
            alterStyle(e.target,true,"red","Preencha com seu email!",'red')
            e.target.classList.remove("valido")
            if (!document.querySelector("#toast-container")) {
                 M.toast({html: 'Ex: usuario123@email.com', classes: 'toast-centered',})
            }
           
        } else {
            alterStyle(e.target,false,"rgb(158, 158, 158)","Vazio sem valor",'#997ec7')
            e.target.classList.add("valido")
            senha.focus()
        
        }
    }
});
// validar senha
senha.addEventListener("blur", e => {  
    if(validarSenha(e.target.value)){
        alterStyle(e.target,true,"red","preencha com sua senha!",'red')
        e.target.classList.remove("valido")
        M.toast({html: 'Minímo de 8 acaracteres', classes: 'toast-centered',})
    }else{
        alterStyle(e.target,false,"rgb(158, 158, 158)","vazio sem valor",'#997ec7')
        e.target.classList.add("valido")
    
    }
})
// Validar senha se a tecla "Enter" for pressionada
senha.addEventListener("keypress", e => {  
    if (e.key === 'Enter') {
        if(validarSenha(e.target.value)){
            alterStyle(e.target,true,"red","Preencha com sua senha!",'red')
            e.target.classList.remove("valido")
            // M.toast({html: 'Minimo de 8 caracteres', classes: 'toast-centered',})
        }else{
            alterStyle(e.target,false,"rgb(158, 158, 158)","Vazio sem valor",'#997ec7')
            e.target.classList.add("valido")
        }
    }
});
// validar envio
form.addEventListener('submit', function validarEnvio(e){
    e.preventDefault()
    
    if (validarCampos()) {
        const getEmailAtual = e.target.querySelector("#Email").value
        const getSenhaAtual = e.target.querySelector("#Senha").value
        if (validarUsuario(getEmailAtual,getSenhaAtual,usuarios)) {
            
            


            document.querySelector("#preloader").classList.add("progress")

            setTimeout(function() {
                document.querySelector('#preloader').classList.remove("progress");  
                
                M.toast({html: 'redirecionando à home...!', classes: ' green darken-3 toast-centered'});
        
                // Redireciona para "../index.html" após 3 segundos (3000ms)
                setTimeout(function() {
                  window.location.href = '../index.html';
                }, 3000);

              }, 3000); // Simula o preloader por 3 segundos (3000ms)
              // Mostra um toast
           






        }
        else{  
            if (!document.getElementById("toast-container")){
                M.toast({html: 'Os dados são invalidos', classes: 'toast-centered',})
            }
    }
    }
    else{
      
        
        if (!document.getElementById("toast-container")) {
    
            M.toast({html: 'Preencha corretamente', classes: 'toast-centered',})
        }
        
    }
 
    

})
// envio por clicar em enter no doc
document.addEventListener("keydown",(event) => {
   
   
    if (event.key === 'Enter') {
        
        if (validarCampos()) {
            const getEmailAtual = event.target.querySelector("#Email").value
            const getSenhaAtual = event.target.querySelector("#Senha").value
            if (validarUsuario(getEmailAtual,getSenhaAtual,usuarios)) {
                
                
    
    
                document.querySelector("#preloader").classList.add("progress")
    
                setTimeout(function() {
                    document.querySelector('#preloader').classList.remove("progress");  
                    
                    M.toast({html: 'redirecionando à home...!', classes: ' green darken-3 toast-centered'});
            
                    // Redireciona para "../index.html" após 3 segundos (3000ms)
                    setTimeout(function() {
                      window.location.href = '../index.html';
                    }, 3000);
    
                  }, 3000); // Simula o preloader por 3 segundos (3000ms)
                  // Mostra um toast
               
    
    
    
    
    
    
            }
            else{  
                if (!document.getElementById("toast-container")){
                    M.toast({html: 'Os dados são invalidos', classes: 'toast-centered',})} 
                }
              
         
        }
        
        else{
            if (event.target.id == 'Email') {
                return
            }
            if (!document.getElementById("toast-container")) {
                M.toast({html: 'Preencha corretamente', classes: 'toast-centered',})}
            }
            
     
    }
})
