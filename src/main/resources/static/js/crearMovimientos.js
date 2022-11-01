$(document).ready(function(){
    //On ready
    });


async function crearMovimientos(){

 window.alert("Movimiento guardado");

    location.reload()

    let datos = {};
    datos.movimiento = document.getElementById('txtMovimiento').value;
    datos.fecha = document.getElementById('txtFecha').value;
    datos.monto = document.getElementById('txtMonto').value;
    datos.categoria = document.getElementById('txtCategoria').value;
    datos.descripcion = document.getElementById('txtDescripcion').value;

    const request = await fetch('api/movimientos',{
    method: 'POST',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
    });
    const movimientos = await request.json();



}




