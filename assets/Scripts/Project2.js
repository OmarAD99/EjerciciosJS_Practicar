/*
Enunciado 2:
    - Crea un Fichero de JavaScript y Vinculalo a tu Fichero HTML
    - Debes crear las Variables marca, velocidad, Stock y Módelos (Array).
    - Todas las Variables deberán ser mostradas por la Pantalla (con una Frase).
    - Debes mostrar cada uno de los Elementos del Array (sin hacerlo manualmente)
*/

var Exercise_2 = document.getElementById("Exercise2");

var Marca = String("Audi"),
    Velocidad = parseInt(200),
    Stock = Boolean(true),
    Modelos = ["R8", "A3", "A7"];

var Frase = `Tenemos coches de la Marca ${Marca},
van a una Velocidad Máxima de ${Velocidad} km/h.
`;

Modelos.forEach(Modelo => {
    Frase += `\n- ${Modelo}\n`;
});

Exercise_2.innerHTML += `
    <h3>${Frase}</h3>
`;

console.log(`¡${Frase}!`);

alert(`¡${Frase}!`);