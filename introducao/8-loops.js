console.log(`Trabalhando com loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log(`\n Destinos possíveis:`);
console.log(listaDeDestinos);

const podeComprar = (idadeComprador >= 18 || estaAcompanhada);

let contador = 0;
let destinoExiste = false;

while (contador < listaDeDestinos.length) {

    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }

    contador++;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste)
    console.log("Boa Viagem!");
else
    console.log("Desculpe tivemos um erro");

destinoExiste = false;

for (let i = 0; i < listaDeDestinos.length; i++) {

    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
        break;
    }
}

if (podeComprar && destinoExiste)
    console.log("Boa Viagem!");
else
    console.log("Desculpe tivemos um erro");