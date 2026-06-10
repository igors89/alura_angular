import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from "src/app/app-routing.module";

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [];

  constructor() { }

  ngOnInit(): void {
  }

}
