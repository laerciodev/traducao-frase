import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES;
  public instrucao = 'Traduza a frase:';
  public resposta = '';

  public rodada = 0;
  public rodadaFrase: Frase;

  public progresso = 0;

  public tentativas = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
    console.log(this.rodadaFrase);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('component destruído!');
  }

  public atualizaResposta(event: Event): void {
    this.resposta = (event.target as HTMLInputElement).value;
  }

  public verificarResposta(): void {

    if (this.rodadaFrase.frasePtBr === this.resposta) {
      alert('Você acertou a tradução');
      // trocar pergunta da rodada
      this.rodada++;

      // progresso
      this.progresso += (100 / this.frases.length);

      if(this.rodada === 4) {
        this.encerrarJogo.emit('vitoria');
      }

      this.atualizaRodada();

      // limpa a resposta
      this.resposta = '';
    } else {
      this.tentativas--;

      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota');
      }
    }

  }


  public atualizaRodada() {
     // atualiza o objeto rodadaFrase
     this.rodadaFrase = this.frases[this.rodada];
  }
}
