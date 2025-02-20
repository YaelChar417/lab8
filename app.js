// Ejercicio 1:
const array = [1, 9, 10, 7, 8, 5, 12, 11, 17, 20];

const getMedia = (array) => {
    let tam = array.length;
    let sum = 0;
    for(let i = 0; i < tam; i++)
    {
        sum += array[i];
    }
    return sum / tam;
};

console.log("El promedio es: ", getMedia(array));

// Ejercicio 2:
const text = "Me gusta la pizza sin piña";
const fs = require('fs');
fs.writeFileSync('hola.txt', text);
console.log('El mensaje escrito fue: ', text);