'use strict'

function btn_historia() {
    carusel(0);
    pizzas.html(historiaDePizza());
    $("#historia_de_pizza").css("background", "rgb(228, 226, 185)");
    pizzas.css("height", "1234px");
}

const historiaDePizza = () => `<article id="historia_de_pizza">
<h3>LA HISTORIA DE LA PIZZA</h3>
<div id="pizza_casera">
    <img src="img/pizza_italiana.jpg" alt="pizza italiana casera">
    <p><span>L</span>a historia de la pizza está ligada al consumo del pan por parte de la humanidad. En el antiguo
        Egipto al descubrir la levadura empiezan a prepararse una especie de panes con la forma y el color
        del sol, con harina, agua y miel. En la antigua Grecia este pan fue evolucionando y le añadían
        grasa, especias, ajo y cebolla. En la época de Dario I el Grande los soldados persas le ponían al
        pan queso fundido y dátiles. En Italia se conocía como “pizza bianca” elaborada con pan, grasa,
        hierbas, ajo, cebolla, aceitunas… los ingredientes disponibles en la mayoría de los hogares
        humildes, era un plato al alcance de la mayoría.
    </p>

    <p>Con la llegada del tomate a Europa desde América, este plato dio un giro inesperado. Siendo en
        Nápoles en el siglo XVI cuando se empezó a consumir los tomates como alimento mientras que en el
        resto de Europa no se consumieron hasta el siglo XVIII.
    </p>

    <p>Al principio el tomate se consideraba venenoso y solo se utilizaba en la jardinería a modo
        decorativo, no eran contemplados como alimento, hasta que un día un campesino napolitano por su
        necesidad de comer, acompañó su pan de un tomate y le encantó, al sobrevivir se corrió la voz y a
        partir de entonces la gente humilde napolitana empezó a comer los tomates con sus panes secos.
        Convirtiéndose esta combinación de pan con tomate en un plato muy apreciado en la región de Nápoles.
        Al ser un plato consumido principalmente por la gente humilde, la mayoría no poseían un horno propio
        por lo que preparaban la masa en sus casas y se la llevaban al panadero para hornearla. Con el paso
        del tiempo, debido a su gran demanda, los pizzeros napolitanos crean su propio gremio, separado de
        los clásicos panaderos, preparando ellos mismos la masa y horneándola, volviéndose un plato muy
        popular entre la gente que se lo llevaba a su casa o se lo comía en la calle, apareciendo también
        vendedores ambulantes de este rico majar.
    </p>

    <p>Es en el siglo XVII en Italia, concretamente en Nápoles, cuando aparece la pizza como plato popular
        tal y como la conocemos hoy en día
    </p>

    <p>Se abre la primera pizzería en el año 1830 “Port’ Alba”, a la que auguraban poco futuro y sin embargo
        sigue abierta hasta hoy en día.
    </p>

    <img id="pizza_hoy" src="img/pizza_de_hoy.jpg" alt="pizza italiana casera">
    <p>Raffaele Espósito, un conocido pizzero de Nápoles de aquella época, dueño de la pizzería “Pietro il
        Pizzaiolo”, que hoy conocemos bajo el nombre de “Pizzeria Brandi”, en junio de 1889 fue el encargado
        de elaborar unas pizzas para los reyes italianos, Don Umberto I y Doña Margarita de Savoya, que se
        encontraban en Nápoles y se les antojó probar ese plato tan famoso que consumía la gente humilde de
        la ciudad, solicitando que se las llevaran a la residencia real. Raffaele Espósito horneó y envió a
        sus majestades tres pizzas diferentes: la primera, “Mastunicola”, elaborada con manteca de cerdo,
        queso y albahaca; la segunda, llamada “Marinara”, condimentada con ajo, aceite y tomates; y la
        tercera, que denominó “Monarca” con la que quiso honrar a los reyes dibujando los colores de la
        bandera nacional italiana (verde, blanco y rojo) con los ingredientes albahaca, queso mozzarella y
        tomates. Resultando esta última ser la preferida de la reina, por lo que fue rebautizada por
        Raffaele Espósito como “Pizza Margarita”.
    </p>

    <p>A partir de ese momento todos querían probar la pizza preferida de la reina, por lo que se extendió
        por toda Italia rápidamente convirtiéndose en el símbolo gastronómico de todo el país y en un
        elemento unificador ya que todos desde la reina hasta el más humilde campesino podían comerla.
    </p>

    <p>No pasó mucho tiempo para que la pizza fuera conocida y apreciada más allá de Italia y conquistase el
        mundo entero.
    </p>

    <p>La historia de la pizza ha llegado hasta nuestros días gracias a una reina y un pizzero, así que si
        quieres disfrutar como una reina o un rey no dejes de probar nuestras Pizzas, con mas de 10 sabrosas
        recetas para todos los gustos.
    </p>

    <p>¿Y a ti? ¿Qué pizza te gustaria ♥ probar hoy? ☺</p>
</div>
</article>`;