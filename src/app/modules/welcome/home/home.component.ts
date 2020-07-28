import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tooltipText: string;
  logoRuby: string;
  imagePrimary: string;
  imageSecondary: string;
  logoOpenSource: string;

  constructor() { }

  ngOnInit(): void {
    this.logoRuby = 'https://i.ibb.co/jgB2fx1/logoRuby.png';
    this.logoOpenSource = 'https://i.ibb.co/mCTLX9H/opensource.png';
    this.imagePrimary = '../../../../assets/home2.svg';
    this.imageSecondary = '../../../../assets/home.svg';
    this.tooltipText = 'Software de código aberto é o software de computador com o seu código fonte disponibilizado e licenciado com uma licença de código aberto no qual o direito autoral fornece o direito de estudar, modificar e distribuir o software de graça para qualquer um e para qualquer finalidade. Fonte: https://pt.wikipedia.org/wiki/Software_de_c%C3%B3digo_aberto';
  }

}
