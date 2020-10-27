import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  str: string;
  errorConvertFloatToString: string;
  stringInterpolationExample: string;
  stringInterpolationSyntax: string;
  messageCodepoint: string;

  constructor() { }

  ngOnInit(): void {
    this.stringInterpolationSyntax = '#{}';
    this.errorConvertFloatToString = 'TypeError: no implicit conversion of Float into String';
    this.str = '#{name}';
    this.stringInterpolationExample = '#{credit}';
    this.messageCodepoint = 'Codepoint: valor numérico que representa um determinado caractere na tabela ASCII';
  }

}
