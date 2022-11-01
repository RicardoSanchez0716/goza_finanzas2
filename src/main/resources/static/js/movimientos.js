$(document).ready(function(){
    cargarMovimientos();
    $('#movimientos').DataTable();
    });


async function cargarMovimientos(){

    const request = await fetch('api/movimientos',{
    method: 'GET',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    });
    const movimientos = await request.json();



    let listadoHtml = '';
    for (let movimiento of movimientos){
    let botonEliminar = '<button onclick="eliminarMovimiento('+ movimiento.id +')" type="button" class="btn btn-danger">Eliminar</button>';
    let movimientoHtml = '<tr><td>'+movimiento.id+'</td><td>'+movimiento.movimiento+'</td><td>'+movimiento.fecha+'</td><td>'+movimiento.monto+'</td><td>'+movimiento.categoria+'</td><td>'+movimiento.descripcion+'</td><td>'+ botonEliminar +'</td></tr>';
    listadoHtml += movimientoHtml;

    }


document.querySelector('#movimientos tbody').outerHTML = listadoHtml;

}

async function eliminarMovimiento(id){

 if (!confirm('Desea eleminar este movimiento?')){
    return;
 }

 const request = await fetch('api/movimientos/' +id,{
    method: 'DELETE',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    });

    location.reload()
}