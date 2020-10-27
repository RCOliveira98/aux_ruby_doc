import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-types',
  templateUrl: './data-types.component.html',
  styleUrls: ['./data-types.component.css']
})
export class DataTypesComponent implements OnInit {

  troubledComputer: string;

  constructor() { }

  ngOnInit(): void {
    this.troubledComputer = 'https://i.ibb.co/23byLZZ/computer-Off.png';
  }

}
