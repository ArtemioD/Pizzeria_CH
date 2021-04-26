'use strict'

class Pizza {
    constructor(id, nombre, precio, foto, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.foto = foto;
        this.cantidad = cantidad;
        this.total = precio * cantidad;
    }
}

const pizzasArr = [new Pizza(1, "Ananá", 860, 'img/pizza_anana.jpg', 1), new Pizza(2, "Cantimpalo", 860, 'img/pizza_cantimpalo.jpg', 1),
        new Pizza(3, "Champignones", 860, 'img/pizza_champignones.jpg', 1), new Pizza(4, "Especial", 640, 'img/pizza_especial.jpg', 1),
        new Pizza(5, "Fugazza", 300, 'img/pizza_fugazza.jpg', 1), new Pizza(6, "Fugazza con queso", 570, 'img/pizza_fugazza_con_queso.jpg', 1),
        new Pizza(7, "Jamón y queso", 600, 'img/pizza_jamon_y_queso.jpg', 1), new Pizza(8, "Napolitana", 860, 'img/pizza_napolitana.jpg', 1),
        new Pizza(9, "Pollo", 860, 'img/pizza_pollo.jpg', 1), new Pizza(10, "Queso", 540, 'img/pizza_queso.jpg', 1), 
        new Pizza(11, "Queso con Anchoas", 860, 'img/pizza_queso_con_anchoas.jpg', 1), new Pizza(12, "Roquefort", 860, 'img/pizza_roquefort.jpg', 1), 
        new Pizza(13, "Rúcula", 860, 'img/pizza_rucula.jpg', 1), new Pizza(14, "Verdeo y Panceta", 860, 'img/pizza_verdeo_y_panceta.jpg', 1)];

let pizzas = $("#pizzas");
