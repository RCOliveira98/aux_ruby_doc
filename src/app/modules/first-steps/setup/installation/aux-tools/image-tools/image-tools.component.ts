import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-tools',
  templateUrl: './image-tools.component.html',
  styleUrls: ['./image-tools.component.css']
})
export class ImageToolsComponent implements OnInit {

  imgPry: string;
  imgIrb: string;
  urlPry: string;
  urlIrb: string;

  constructor() { }

  ngOnInit(): void {
    this.imgPry = 'https://i.ibb.co/6NB1PYx/pry.png';
    this.imgIrb = 'https://i.ibb.co/cymxTFY/IRB.png';
    this.urlPry = 'http://pry.github.io/';
    this.urlIrb = 'https://github.com/ruby/irb';
  }

}
