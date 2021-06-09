console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log(`Boa Viagem!`);
    listaDeDestinos.splice(1, 1);
} else {
    console.log(`Comprador menor de idade ou não esta acompanhado não posso vender`);
}

console.log("Embarque: \n\n");

if (idadeComprador >= 18 && temPassagemComprada) {
    console.log(`Embarque permitido!`);
} else {
    console.log(`Você não pode embarcar!`);
}

console.log(listaDeDestinos);