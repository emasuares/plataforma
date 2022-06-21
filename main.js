
var boton=document.getElementById('acceder');
boton.addEventListener('click',login);

function login(){ 
    var usuario=document.getElementById('usuario').value;
    var password=document.getElementById('password').value;
    if (usuario=="admin" && password=="admin") { 
    window.location.href='clientes.html'; 
    } else if (usuario=="administrador" && password=="administrador") { 
    window.location.href='clientes.html'; 
    } else if (usuario=="" && password=="") { 
    window.location="errorpopup.html"; 
    
    } 
    } 

    
  