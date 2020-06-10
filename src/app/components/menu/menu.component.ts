import { Component, OnInit } from '@angular/core';
import { RecuperaItensCategoriaService } from 'src/app/services/recupera-itens-categoria.service';
import { ItemCategoria } from 'src/app/models/ItemCategoria';
import { NullTemplateVisitor } from '@angular/compiler';
import { CategoriaEnum } from 'src/app/models/categoriaEnum';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class Menu implements OnInit {

  arrayActive: Array<boolean> = [true, false, false];
  itensCategoria: Array<ItemCategoria>;
  mapIndexCategoria: Map<number, CategoriaEnum>;

  constructor(private recuperaItensCategoria: RecuperaItensCategoriaService) { 
    this.mapIndexCategoria = new Map();
    this.mapIndexCategoria.set(0, CategoriaEnum.GERAL);
    this.mapIndexCategoria.set(1, CategoriaEnum.MUNDO);
    this.mapIndexCategoria.set(2, CategoriaEnum.LOTERIAS);

  }

  ngOnInit(): void {
    this.itensCategoria = this.recuperaItensCategoria.recuperaItensCategoria(this.getCategoriaActive());
  }

  clickMenuActive(positionArray: number) {
    
    for (let index = 0; index < this.arrayActive.length; index++) {
      if(index === positionArray) {
        this.arrayActive[index] = true;
      } else {
        this.arrayActive[index] = false;
      }
    }

    this.itensCategoria = this.recuperaItensCategoria.recuperaItensCategoria(this.getCategoriaActive());
  }

  getCategoriaActive(): CategoriaEnum {
    let categoriaActive: CategoriaEnum;
    categoriaActive = this.mapIndexCategoria.get(this.arrayActive.indexOf(true, 0));
    return categoriaActive;
  }

}
