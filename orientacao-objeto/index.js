import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const contaCorrente = new ContaCorrente(1001, cliente1);
const contaPoupanca = new ContaPoupanca(20, cliente, 1001);
const contaSalario = new ContaSalario(cliente);

contaSalario.depositar(500);
contaSalario.sacar(100);

console.log(contaSalario);
