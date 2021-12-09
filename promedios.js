let numeros = [2,4,5];

const suma = numeros.reduce(function(acumulador = 0, valor ){
    return acumulador + valor;
})

console.log(suma);

moda = [1,2,2,5,2,1,2,2,1];
const modaCount={}

moda.map(function(elemento){
    if (modaCount[elemento]){
        modaCount[elemento]++;
    }else{
        modaCount[elemento]=elemento;
    }
})

console.log(modaCount);