import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-images',
  templateUrl: './card-images.component.html',
  styleUrls: ['./card-images.component.css']
})
export class CardImagesComponent implements OnInit {

  figure1: string;
  figure2: string;

  constructor() { }

  ngOnInit(): void {
    this.figure1 = 'https://i.ibb.co/R7RkMVh/esquema-png.png';
    this.figure2 = 'https://i.ibb.co/X2YdZkY/Interpretador.png';
  }

}
