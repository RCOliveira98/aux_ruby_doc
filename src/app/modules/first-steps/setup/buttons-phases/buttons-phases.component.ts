import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-phases',
  templateUrl: './buttons-phases.component.html',
  styleUrls: ['./buttons-phases.component.css']
})
export class ButtonsPhasesComponent implements OnInit {

  option: number;
  list: any[];

  constructor() { }

  ngOnInit(): void {
    this.list = [
      {value: 1, title: 'Instalação'},
      {value: 2, title: 'Entrada e saída'},
      {value: 3, title: 'Operadores'},
      {value: 4, title: 'Estrutura de decisão'},
      {value: 5, title: 'Estrutura de repetição'},
      {value: 6, title: 'Hash'}
    ];
  }

}
