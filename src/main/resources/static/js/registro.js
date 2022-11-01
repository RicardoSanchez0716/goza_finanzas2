$(document).ready(function(){
    //On ready
    });


async function registroUsuario(){


    let datos = {};
    datos.nombre = document.getElementById('txtNombre').value;
    datos.apellido = document.getElementById('txtApellido').value;
    datos.email = document.getElementById('txtEmail').value;
    datos.password = document.getElementById('txtPassword').value;

    const request = await fetch('api/usuarios',{
    method: 'POST',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
    });
    alert("La cuenta fue creada con exito!");
    window.location.href = 'login.html'

}
