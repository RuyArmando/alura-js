export class SistemaAutenticacao {
  static login(funcionario, senha) {
    if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
      return funcionario.autenticar(senha);
    }

    return false;
  }
  static ehAutenticavel(autenticavel) {
    return (
      "autenticar" in autenticavel &&
      autenticavel.autenticar instanceof Function
    );
  }
}
