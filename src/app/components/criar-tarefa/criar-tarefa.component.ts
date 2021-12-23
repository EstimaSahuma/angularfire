import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrls: ['./criar-tarefa.component.css']
})
export class CriarTarefaComponent implements OnInit {
  item: FormGroup;
  submetido = false;

  constructor(private fb: FormBuilder, private _itemService: ItemService, private _router: Router, private toastr: ToastrService) { 
    this.item = this.fb.group({
      nome: ['', Validators.required],
      apelido: ['', Validators.required],
      documento: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  salvarItem()
  {
    const item: any = {
      nome: this.item.value.nome,
      apelido: this.item.value.apelido,
      documento: this.item.value.documento
    }

    this._itemService.storeItem(item).then(() => {
      this.toastr.success('Sucesso no Registo.', 'Exito Registo...');
      this._router.navigate(['/listar-tarefa']);
    }).catch(error =>{
      console.log(error);
    });
  }

}
