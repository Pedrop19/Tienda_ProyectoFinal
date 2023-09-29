function submitForm(){
    user = document.getElementById("usuario").value;
    password = document.getElementById("password").value;
    if(availableUsers.some(u => u.email == user || u.usuario == user && u.password == password)){
        window.location.href = "../html/index.html";
    }else{
        document.getElementById("error").innerHTML = "ERROR. Usuario o contraseña incorrecto";
    }
}
