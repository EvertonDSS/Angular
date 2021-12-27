import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onClick() {
    alert('Você clicou aqui!');
    var numero: number = 0;
    {
      numero = numero + 1;
    }
    console.log(numero);
  }

}
