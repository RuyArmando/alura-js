import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 1234567899);

const diretorLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteLogado = SistemaAutenticacao.login(gerente, "123");
const clienteLogado = SistemaAutenticacao.login(cliente, "456");

console.log(diretorLogado, gerenteLogado, clienteLogado);
