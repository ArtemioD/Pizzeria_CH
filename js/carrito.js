'use strict'

let verCarrito = $("#mostrar_carrito");
let control = true; // cambia el nombre al botton
let btn_carrito = $("#btn_carrito");
let tabla = "";
let pagaEf = "";
let totalAPagar = 0;
let v;
const productosCarrito = [];

function mostrarCarrito() {
    if (control) {
        obtenerCarrito(1);
        btn_carrito.html("Ocultar Carrito");
        control = false;
        $("#pizzas").css("display", "none");
        $("#navegacion").css("display", "none"); 
    }else { 
        obtenerCarrito(0);
        btn_carrito.html("Mostrar Carrito");
        control = true;
        $("#pizzas").css("display", "block");
        $("#navegacion").css("display", "flex");       
    }
    verCarrito.toggle("fast"); // muestea y oculta carrito
}

function obtenerCarrito(num_cont) {
    if (num_cont === 1) {
        tabla = "<h3>Tu Carrito de Compras";
        hacerTabla();
        verCarrito.append(tabla, pagaEf);
        verCarrito.css("display", "none");
    } else {
        //productosCarrito.length = 0;
        gur_carrito_nuevo(); 
        verCarrito.empty();
    } 
}

function hacerTabla() {
    totalAPagar = 0
    //Obtenemos el listado de productos almacenado
    const almacenados = JSON.parse(localStorage.getItem("carrito de compras"));
    
    if (almacenados === null || almacenados.length === 0) {
        tabla += ' esta vacio !!</h3> <img class="img_car" src="img/carrito_vacio.jpg" alt="carrito vacio">';
        pagaEf = "";
    } 
    else {
        tabla += `</h3><table border=1>
                        <tr>
                            <th>Pizza</th>
                            <th>Precio por unidad</th>
                            <th>Cantidad a pedir</th>
                            <th>Total</th>
                        </tr>`
        for (const objeto of almacenados) productosCarrito.push(new Pizza(objeto.id, objeto.nombre, objeto.precio, objeto.foto, objeto.cantidad));
        for (let i = 0; i < productosCarrito.length; i++){
        tabla += `<tr>
        <td>${productosCarrito[i].nombre}</td>
        <td>$${productosCarrito[i].precio}</td>
        <td>
            <button class="mishka" onclick=btn_restar(${i})>-</button>
                &nbsp&nbsp&nbsp <span id="${i}_sp">${productosCarrito[i].cantidad}</span>  &nbsp&nbsp&nbsp
            <button class="mishka" onclick=btn_agregar(${i})>+</button>
        </td>
        <td id="total${i}">$${productosCarrito[i].total}</td>
        </tr>`
        totalAPagar += productosCarrito[i].total;
        }
        tabla += `<tr>
                    <th colspan="3">Total a pagar</td>
                    <th id="tPagar">$${totalAPagar}</td>
                </tr>`; // calcular total a pagar
        pagaEf = `<p class='pagar_ef'>
                    Paga en efectivo en el momento de la entrega:&nbsp&nbsp&nbsp ==>> 
                    <button class='hacer_pd' onclick=btn_hacerPedidio()> Hacer pedido </button> <<== 
                <p><hr>`;
       
    } 
}

function btn_agregar(i_poss) {
    if (productosCarrito[i_poss].cantidad > 9) console.warn("no se puede comprar mas de 10 pizzas del mismo sabor !!");
    else {
        productosCarrito[i_poss].cantidad++;
        $(`#${i_poss}_sp`).html(productosCarrito[i_poss].cantidad);
        totalAPagar -= productosCarrito[i_poss].total; // restamos el total viejo
        productosCarrito[i_poss].total = productosCarrito[i_poss].precio * productosCarrito[i_poss].cantidad; // cambiamos total 
        totalAPagar += productosCarrito[i_poss].total; // sumamos total nuevo
        $(`#total${i_poss}`).html(`$${productosCarrito[i_poss].total}`);
        $("#tPagar").html(`$${totalAPagar}`);
    }     
}

function btn_restar(i_poss) {
    if (productosCarrito[i_poss].cantidad === 0) console.warn("numeros negativos !!");
    else{
        productosCarrito[i_poss].cantidad--;
        productosCarrito[i_poss].total -= productosCarrito[i_poss].precio;
        $(`#${i_poss}_sp`).html(productosCarrito[i_poss].cantidad);
        $(`#total${i_poss}`).html(`$${productosCarrito[i_poss].total}`);
        totalAPagar -= productosCarrito[i_poss].precio;
        $("#tPagar").html(`$${totalAPagar}`);
    }
}

function gur_carrito_nuevo() {
    for (let i = 0; i < productosCarrito.length; i++) if (productosCarrito[i].cantidad === 0) { 
        productosCarrito.splice(i, 1);
        i--;
    }
    localStorage.setItem("carrito de compras", JSON.stringify(productosCarrito)); // guardamos / modificamos localStorage
    productosCarrito.length = 0;
}

function btn_hacerPedidio() {
    mostrarCarrito();
    productosCarrito.length = 0;
    localStorage.setItem("carrito de compras", JSON.stringify(productosCarrito));
}