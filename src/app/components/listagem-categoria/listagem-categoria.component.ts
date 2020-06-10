import { Component, OnInit, Input } from '@angular/core';
import { ItemCategoria } from 'src/app/models/ItemCategoria';
import { RecuperaItensCategoriaService } from 'src/app/services/recupera-itens-categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-categoria',
  templateUrl: './listagem-categoria.component.html',
  styleUrls: ['./listagem-categoria.component.css']
})
export class ListagemCategoriaComponent implements OnInit {



  @Input()
  itensCategoria: Array<ItemCategoria>

  constructor(private router: Router) { }

  ngOnInit(): void {
   
  }

  listarNoticias(item: ItemCategoria) {
    this.router.navigate(['listagem-noticias', item.urlRss]);
  }

}
