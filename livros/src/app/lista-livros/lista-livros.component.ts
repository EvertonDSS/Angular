import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public livros =
    ["Harry Potter", "Senhor dos Anéis", "O Hobbit"];

} 
