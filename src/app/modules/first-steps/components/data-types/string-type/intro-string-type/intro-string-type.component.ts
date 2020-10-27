import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-string-type',
  templateUrl: './intro-string-type.component.html',
  styleUrls: ['./intro-string-type.component.css']
})
export class IntroStringTypeComponent implements OnInit {

  errorString: string;

  constructor() { }

  ngOnInit(): void {
    this.errorString = "SyntaxError: unexpected tIDENTIFIER, expecting end-of-input district = 'caixa d'água' ^~~~~";
  }

}
