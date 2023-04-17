// Proyecto sobre e-commerce de un negocio de discos de vinilo
const formulario = document.getElementById('formulario')
const ingreseNombre = document.getElementById('nombre')
const ingreseApellido = document.getElementById('apellido')
const titulo = document.getElementById('titulo')

// formulario de ingreso
formulario.onsubmit = (e) => {
  e.preventDefault()
  const infoUsuario = {
    nombre: ingreseNombre.value,
    apellido: ingreseApellido.value,
  }
  localStorage.setItem('infoUsuario', JSON.stringify(infoUsuario))
  formulario.remove()
  titulo.innerText = `Hola ${infoUsuario.nombre} ${infoUsuario.apellido}`
}

const infoUsuario = localStorage.getItem('infoUsuario')
const infoUsuarioJS = JSON.parse(infoUsuario)
if (infoUsuario) {
  formulario.remove()
  titulo.innerText = `Hola ${infoUsuarioJS.nombre} ${infoUsuarioJS.apellido}`
}



// class Disco {
//     constructor(id, nombre, precio, imagen) {
//         this.id = id
//         this.nombre = nombre
//         this.precio = precio
//         this.imagen = imagen
//     }
// }

// const discos = [
//     new Disco(1,'Abbey Road', 9000, './images/ar.jpg'),
//     new Disco(2,'The dark side of the Moon', 7500, './images/The_Dark_Side_of_the_Moon_Cover.svg.png'),
//     new Disco(3,'Thriller', 5000, './images/Michael_Jackson_-_Thriller.png'),
//     new Disco(4,'Outlandos D´amour', 8000, './images/thepolice.jpg'),
//     new Disco(5,'Songs in the Key of Life', 15000, './images/Songs_in_the_key_of_life.jpg'),
//     new Disco(6,'Ziggy Stardust', 10000, './images/ZiggyStardust.jpg'),
//     new Disco(7,'La Grasa de las Zapitales', 18000, './images/Serú_Girán_–_Grasa_De_Las_Capitales.jpg'),
//     new Disco(8,'Breakfast in America', 6000, './images/Supertramp_-_Breakfast_in_America.jpg')
// ]

let discos = []
fetch('discos.json')
.then(Response => Response.json())
.then(data =>{
  discos = data;
  cargarDiscos(discos)
})



function cargarDiscos(){
  let listadoDiscos = document.getElementById('listadoDiscos')
  discos.forEach(disco =>{
      listadoDiscos.innerHTML += `<div class="card" style="width: 18rem;">
      <img src="${disco.imagen}" class="card-img-top" alt="${disco.nombre}">
      <div class="card-body">
        <h5 class="card-title">${disco.nombre}</h5>
        <p class="card-text">$${disco.precio}</p>
        <a href="#" id=${disco.id} class="btn btn-primary">Comprar</a>
      </div>
    </div>`
  }
)
}
cargarDiscos()
const carrito = []
const botonesAgregar = document.querySelectorAll('.btn-primary')

botonesAgregar.forEach((boton) => {
  boton.onclick = () => {
    const disco = discos.find((disco) => disco.id === parseInt(boton.id))
    const discosCarrito = {
      id: disco.id,
      nombre: disco.nombre,
      precio: disco.precio,
      imagen: disco.imagen,
      cantidad: 1,
    }
  const discoEnCarrito = carrito.find(disco=>disco.id===discosCarrito.id)
    if(!discoEnCarrito){
        carrito.push(discosCarrito)
    } else {
        discoEnCarrito.cantidad++
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }

})




