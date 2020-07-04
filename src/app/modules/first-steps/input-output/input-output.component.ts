import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  img: string;

  constructor() { }

  ngOnInit(): void {
    this.img = 'https://i.ibb.co/Zz8237J/foguete.png';
  }

}
