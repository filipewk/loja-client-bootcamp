import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnuncioListModule } from './anuncios/anuncio-list/anuncio-list.module';

import { AnunciosModule } from './anuncios/anuncio-list/anuncios/anuncios.module';
import { AnuncioModule } from './anuncios/anuncio/anuncio.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnuncioModule,
    AnunciosModule,
    AnuncioListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
