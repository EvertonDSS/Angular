import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contador';

  public mostraConteudo = false;

  public toggle() {
    this.mostraConteudo = !this.mostraConteudo;
  }
}
