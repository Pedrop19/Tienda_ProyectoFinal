const carrito = JSON.parse(sessionStorage.getItem("carrito"));
const total = JSON.parse(sessionStorage.getItem("total"));

carritoNuevo();
function carritoNuevo(){
    const totalElement = document.getElementById("total");
    const table = document.getElementById("tabla");
    totalElement.textContent = total.toFixed(2);
    if(carrito.length != 0){
        carrito.forEach(p => {
            
            const row = table.insertRow(-1);
    
            const cell0 = row.insertCell(0)
            const cell1 = row.insertCell(1);
            const cell2 = row.insertCell(2);
            const cell3 = row.insertCell(3);
    
            cell0.innerHTML = "<img id='image' src=" + p.image + " height='50' max-width='50'/>";
            cell1.innerHTML = p.name;
            cell2.innerHTML = p.price;
            cell3.innerHTML = p.quantity;
        })
    } 
}


function mostrar(valor){
    document.getElementById("nombretitu").innerHTML = valor;
}

function mostrarnum(valor){
    document.getElementById("numero").innerHTML = valor + " ";
}

function mostrarnum1(valor){
    document.getElementById("numero1").innerHTML = valor + " ";
}

function mostrarnum2(valor){
    document.getElementById("numero2").innerHTML = valor + " ";
}

function mostrarnum3(valor){
    document.getElementById("numero3").innerHTML = valor + " ";
}

function mostrardia(valor){
    document.getElementById("dia").innerHTML = valor + " / ";
}

function mostrarmes(valor){
    document.getElementById("mes").innerHTML = valor;
}

function mostrarCVV(valor){
    document.getElementById("cvv").innerHTML = valor;
}


