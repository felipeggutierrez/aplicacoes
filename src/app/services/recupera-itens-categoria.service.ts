import { Injectable } from '@angular/core';
import { CategoriaEnum } from '../models/categoriaEnum';
import { ItemCategoria } from '../models/ItemCategoria';

@Injectable({
  providedIn: 'root'
})
export class RecuperaItensCategoriaService {

  constructor() { }

  recuperaItensCategoria(categoriaEnum: CategoriaEnum): Array<ItemCategoria> {
    let retorno: Array<ItemCategoria> = [];
    if(categoriaEnum === CategoriaEnum.GERAL) {
      retorno = [{titulo:'G1', 
                  subTitulo:'notícias do G1 da Globo',
                  pathImage:'assets/icons/g1.png',
                  urlRss:'http://g1.globo.com/dynamo/rss2.xml'}];

    } else if(categoriaEnum === CategoriaEnum.MUNDO) {
      retorno = [{titulo:'Mundo G1', 
                  subTitulo:'notícias do G1 da Globo (Mundo)',
                  pathImage:'assets/icons/mundo.jpeg',
                  urlRss:'http://g1.globo.com/dynamo/mundo/rss2.xml'}];
    }
    return retorno;
  }
}
