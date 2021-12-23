import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaLivrosComponent } from './lista-livros/lista-livros.component';
import { RevistaComponent } from './revista/revista.component';
import { FilmeComponent } from './filme/filme.component';
import { ProdutoComponent } from './produto/produto.component';
import { LivroComponent } from './livro/livro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaLivrosComponent,
    RevistaComponent,
    FilmeComponent,
    ProdutoComponent,
    LivroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
