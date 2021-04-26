'use strict'
/* Cuántos números con el dígito 6 hay entre 1 y 1200? 

let cuanto = 0;
for(let i = 1; i < 1200; i++) {
    let po = "" + i;
    if(po.includes("6")) cuanto++;
}
console.log("total " + cuanto);
*/

$("#pizzas").ready(() => btn_home()); // funcion ejecuta automat al iniciar la pagina 
$("#home").click(() => btn_home());
//let home = document.getElementById("home");
//home.addEventListener("click", () => );

$("#tienda").click(() => btn_Tienda());
$("#historia").click(() => btn_historia());
$("#contacto").click(() => btn_contacto());
$("#carrito").click(() => mostrarCarrito());

$(".caja").html(() => `© Copyright ${new Date().getFullYear()} | Todos los derechos reservados | Desarrollado por A. Derkachev 04/2021`);