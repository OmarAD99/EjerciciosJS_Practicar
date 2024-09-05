/*
Enunciado 1:
    - Crea un fichero JavaScript y Vinculalo con tu Fichero HTML
    - Debes crear las Variables Nombre, Apellido, Edad, País y Conocimientos
    - Muestra todos los Valores de las Variables por Consola.
    - Después cambia el Valor a Edad y añade un Nuevo Elemento al Array.
    - Muestra esos nuevos valores ya sea por consola o por Documento HTML
*/

var Exercise_1 = document.getElementById("Exercise1");

var Nombre = String("Omar");
var Apellidos = String("Aguilar Dávila");
var Edad = parseInt(24);
var País = String("México");
var Conocimientos = ["HTML", "CSS", "JavaScript", "React", "Angular", "Node JS", "Python", "SQL"];

Exercise_1.innerHTML += `
    <h3>¡Hola! Soy ${Nombre} ${Apellidos}, tengo ${Edad} años, vivo en ${País} y tengo conocimientos en los siguientes Lenguajes: ${Conocimientos[0]}, ${Conocimientos[1]}, ${Conocimientos[2]}, ${Conocimientos[3]}, ${Conocimientos[4]}, ${Conocimientos[5]}, ${Conocimientos[6]} y ${Conocimientos[7]}</h3><br>
`;

console.log(`¡Hola! Soy ${Nombre} ${Apellidos}, tengo ${Edad} años, vivo en ${País} y tengo conocimientos en los siguientes Lenguajes: ${Conocimientos[0]}, ${Conocimientos[1]}, ${Conocimientos[2]}, ${Conocimientos[3]}, ${Conocimientos[4]}, ${Conocimientos[5]}, ${Conocimientos[6]} y ${Conocimientos[7]}`);

alert(`¡Hola! Soy ${Nombre} ${Apellidos}, tengo ${Edad} años, vivo en ${País} y tengo conocimientos en los siguientes Lenguajes: ${Conocimientos[0]}, ${Conocimientos[1]}, ${Conocimientos[2]}, ${Conocimientos[3]}, ${Conocimientos[4]}, ${Conocimientos[5]}, ${Conocimientos[6]} y ${Conocimientos[7]}`);

var Edad = parseInt(25);
Conocimientos.push("PHP");

Exercise_1.innerHTML += `
    <h3>¡Ahora tengo ${Edad} años y he aprendido ${Conocimientos[8]}!</h3>
`;

console.log(`¡Ahora tengo ${Edad} años y he aprendido ${Conocimientos[8]}!`);

alert(`¡Ahora tengo ${Edad} años y he aprendido ${Conocimientos[8]}!`);