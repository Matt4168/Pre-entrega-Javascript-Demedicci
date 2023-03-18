// Proyecto sobre e-commerce de un negocio de discos de vinilo
class Disco {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }
}
function calcularCuotas(){
    return Math.round(total/ seleccionarCuotas)
}
//Array de discos disponibles
const discos = [
    new Disco('abbey road', 6000),
    new Disco('bicicleta', 8000),
    new Disco('thriller', 5500),
    new Disco ('apostrophe', 10000)
]
console.log(discos)
let seleccionarDisco = prompt('Seleccione que disco quiere comprar (los discos disponibles son Abbey Road, Bicicleta, Thriller y Apostrophe)')
let seguirComprando = true
const carritoDeCompras = []
while (seguirComprando === true) {
    const disco = discos.find(
        (disco) => disco.nombre === seleccionarDisco.toLowerCase().trim()
      )
      if (disco) {
        carritoDeCompras.push(disco)
      } else {
        seleccionarDisco = prompt(
          'Elija un disco disponible (Abbey Road, Bicicleta, Thriller y Apostrophe))'
        )
        continue
      }

    let elegir = prompt('Deseas seguir comprando? Si/No')
    let respuestaValida = true
    while (respuestaValida === true){
        if (elegir.toLowerCase().trim() === 'si') {
            seleccionarDisco = prompt(
                'los discos disponibles son Abbey Road, Bicicleta, Thriller y Apostrophe'),
                respuestaValida = false
            } else if (elegir.toLowerCase().trim() === 'no'){
                respuestaValida = false
                seguirComprando = false
            }
            else{
                elegir = prompt ('seleccione una respuesta valida.  Si/No ' )
            }
    }
 
}
let total = 0
carritoDeCompras.forEach(disco=>{total = total+disco.precio})
// Seleccionar y calcular cuotas
let seleccionarCuotas = parseInt (prompt('El total a pagar son $' + total + ' ¿En cuantas cuotas quiere realizar el pago?'))
let cuotaSeleccionada = false
while (cuotaSeleccionada === false) {
    if (seleccionarCuotas=== 1){
        alert('Se realizará un solo pago de $'+total)
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

