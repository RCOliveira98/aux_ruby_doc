import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-inference',
  templateUrl: './type-inference.component.html',
  styleUrls: ['./type-inference.component.css']
})
export class TypeInferenceComponent implements OnInit {

  imageCelebration: string;
  imageRest: string;
  imagePensive: string;
  imageCrystalBall: string;


  constructor() { }

  ngOnInit(): void {
    this.imageCelebration = 'https://i.ibb.co/2qd7NxD/celebracao.png';
    this.imageRest = 'https://i.ibb.co/HdmvCYK/descanso.png';
    this.imagePensive = 'https://i.ibb.co/4MShMh2/pensativo.png';
    this.imageCrystalBall = 'https://i.ibb.co/RCqv6j6/crystal-ball.png';
  }

}
