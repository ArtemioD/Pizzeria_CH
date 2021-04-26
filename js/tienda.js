'use strict'

function btn_Tienda() {
    carusel(0);
    // pizzas esta en pizza.js con jQuere => hacer html con jquere
    pizzas.html(hacerTienda());
    $("#pizzas_tienda").css("background", "url(img/madera.jpg)");
    pizzas.css("height", "2340px");
}

const hacerTienda = () => {
    let auxx = 0;
    let outt = `<article id="pizzas_tienda">
                    <h3>Nuestras pizzas para todos los gustos</h3>
                    <div>`;
    for (let i = 0; i < 5; i++) {
        outt += `<section class="pizzas_varios">`;
        for(let j = 0; j < 3; j++) {
            if(i === 4 && j === 2) break;
            outt += `<div class="pizas_ind">
                        <img src="${pizzasArr[auxx].foto}" alt="pizza">
                        <div class="buttonYp">
                            <p>${pizzasArr[auxx].nombre}<br>$${pizzasArr[auxx].precio}</p>
                            <button class="btn_carrito" onclick=GuardarPizzaCarrito(${auxx})>agregar <br>al carrito</button>
                        </div>
                    </div>`; // llamamos a la funcion GuardarPizzaCarrito que esta en home.js
            auxx++;
        }
        outt += `</section>`;
    }
    outt += `</div></article>`
    return outt;
}