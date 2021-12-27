import { Component } from '@angular/core';

@Component({
  selector: 'app-caixa-de-texto',
  templateUrl: './caixa-de-texto.component.html',
  styleUrls: ['./caixa-de-texto.component.css']
})
export class CaixaDeTextoComponent {
  contarCaracteres(texto: string) {
    console.log(texto.length);
  }

 /*Vamos refatorar o método onKeyPress() para que ele receba apenas o texto no textarea como parâmetro*/
}
