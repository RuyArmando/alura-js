import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(cliente) {
        super(saldoInicial, cliente, 100);
      }
    
      sacar(valor) {
        const taxa = 1.02;
        return this._sacar(valor, taxa);
      }
}