const carrito = [];

function anadirCarrito(id) {
  const product = products.find((p) => p.id === id);
  var stockvacio = false;

  if (product) {
    const existingProduct = carrito.find((p) => p.id === id);
    if (existingProduct && product.stock != 0 && !stockvacio) {
      existingProduct.quantity++;
      product.stock -= 1;
      console.log(product.stock);
    } else if(product.stock <= 0){
      alert("No queda stock");
      stockvacio = true;
    }else {
      product.quantity = 1;
      product.stock -= 1;
      console.log(product.stock);
      carrito.push(product);
    }

    actualizarCarrito();
    calcularTotal();
  }
}

function eliminarProductoCarrito(id) {
  const index = carrito.findIndex((product) => product.id === id);
  
  if (index !== -1) {
    carrito.splice(index, 1);
    actualizarCarrito();
    calcularTotal();
  }
}

function actualizarCarrito() {
  const table = document.getElementById("tabla");
  table.innerHTML = ""; // Limpiar la tabla antes de actualizarla

  carrito.forEach((product) => {
    const row = table.insertRow(-1);

    const cell0 = row.insertCell(0)
    const cell1 = row.insertCell(1);
    const cell2 = row.insertCell(2);
    const cell3 = row.insertCell(3);
    const cell4 = row.insertCell(4);

    cell1.innerHTML = "<img id='image' src=" + product.image + " height='50' max-width='50'/>";
    cell2.innerHTML = product.name;
    cell3.innerHTML = product.price;
    cell4.innerHTML = product.quantity;

    const removeButton = document.createElement("button");
    removeButton.textContent = "x";
    removeButton.addEventListener("click", () => eliminarProductoCarrito(product.id));

    cell0.appendChild(removeButton);
  });
}

function calcularTotal() {
  const totalElement = document.getElementById("total");
  const total = carrito.reduce((acc, product) => acc + product.price * product.quantity, 0);
  totalElement.textContent = total.toFixed(2);
  sessionStorage.setItem("total", JSON.stringify(total));
}

function comprar(){
  if(carrito != 0){
    window.location.href = "../html/pago.html";
    sessionStorage.setItem("carrito", JSON.stringify(carrito));

  }else{
    alert("El carrito esta vacio");
  }
}

// function eliminartodo(){
//   carrito.length = 0;
//   actualizarCarrito();
//   calcularTotal();
// }