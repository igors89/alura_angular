import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Angular Componente Pai',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Angular Componente Filho',
      modelo: 'modelo2'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
