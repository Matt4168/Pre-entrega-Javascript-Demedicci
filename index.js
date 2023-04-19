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

let discos = [];
fetch("discos.json")
	.then((Response) => Response.json())
	.then((data) => {
		discos = data;
		cargarDiscos(discos);

		cargarCarrito();
	});

function cargarDiscos(discos) {
	let listadoDiscos = document.getElementById("listadoDiscos");
	discos.forEach((disco) => {
		listadoDiscos.innerHTML += `<div class="card" style="width: 18rem;">
      <img src="${disco.imagen}" class="card-img-top" alt="${disco.nombre}">
      <div class="card-body">
        <h5 class="card-title">${disco.nombre}</h5>
        <p class="card-text">$${disco.precio}</p>
        <button id=${disco.id} class="btn btn-primary">Comprar</button>
      </div>
    </div>`;
	});
}
// cargarDiscos();
const carrito = [];
function cargarCarrito() {
	const botonesAgregar = document.querySelectorAll(".btn-primary");
	botonesAgregar.forEach((boton) => {
		boton.onclick = () => {
			const disco = discos.find((disco) => disco.id === boton.id);
			console.log(disco);
			const discosCarrito = {
				id: disco.id,
				nombre: disco.nombre,
				precio: disco.precio,
				imagen: disco.imagen,
				cantidad: 1,
			};
			const discoEnCarrito = carrito.find((disco) => disco.id === discosCarrito.id);
			if (!discoEnCarrito) {
				carrito.push(discosCarrito);
			} else {
				discoEnCarrito.cantidad++;
			}
			localStorage.setItem("carrito", JSON.stringify(carrito));
		};
	});
}

console.log(carrito)
