export class Coracao {
  constructor(
    public cheio: boolean,
    public urlCoracaoCheio = '/assets/img/coracao_cheio.png',
    public urlCoracaoVazio = '/assets/img/coracao_vazio.png'
  ) {
  }

  exibeCoracao(): string {
    if (this.cheio) {
      return this.urlCoracaoCheio;
    } else {
      return this.urlCoracaoVazio;
    }
  }

}
