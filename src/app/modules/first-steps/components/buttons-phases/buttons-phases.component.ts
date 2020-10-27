import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons-phases',
  templateUrl: './buttons-phases.component.html',
  styleUrls: ['./buttons-phases.component.css']
})
export class ButtonsPhasesComponent implements OnInit {

  list: any[];
  renderAlert: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.list = [
      {value: 1, title: 'Instalação'},
      {value: 2, title: 'Entrada e saída'},
      {value: 3, title: 'Tipos de dados'},
      {value: 4, title: 'Operadores'},
      {value: 5, title: 'Estrutura de decisão'},
      {value: 6, title: 'Estrutura de repetição'},
      {value: 7, title: 'Hash'}
    ];
  }

  redirectToUrl(option: number): void {
    let url: string;
    switch (option) {
      case 1: url = 'first_steps/installation'; break;
      case 2: url = 'first_steps/input_output'; break;
      case 3: url = 'first_steps/data_types'; break;
      case 4: url = 'first_steps/operators'; break;
      case 5: url = 'first_steps/decision_structure'; break;
      case 6: url = 'first_steps/repetition_structure'; break;
      case 7: url = 'first_steps/hash'; break;
      default: this.renderAlert = true;
    }
    if (url) {
      this.renderAlert = false;
      this.router.navigate([url]);
    }
  }

}
