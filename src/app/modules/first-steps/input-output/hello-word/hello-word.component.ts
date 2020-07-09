import { Component, OnInit } from '@angular/core';

import { faSmile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hello-word',
  templateUrl: './hello-word.component.html',
  styleUrls: ['./hello-word.component.css']
})
export class HelloWordComponent implements OnInit {

  msg: string;
  smile = faSmile;

  constructor() { }

  ngOnInit(): void {
    this.msg = 'Caso não tenha instalado o IRB ou PRY crie um arquivo chamado de primeiro_programa.rb e digite o código abaixo. No terminal execute: ruby primeiro_programa.rb';
  }

}
