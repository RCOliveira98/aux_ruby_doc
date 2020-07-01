import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-is-ruby',
  templateUrl: './what-is-ruby.component.html',
  styleUrls: ['./what-is-ruby.component.css']
})
export class WhatIsRubyComponent implements OnInit {

  linkLisp: string;
  linkAda: string;
  linkPerl: string;
  linkEiffel: string;
  linkSmalltalk: string;
  linkC: string;

  constructor() { }

  ngOnInit(): void {
    this.linkLisp = 'https://pt.wikipedia.org/wiki/Lisp#:~:text=Tanto%20os%20dados%20como%20o,Common%20Lisp%2C%20Scheme%20e%20Clojure.';
    this.linkAda = 'https://pt.wikipedia.org/wiki/Ada_(linguagem_de_programa%C3%A7%C3%A3o)#:~:text=Ada%20%C3%A9%20uma%20Linguagem%20de,Pascal%2C%20Simula%20e%20outras%20linguagens.&text=Ada%20%C3%A9%20uma%20aplica%C3%A7%C3%A3o%20com,tais%20como%20softwares%20de%20avia%C3%A7%C3%A3o.';
    this.linkEiffel = 'https://linguagemeiffel.wordpress.com/#:~:text=Eiffel%20%C3%A9%20uma%20Linguagem%20de,Eiffel%20%C3%A9%20baseada%20em%20classes.';
    this.linkSmalltalk = 'https://pt.wikipedia.org/wiki/Smalltalk#:~:text=Smalltalk%2D80%2C%20ou%20simplesmente%20Smalltalk,%2C%20blocos%20de%20c%C3%B3digo%2C%20etc.';
    this.linkPerl = 'https://pt.wikipedia.org/wiki/Perl';
    this.linkC = 'https://pt.wikipedia.org/wiki/C_(linguagem_de_programa%C3%A7%C3%A3o)';
  }

}
