import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AnuncioModule } from "../../anuncio/anuncio.module";
import { AnunciosComponent } from "./anuncios.component";

@NgModule({
    declarations: [AnunciosComponent],
    imports: [
        CommonModule,
        AnuncioModule
    ],
    exports: [AnunciosComponent]
})
export class AnunciosModule {

}