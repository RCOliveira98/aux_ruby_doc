import { Component, OnInit } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-arithmetic-operators',
  templateUrl: './arithmetic-operators.component.html',
  styleUrls: ['./arithmetic-operators.component.css']
})
export class ArithmeticOperatorsComponent implements OnInit {

  iconEbook = faBook;

  constructor() { }

  ngOnInit(): void {
  }

}
