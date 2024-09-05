/*
Enunciado 3:
    - Un Coche va a toda Velocidad por la Carretera.
    - Va a una Velocidad de 135km-h y el Límite es de 60km/h.
    - Comprueba que sí la velocidad es mayor al Límite.
    - Si es mayor debes mostrar un mensaje por la Consola indicando que baje la Velocidad.
    - Si es menor el mensaje deberá ser que todo va bien.
*/

var Exercise_3 = document.getElementById("Exercise3");

var Velocidad = prompt('¡Escoge la Velocidad!');

// Validamos si el valor ingresado es un número
if (isNaN(Velocidad) || Velocidad === "") {
    Exercise_3.innerHTML += `
        <h3>Por favor, ingresa un número válido para la velocidad.</h3>
    `;

    console.log("Entrada no válida. Ingresa un número.");

    alert("Error: ¡Ingresa un número válido para la velocidad!");

}

else{
    Velocidad = parseInt(Velocidad);

    const Limite = 60;

    if (Velocidad > Limite) {
        Exercise_3.innerHTML += `
            <h3>¡Tienes que reducir la velocidad! Vas a ${Velocidad} km/h y el límite es de ${Limite} km/h.</h3>
        `;

        console.log(`¡Tienes que reducir la velocidad! Vas a ${Velocidad} km/h y el límite es de ${Limite} km/h.`);

        alert(`¡Tienes que reducir la velocidad! Vas a ${Velocidad} km/h y el límite es de ${Limite} km/h.`);
    }

    else if(Velocidad == 0){
        Exercise_3.innerHTML += `
            <h3>¡No puedes ir a ${Velocidad} km/h de Velocidad! El Auto está parado, practicamente. ¡Por favor acelera!</h3>
        `;

        console.log(`¡No puedes ir a ${Velocidad} km/h de Velocidad! El Auto está parado, practicamente. ¡Por favor acelera!`);

        alert(`¡No puedes ir a ${Velocidad} km/h de Velocidad! El Auto está parado, practicamente. ¡Por favor acelera!`);
    }

    else{
        Exercise_3.innerHTML += `
            <h3>Todo va bien. Vas a ${Velocidad} km/h, que está por debajo del límite de ${Limite} km/h.</h3>
        `;

        console.log(`Todo va bien. Vas a ${Velocidad} km/h, que está por debajo del límite de ${Limite} km/h.`);

        alert(`Todo va bien. Vas a ${Velocidad} km/h, que está por debajo del límite de ${Limite} km/h.`);
    }

}