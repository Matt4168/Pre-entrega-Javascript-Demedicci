// Proyecto sobre e-commerce de un negocio de discos de vinilo

class disco {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }
}
//Discos disponibles

const disco1 = new disco('Abbey Road', 6000)
const disco2 = new disco('Bicicleta', 8000)
const disco3 = new disco('Thriller', 5500)
let seleccionardisco = prompt('Seleccione que disco quiere comprar (los discos disponibles son Abbey Road, Bicicleta y Thriller)')
let discoseleccionado = false
//Seleccionar el disco
while (discoseleccionado === false) {
    if (seleccionardisco === 'Abbey Road') {
        discoseleccionado = true
        discoprecio = disco1.precio
    } else if (seleccionardisco === 'Bicicleta') {
        discoseleccionado = true
        discoprecio = disco2.precio
    } else if (seleccionardisco === 'Thriller') {
        discoseleccionado = true
        discoprecio = disco3.precio
    } else seleccionardisco = prompt('disco no disponible: seleccione un disco en venta')
}
//Seleccionar cuotas 
let seleccionarcuotas = +prompt('El total a pagar son $' + discoprecio + ' ¿En cuantas cuotas quiere realizar el pago?')
let cuotaseleccionada = false

while (cuotaseleccionada === false) {
    if (seleccionarcuotas=== 1){
        alert('Se realizará un solo pago de $'+discoprecio)
        cuotaseleccionada = true
        break
    }
     else if (seleccionarcuotas >= 2 && seleccionarcuotas <= 12) {
        alert('se realizara el pago en ' + seleccionarcuotas + ' cuotas de $' + Math.round(discoprecio / seleccionarcuotas))
        cuotaseleccionada = true
        break
    }
    else seleccionarcuotas = prompt('Los pagos solo estan disponibles hasta 12 cuotas, seleccione un número de cuotas valido')
}

