import { Component, OnInit } from '@angular/core';

import { faCalculator, faTerminal } from '@fortawesome/free-solid-svg-icons';

import { Operators } from '../models/operators.model';

@Component({
  selector: 'app-arithmetic-operators',
  templateUrl: './arithmetic-operators.component.html',
  styleUrls: ['./arithmetic-operators.component.css']
})
export class ArithmeticOperatorsComponent implements OnInit {

  iconCalc = faCalculator;
  iconTerminal = faTerminal;
  operationsList: Operators[];

  constructor() { }

  ngOnInit(): void {
    this.operationsList = [
      {name: 'Adição', symbol: '+', example: '5 + 4 = 9'},
      {name: 'Subtração', symbol: '-', example: '5 - 4 = 1'},
      {name: 'Multiplicação', symbol: '*', example: '2 * 5 = 10'},
      {name: 'Divisão', symbol: '/', example: '20 / 10 = 2'},
      {name: 'Módulo (Resto da divisão)', symbol: '%', example: '10 % 3 = 1'},
      {name: 'Potência', symbol: '**', example: '5 ** 2 = 25'}
    ];
  }

}
