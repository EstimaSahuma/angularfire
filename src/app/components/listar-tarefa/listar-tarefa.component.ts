import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {
  items: any[] = [];

  constructor(private _itemService: ItemService, private toastr: ToastrService)
  {
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems()
  {
    this._itemService.getItem().subscribe(data => {
      this.items = [];
      data.forEach((element: any) => {
        
        this.items.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
      //console.log(this.items);
    });
  }

  deleteItem(id: string){
    this._itemService.deleteItem(id).then(() => {
      this.toastr.warning('Sucesso.', 'Eliminado com Sucesso...');
    }).catch(error => {
      console.log(error);
    });
  }

}
