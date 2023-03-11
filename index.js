// Proyecto sobre e-commerce de un negocio de discos de vinilo

class Disco {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }
}
function calcularCuotas(){
    return Math.round(discoPrecio / seleccionarCuotas)
}
//Discos disponibles
const disco1 = new Disco('Abbey Road', 6000)
const disco2 = new Disco('Bicicleta', 8000)
const disco3 = new Disco('Thriller', 5500)
let seleccionarDisco = prompt('Seleccione que disco quiere comprar (los discos disponibles son Abbey Road, Bicicleta y Thriller)')
let discoSeleccionado = false
//Seleccionar el disco
while (discoSeleccionado === false) {
    if (seleccionarDisco === 'Abbey Road') {
        discoSeleccionado = true
        discoPrecio = disco1.precio
    } else if (seleccionarDisco === 'Bicicleta') {
        discoSeleccionado = true
        discoPrecio = disco2.precio
    } else if (seleccionarDisco === 'Thriller') {
        discoSeleccionado = true
        discoPrecio = disco3.precio
    } else seleccionarDisco = prompt('disco no disponible: seleccione un disco en venta')
}
//Seleccionar cuotas 
let seleccionarCuotas = parseInt (prompt('El total a pagar son $' + discoPrecio + ' ¿En cuantas cuotas quiere realizar el pago?'))
let cuotaSeleccionada = false
while (cuotaSeleccionada === false) {
    if (seleccionarCuotas=== 1){
        alert('Se realizará un solo pago de $'+discoPrecio)
        cuotaSeleccionada = true
        break
    }
     else if (seleccionarCuotas >= 2 && seleccionarCuotas <= 12) {
        alert('se realizara el pago en ' + seleccionarCuotas + ' cuotas de $' + calcularCuotas())
        cuotaSeleccionada = true
        break
    }
    else seleccionarCuotas = prompt('Los pagos solo estan disponibles hasta 12 cuotas, seleccione un número de cuotas valido')
}

