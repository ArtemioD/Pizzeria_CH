'use strict'

let myTimer = setInterval(() => {}, 0);
const arrayCompras = [];

function btn_home() {
    // pizzas esta en pizza.js con jQuere => hacer html con jquere
    pizzas.html(agregar_html());
    pizzas.css("background", "url(img/fondo_mad.jpg)");
    pizzas.css("height", "550px");
    carusel(1);
}

const agregar_html = () => {
    const aleratArray = crearAleratorio();
    let tr = 0;
    let out = `<h3>Nuestras Pizzas Más Populares</h3>
            <div id="c_slider">
                <div id="slider">`;
    for (let i = 0; i < 3; i++) {
        out += `<section class="fotos_section">`;
        for(let j = 0; j < 3; j++) {
            let vov = aleratArray[tr];
            out += `<div>
                        <img src= ${pizzasArr[vov].foto} alt="pizza">   
                        <p>${pizzasArr[vov].nombre} $${pizzasArr[vov].precio}<br>
                        <button class="buttos_car" id="${pizzasArr[vov].id}_pizza" onclick=GuardarPizzaCarrito(${vov})>
                        agregar al carrito</button></p>   
                    </div>`;
            tr++;
        }
        out += `</section>`;   
    }
    out += `</div>
                <div id="btn_prev">&#60;</div>
                <div id="btn_next">&#62;</div>
            </div>`;
    return out;   
}

const crearAleratorio = () => {
    const aleratArray = [];
    while(aleratArray.length <= 8) {
                //Math.floor(Math.random() * ((máximo+1) - mínimo) + mínimo);
        let aux = Math.floor((Math.random() * 14)); // numeros aleratorios entre 0 y 13             
        if(!aleratArray.includes(aux)) aleratArray.push(aux);
    }
    return aleratArray;
}

// --------------------------------------------------------------- => agregar el carrito
const GuardarPizzaCarrito = (posis) => {
    // si array es vasio lo cargamos de localStorage
    if (arrayCompras.length === 0) {
        const almacenados = JSON.parse(localStorage.getItem("carrito de compras"));
        //Iteramos almacenados con for...of para transformar todos sus objetos a tipo ProductoPizza.
        if (almacenados !== null) for (const objeto of almacenados) // objeto esta en pizza.js
                    arrayCompras.push(new Pizza(objeto.id, objeto.nombre, objeto.precio, objeto.foto, objeto.cantidad)); // cambier y hacer otro objeto con cantidaday guedar
    }
    // ****** vemos si el objeto ya esta en array
    let ver = true;
    for (const obj of arrayCompras) {
        if (obj.nombre === pizzasArr[posis].nombre) {
            ver = false;
            break;
        } 
    }
    if (ver) arrayCompras.push(pizzasArr[posis]); // ****** si no esta lo guerdamos
    localStorage.setItem("carrito de compras", JSON.stringify(arrayCompras)); // guardamos / modificamos localStorage
    arrayCompras.length = 0;
}

// **************************** carusel ***************************

function carusel(andar_time) {
    // almacenar elementos en variable
    let slider = $('#slider');
    let siguiente = $('#btn_next');
    let anterior = $('#btn_prev');

    // mover ultimo imagen al primer lugar
    $('#slider section:last').insertBefore('#c_slider section:first');

    // mostrar la primera imagen con un margen de -100%
    slider.css('margin-left', `-${100}%`);
    //'-' + 100 + '%'

    function moverIzquerda() { // 
        // mover imagen a -200%
        slider.animate({marginLeft: `-${200}%`}, 700, () => {
            // mover primer a ultimo lugar
            $('#slider section:first').insertAfter('#slider section:last');
            slider.css('margin-left', `-${100}%`);
        });       
    }

    function moverDerecha() {
        slider.animate({marginLeft: 0}, 700, () => {
            $('#slider section:last').insertBefore('#slider section:first');
            slider.css('margin-left', `-${100}%`);
        });
    }

    function autoPlay(andar_time) {
        if (andar_time === 1) {
            clearInterval(myTimer);
            myTimer = setInterval(moverDerecha, 5000);
        }else clearInterval(myTimer); //setInterval(() => moverDerecha(), 5000); // lo mismo que linea arriba      
    }

    siguiente.on('click', () => moverDerecha());
    anterior.on('click',  () => moverIzquerda());
    autoPlay(andar_time);
}