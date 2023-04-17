let productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
const contenedorCarrito = document.getElementById('contenedorCarrito')
const parrafoTotal = document.getElementById('total')
const fin = document.getElementById('fin')
let totalCompra = 0
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
                <button type="button" class="carrito-producto-eliminar" id="borrar-${disco.id}">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      `;
    });
    parrafoTotal.innerHTML = `El total a pagar es $${totalCompra}
    <button id="fin">Finalizar Compra</button>`
    ; 
    const eliminar = document.querySelectorAll(".carrito-producto-eliminar");
    for (let i = 0; i < eliminar.length; i++) {
      eliminar[i].addEventListener("click", () => {
        eliminarProducto(eliminar[i].id.split("-")[1]); 
      });
    }
  } else {
    parrafoTotal.innerHTML = `Seleccione productos para comprar`
  }
}

const eliminarProducto = (id) => {
  const idBuscado = parseInt(id);
  const indiceObjeto = productosEnCarrito.findIndex((disco) => disco.id === idBuscado);
  if (indiceObjeto !== -1) { 
    productosEnCarrito.splice(indiceObjeto, 1); 
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito)); 
    actualizarCarrito();
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

}
actualizarCarrito();


fin.addEventListener("click", finalizar);
function finalizar() {
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
}
