let productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
let datos = JSON.parse(localStorage.getItem("infoUsuario"))
const contenedorCarrito = document.getElementById('contenedorCarrito')
const parrafoTotal = document.getElementById('total')
let totalCompra = 0

function eliminarProducto(){
    const botonEliminar = document.querySelectorAll(".carrito-producto-eliminar");
	botonEliminar.forEach((boton) => {
		boton.onclick = () => {
			const discoIndex = productosEnCarrito.findIndex((disco) => disco.id === boton.id);
			console.log(discoIndex);
			if (productosEnCarrito[discoIndex].cantidad === 1) {
				productosEnCarrito.splice(discoIndex, 1);
			} else {
				productosEnCarrito[discoIndex].cantidad--;
			}
            Toastify({
                    text: "Producto eliminado",
                    duration: 3000,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "linear-gradient(to right, #4b33a8, #785ce9)",
                      borderRadius: "2rem",
                      textTransform: "uppercase",
                      fontSize: ".75rem"
                    },
                    offset: {
                        x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                        y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
                      },
                    onClick: function(){} // Callback after click
                  }).showToast();
			localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
			actualizarCarrito();
		};
	});
}

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = "";
  totalCompra = 0; 
  if (productosEnCarrito && productosEnCarrito.length > 0) {
    productosEnCarrito.forEach(disco => {
      totalCompra += disco.cantidad * disco.precio
      contenedorCarrito.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src=${disco.imagen} class="img-fluid rounded-start" alt="${disco.nombre}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text">${disco.nombre}</p>
                <p class="card-text">${disco.cantidad}</p>
                <p class="card-text">$${disco.cantidad*disco.precio}</p>
                <button type="button" class="carrito-producto-eliminar" id="${disco.id}" onclick="eliminarProducto(${disco.id})">Eliminar</button>

              </div>
            </div>
          </div>
        </div>
      `;
    });
    parrafoTotal.innerHTML = `El total a pagar es $${totalCompra}, Sr/Sra ${datos.apellido}
    <button type="button" class="finalizar" onclick="finalizarCompra()">Finalizar Compra</button>
    `
    ; 

  } else {
    parrafoTotal.innerHTML = `Seleccione productos para comprar`
  }
  
}
actualizarCarrito();

function finalizarCompra(){
    Swal.fire({
        icon: 'success',
        title: 'Muchas Gracias por su Compra!',
        text: 'El total a pagar es de $'+totalCompra,
        footer: '<a href="https://www.mercadopago.com.ar/">Proceder al pago</a>'
      })

}

